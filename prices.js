/* User supplied on 20 October 2026. Historical reference, not a live exchange feed. */
window.CLOSING_PRICES = {
  "asOf": "2026-10-19",
  "source": "User-supplied closing-price snapshot",
  "sourceUrl": "https://www.etmoney.com/stocks/list-of-stocks",
  "basis": "historical_reference",
  "validUntil": null,
  "quotes": [
    {
      "name": "ICICI Bank",
      "symbol": "ICICIBANK",
      "close": 1381
    },
    {
      "name": "Tech Mahindra",
      "symbol": "TECHM",
      "close": 1779.1
    },
    {
      "name": "Larsen & Toubro",
      "symbol": "LT",
      "close": 3661.9
    },
    {
      "name": "Exide Industries",
      "symbol": "EXIDEIND",
      "close": 359.35
    },
    {
      "name": "Kalyan Jewellers",
      "symbol": "KALYANKJIL",
      "close": 552
    },
    {
      "name": "Sagility",
      "symbol": "SAGILITY",
      "close": 43.99
    },
    {
      "name": "BEML",
      "symbol": "BEML",
      "close": 1939.6
    },
    {
      "name": "Motherson",
      "symbol": "MOTHERSON",
      "close": 158.15
    },
    {
      "name": "Kotak Mahindra Bank",
      "symbol": "KOTAKBANK",
      "close": 442.3
    },
    {
      "name": "UltraTech Cement",
      "symbol": "ULTRACEMCO",
      "close": 10620.1
    }
  ]
};
for (const q of window.CLOSING_PRICES.quotes) {
 const stock=window.CAMPAIGN.stocks.find(s=>s.name===q.name);
 if(stock) Object.assign(stock,{cmp:q.close,priceAsOf:window.CLOSING_PRICES.asOf,
 priceSource:window.CLOSING_PRICES.source,priceSourceUrl:window.CLOSING_PRICES.sourceUrl,
 priceValidUntil:window.CLOSING_PRICES.validUntil,priceVerified:false,
 priceBasis:window.CLOSING_PRICES.basis,quoteType:'previous_close',symbol:q.symbol});
}
