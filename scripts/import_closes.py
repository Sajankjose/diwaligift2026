"""Import a locally supplied, permitted NSE-format UDiFF CSV. No scraping.
Usage: python scripts/import_closes.py file.csv --date YYYY-MM-DD \
  --source 'Approved data provider' --valid-until 2026-10-21T09:00:00+05:30 \
  --public-display-permitted
Validity must end when the next session's report is expected, using the exchange
calendar (including holidays / special sessions). Do not extend an old report on
fetch failure. Generated prices.js is committed/deployed via normal review.
"""
import argparse, csv, datetime as dt, json, math
from pathlib import Path

STOCKS = {'ICICIBANK':'ICICI Bank','TECHM':'Tech Mahindra','LT':'Larsen & Toubro',
'EXIDEIND':'Exide Industries','KALYANKJIL':'Kalyan Jewellers','SAGILITY':'Sagility',
'BEML':'BEML','MOTHERSON':'Motherson','KOTAKBANK':'Kotak Mahindra Bank','ULTRACEMCO':'UltraTech Cement'}

def build(path, date, source, valid_until):
    day=dt.date.fromisoformat(date)
    now=dt.datetime.now(dt.timezone.utc)
    expiry=dt.datetime.fromisoformat(valid_until.replace('Z','+00:00'))
    today=now.astimezone(dt.timezone(dt.timedelta(hours=5,minutes=30))).date()
    if not source.strip() or day>=today or expiry.tzinfo is None or not now<expiry or (expiry.date()-day).days>10:
        raise ValueError('Require a past trading date, source and future timezone-aware expiry within 10 days of the report.')
    quotes={}
    with open(path,encoding='utf-8-sig',newline='') as f:
        for r in csv.DictReader(f):
            symbol=r.get('TckrSymb')
            if symbol not in STOCKS or r.get('SctySrs')!='EQ': continue
            close=float(r['ClsPric'])
            if symbol in quotes or r['TradDt']!=date or not math.isfinite(close) or close<=0:
                raise ValueError('Duplicate, mixed-date or invalid price: '+symbol)
            quotes[symbol]={'symbol':symbol,'name':STOCKS[symbol],'close':close}
    if set(quotes)!=set(STOCKS): raise ValueError('All ten campaign stocks must have verified EQ closes.')
    return {'asOf':date,'source':source,'validUntil':expiry.isoformat(),'quotes':list(quotes.values())}

if __name__=='__main__':
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('csv');p.add_argument('--date',required=True);p.add_argument('--source',required=True)
    p.add_argument('--valid-until',required=True);p.add_argument('--public-display-permitted',action='store_true',required=True)
    a=p.parse_args()
    data=build(a.csv,a.date,a.source,a.valid_until)
    dest=Path(__file__).resolve().parents[1]/'prices.js'
    tail=""" of window.CLOSING_PRICES.quotes) {
 const stock=window.CAMPAIGN.stocks.find(s=>s.name===q.name);
 if(stock) Object.assign(stock,{cmp:q.close,priceAsOf:window.CLOSING_PRICES.asOf,
 priceSource:window.CLOSING_PRICES.source,priceSourceUrl:null,
 priceValidUntil:window.CLOSING_PRICES.validUntil,priceVerified:true,
 priceBasis:null,quoteType:'previous_close',symbol:q.symbol});
}
"""
    content='/* Verified closing-price snapshot; generated from an approved source. */\nwindow.CLOSING_PRICES = '+json.dumps(data,ensure_ascii=False)+';\nfor (const q'+tail
    temp=dest.with_suffix('.tmp');temp.write_text(content);temp.replace(dest)
    print('Validated all ten closing prices; prices.js updated.')
