/* Exact ISIN-matched AMFI Regular Growth NAVs. Calculated trailing CAGR; no forecasts. */
window.FUND_MARKET_DATA = {
  "INF204K01562": {
    "plan": "Regular Plan",
    "option": "Growth",
    "nav": 85.2708,
    "navAsOf": "2026-10-19",
    "schemeCode": "106235",
    "source": "AMFI historical NAV report",
    "sourceUrl": "https://portal.amfiindia.com/DownloadNAVHistoryReport_Po.aspx?frmdt=19-Oct-2026&todt=19-Oct-2026",
    "returns": {
      "3": {
        "cagr": 9.059052412846436,
        "startDate": "2023-10-19",
        "startNav": 65.7339,
        "endDate": "2026-10-19",
        "endNav": 85.2708,
        "days": 1096,
        "sourceUrl": "https://portal.amfiindia.com/DownloadNAVHistoryReport_Po.aspx?frmdt=16-Oct-2023&todt=19-Oct-2023"
      },
      "5": {
        "cagr": 10.274309419367711,
        "startDate": "2021-10-19",
        "startNav": 52.2947,
        "endDate": "2026-10-19",
        "endNav": 85.2708,
        "days": 1826,
        "sourceUrl": "https://portal.amfiindia.com/DownloadNAVHistoryReport_Po.aspx?frmdt=16-Oct-2021&todt=19-Oct-2021"
      },
      "7": {
        "cagr": 14.09547391995909,
        "startDate": "2019-10-18",
        "startNav": 33.863,
        "endDate": "2026-10-19",
        "endNav": 85.2708,
        "days": 2558,
        "sourceUrl": "https://portal.amfiindia.com/DownloadNAVHistoryReport_Po.aspx?frmdt=16-Oct-2019&todt=19-Oct-2019"
      }
    },
    "method": "CAGR = ((end NAV / start NAV)^(365.25 / actual elapsed days) - 1) \u00d7 100; last available NAV on or before the anniversary date. Lump-sum NAV-based returns, not SIP XIRR. Excludes investor taxes and exit loads."
  },
  "INF179K01608": {
    "plan": "Regular Plan",
    "option": "Growth",
    "nav": 1961.801,
    "navAsOf": "2026-10-19",
    "schemeCode": "101762",
    "source": "AMFI historical NAV report",
    "sourceUrl": "https://portal.amfiindia.com/DownloadNAVHistoryReport_Po.aspx?frmdt=19-Oct-2026&todt=19-Oct-2026",
    "returns": {
      "3": {
        "cagr": 13.669825218407961,
        "startDate": "2023-10-19",
        "startNav": 1335.615,
        "endDate": "2026-10-19",
        "endNav": 1961.801,
        "days": 1096,
        "sourceUrl": "https://portal.amfiindia.com/DownloadNAVHistoryReport_Po.aspx?frmdt=16-Oct-2023&todt=19-Oct-2023"
      },
      "5": {
        "cagr": 13.685638085966945,
        "startDate": "2021-10-19",
        "startNav": 1033.154,
        "endDate": "2026-10-19",
        "endNav": 1961.801,
        "days": 1826,
        "sourceUrl": "https://portal.amfiindia.com/DownloadNAVHistoryReport_Po.aspx?frmdt=16-Oct-2021&todt=19-Oct-2021"
      },
      "7": {
        "cagr": 17.220828536770828,
        "startDate": "2019-10-18",
        "startNav": 644.741,
        "endDate": "2026-10-19",
        "endNav": 1961.801,
        "days": 2558,
        "sourceUrl": "https://portal.amfiindia.com/DownloadNAVHistoryReport_Po.aspx?frmdt=16-Oct-2019&todt=19-Oct-2019"
      }
    },
    "method": "CAGR = ((end NAV / start NAV)^(365.25 / actual elapsed days) - 1) \u00d7 100; last available NAV on or before the anniversary date. Lump-sum NAV-based returns, not SIP XIRR. Excludes investor taxes and exit loads."
  },
  "INF179K01830": {
    "plan": "Regular Plan",
    "option": "Growth",
    "nav": 504.227,
    "navAsOf": "2026-10-19",
    "schemeCode": "100119",
    "source": "AMFI historical NAV report",
    "sourceUrl": "https://portal.amfiindia.com/DownloadNAVHistoryReport_Po.aspx?frmdt=19-Oct-2026&todt=19-Oct-2026",
    "returns": {
      "3": {
        "cagr": 9.376327765787163,
        "startDate": "2023-10-19",
        "startNav": 385.327,
        "endDate": "2026-10-19",
        "endNav": 504.227,
        "days": 1096,
        "sourceUrl": "https://portal.amfiindia.com/DownloadNAVHistoryReport_Po.aspx?frmdt=16-Oct-2023&todt=19-Oct-2023"
      },
      "5": {
        "cagr": 11.845004299764138,
        "startDate": "2021-10-19",
        "startNav": 288.122,
        "endDate": "2026-10-19",
        "endNav": 504.227,
        "days": 1826,
        "sourceUrl": "https://portal.amfiindia.com/DownloadNAVHistoryReport_Po.aspx?frmdt=16-Oct-2021&todt=19-Oct-2021"
      },
      "7": {
        "cagr": 14.628029969272616,
        "startDate": "2019-10-18",
        "startNav": 193.815,
        "endDate": "2026-10-19",
        "endNav": 504.227,
        "days": 2558,
        "sourceUrl": "https://portal.amfiindia.com/DownloadNAVHistoryReport_Po.aspx?frmdt=16-Oct-2019&todt=19-Oct-2019"
      }
    },
    "method": "CAGR = ((end NAV / start NAV)^(365.25 / actual elapsed days) - 1) \u00d7 100; last available NAV on or before the anniversary date. Lump-sum NAV-based returns, not SIP XIRR. Excludes investor taxes and exit loads."
  }
};
for(const f of window.CAMPAIGN.funds){const m=window.FUND_MARKET_DATA[f.isin];if(m){f.marketData=m;f.plan=m.plan;f.option=m.option;}}
