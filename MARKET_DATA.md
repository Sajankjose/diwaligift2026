# Market data — 20 October 2026

All ten stock prices supplied by the user for 19 October 2026 are stored verbatim in prices.js. The linked ET Money list is user-provided attribution, not independent validation of the dated closes. Each quote is marked historical_reference and priceVerified=false. Positive, dated historical prices support indicative share counts without claiming a live or verified exchange price. Approved-source imports clear that flag and retain strict expiry checks. Refresh reference prices before investment; charges are excluded.

Whole-share allocations initially floor each weighted target divided by its price. If rounding breaches an invested-value position/sector cap, reduce quantities in the offending holdings, preserving at least one share of every constituent and retaining the balance as cash. If that cannot satisfy caps, the model remains unavailable for allocation. Budgets below weighted constituent minimums do not silently remove expensive stocks.

## Mutual funds

Only the three funds used by the proposed model portfolios have market data in this release. The remaining research universe is unchanged. Exact ISIN and AMFI scheme-code matches confirm Regular Plan / Growth. End NAV date: 19 October 2026.

| Fund | NAV ₹ | 3Y CAGR | 5Y CAGR | 7Y CAGR |
|---|---:|---:|---:|---:|
| Nippon India Large Cap | 85.2708 | 9.06% | 10.27% | 14.10% |
| HDFC Flexi Cap | 1961.8010 | 13.67% | 13.69% | 17.22% |
| HDFC Balanced Advantage | 504.2270 | 9.38% | 11.85% | 14.63% |

AMFI historical NAV downloads and selected raw records with hashes are recorded in sources/model-fund-nav-provenance.json. CAGR = ((endNAV/startNAV)^(365.25/elapsedDays)-1)*100. Starts are 19 October 2023, 19 October 2021 and 18 October 2019 (last available NAV before the seven-year anniversary). These are annualised lump-sum NAV-based returns, not SIP XIRR, forecasts or guaranteed returns, and exclude investor taxes/exit loads. Dates and method appear in expandable UI details. Factsheet calculations may differ with other conventions/cutoffs.

NAV history does not change portfolio weights or verify scheme SIP terms. Model definitions remain proposals requiring research review.
