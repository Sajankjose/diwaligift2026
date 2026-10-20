# Current experience — product-first Diwali journey (20 October 2026)

This section supersedes the historical implementation notes below.

## Journey
Welcome → Equity / Mutual Funds / Help me choose → four profile questions → selected collection as hero → optional goal contribution check → optional complementary collection → final private gift.

Equity and MF entry cards have equal weight and a one-line product description. Product choice changes visibility, not suitability. The selected product remains browsable when allocation is unavailable. “Help me choose” retains engine.js discovery routing. Direct product choice bypasses routing preference, while retaining allocation eligibility: stock drafting requires >5 years and response index 2 or 3; fund drafting requires horizon index >=2 and response index >=1. These are campaign discovery gates, not formal suitability rules. Stocks no longer require opportunity intent when the user chooses Equity directly.

The user chooses constituents and amounts. No automatic model weights, approved recommendations or fabricated data are introduced. Unpriced stocks and unverified SIP schemes remain browsable but cannot be allocated. Existing quote, research expiry and scheme validation remain active.

## Budgets and complementary collection
`upfrontBudget` is shared by stocks and one-time funds. `monthlyBudget` is separate. Each fund row stores mode 0 (one-time) or 1 (monthly), so the same scheme can appear in separate plans without switching or reinterpreting amounts. Complement exploration retains all existing selections. Adding a row is explicit; opening the complementary collection does not add holdings. Legacy saved drafts migrate to the matching budget and revalidate. Profile editing asks before clearing drafts; restore and all private saves/exports validate again. Both budget groups appear in the final gift and download.

## Optional goal check
Optional target amount and exact years must be supplied together; years must match the chosen horizon. The check compares upfront budget + monthly budget × 12 × years against the target. It assumes no investment growth and excludes losses, inflation, taxes and charges. It is explicitly a contribution comparison, not a forecast. A contribution gap never increases risk or blocks an otherwise valid draft. The expandable monthly adjustment is a calculator only; it never silently alters affordability or allocations.

## Design and interaction
Geojit's referenced Figma file exposed only its Cover/Thumbnail, with Figtree and #013f3a confirmed. Full component tokens were not exposed. The implementation retains the existing supplied logo, local Figtree files and Diwali artwork, with burgundy/gold/ivory festive surfaces. No temporary Figma asset URLs are used. Native View Transitions animate page changes with a CSS entrance fallback. Buttons, disclosures and dialogs have restrained motion; prefers-reduced-motion disables it. Questions use explicit Continue, avoiding automatic focus changes while a visitor is reading.

## Verification
Run `NODE_PATH=<directory containing linkedom> node tests/validation.cjs` or install linkedom in your Node development environment and run `node tests/validation.cjs`. Tests cover product-first entry, direct and guided routes, both complement directions, budget isolation, duplicate scheme modes, shared budget limits, target validation, SIP minimums, invalid quotes/research, repricing, restore, gifts, export and generic-share privacy. Test values stay in memory and are never written to campaign data.

Visual browser QA was unavailable in the implementation environment. Mobile layout uses responsive CSS, but device-level visual acceptance remains outstanding. Daily public prices and current verified SIP metadata remain data dependencies, as described below.

---
Historical notes (read the current specification above first):

# Geojit Diwali — GitHub-ready website

## Upload to a new GitHub repository
1. Extract this ZIP on your computer.
2. Create your new repository. Use private visibility if the code should remain private.
3. Choose Add file > Upload files. Upload the extracted files AND the assets folder, retaining its contents. Do not upload only the ZIP.
4. Ensure index.html, style.css, data.js, engine.js and app.js are at the repository root, alongside assets/. Commit the upload.
5. Uploading stores source code. To host the website when ready, go to Settings > Pages > Build and deployment, select Deploy from a branch, branch main, folder /(root), then Save.

Do not assume GitHub Pages is private because the repository is private. Review hosting access before enabling Pages. This package does not publish anything automatically.

No npm install or build command is needed to run the site. All scripts, fonts and imagery use relative paths, including when hosted at username.github.io/repository-name/. The empty .nojekyll file disables Jekyll processing.

Official setup guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Verified catalogue
Exactly ten supplied stocks: ICICI Bank, Tech Mahindra, Larsen & Toubro (LT), Exide Industries, Kalyan Jewellers, Sagility, BEML, Motherson, Kotak Mahindra Bank and UltraTech Cement.

All 133 fund schemes from Top Rated Funds - October 2026.xlsx, across 24 categories. Names, ISINs, source minimums and source-row references were checked against the attachment. Equity data is dated 15 September 2026; debt data is dated 17 September 2026. No substitute scheme list is used.

Stocks are arranged in five business themes. Mutual funds have category selection and expandable details. Use “Prefer to browse? Explore general research” on the welcome screen to see both complete catalogues without personalisation. Short-term/loss-averse discovery outcomes intentionally show a learning guide; they do not automatically show equities as suitable.

## Editable files
- data.js: funds, stock universe, themes, data and campaign configuration.
- engine.js: deterministic discovery logic.
- app.js: screens and interactions.
- style.css: presentation and responsive rules.
- assets/: local logo, artwork and fonts.

## Remaining checks before public launch
Research theses, dates, approved symbols, current report links and scheme riskometers/SIP terms require verification. No transaction integration is enabled. Full suitability is not inferred from four answers. No allocations or returns are invented.

Automated routing and parsed-DOM interaction tests passed. Browser/mobile visual QA and complete Figma component parity remain unverified. Refer to QA.md. Do not distribute the campaign publicly until approved.


## Portfolio update — 20 October 2026
Results now include a user-created portfolio draft. Add chosen funds to the draft and edit each amount; monthly entries have a campaign floor of ₹1,000 per scheme. This is a campaign constraint, not a verified scheme SIP minimum. One-time entries use the workbook minimum and honour the lump-sum restriction. Amounts cannot exceed the stated budget. No unapproved equal-weight or risk-based model portfolio is generated.

Stocks can be added with whole-share quantities. In data.js, edit CAMPAIGN.stockResearch by company name to populate CMP, priceAsOf (ISO timestamp with timezone), target, researchDate and researchNote. Missing figures show “Awaiting update”. CMP must be positive and dated within the last 24 hours to calculate draft values. This is a snapshot, not a live quote feed. Stock subtotals exclude unpriced shares and execution charges. A target only displays with a research date; it is not a guarantee.

Geojit star ratings are displayed from the workbook with their source context. Missing ratings remain unavailable. The October edition uses September source data.

portfolio.js owns draft validation and rendering. gift.js generates a self-contained illustrated HTML keepsake with embedded logo and festive artwork. Private collection exports include portfolio entries and a brief summary; generic greeting shares exclude answers and amounts. Internet access is needed when initially generating the download to read local site images, but the downloaded HTML embeds those images and works offline.

Smooth entrance and spring-like button/card motion respect reduced-motion settings. Browser visual QA remains unavailable; parsed DOM tests cover the new behaviour.

## Validation update — 20 October 2026

- One-time stocks and funds share the same budget, independent of the selected tab. Monthly SIP profiles cannot allocate shares. Editing profile answers clears the allocation.
- One validator runs on add/edit, restore, device save and private export. Restore removes invalid entries and reports how many; exports include both asset types.
- SIP allocation requires `sipEligible: true`, a finite positive `sipMinimum`, `sipTermsVerified: true`, an HTTPS `sipTermsUrl` and future `sipTermsValidUntil`. The minimum is max(1000, scheme minimum). These fields are not present in the workbook: schemes remain browsable, but SIP allocation is blocked until verified terms are entered. Do not fill missing terms with assumptions.
- Stock targets and notes require approved status, HTTPS official research URL, nonfuture research date and future `validUntil`.
- This is still a user-built planning draft, not an automatic approved model allocation or transaction interface.

### Previous-session closing prices

`prices.js` loads after the campaign data. Prices are explicitly labeled previous-session close, show their source/date and use two decimal places. They are not live CMP. No prices have been invented or published from a source lacking confirmed display permission.

NSE's daily UDiFF archive was reachable and its 19 October 2026 report contained all ten campaign EQ symbols. Public download does not establish permission for public commercial display. NSE terms (https://www.nseindia.com/static/nse-terms-of-use) restrict redistribution and automated collection. No automatic scraper or scheduled NSE job is enabled. Use a permitted Geojit/exchange/vendor feed before activating public prices.

Import a permitted local UDiFF CSV using `scripts/import_closes.py --help`. It validates all ten symbols, positive finite close prices, EQ series, unique records and one past trading date before atomically updating prices.js. It does not fetch or publish anything. Commit prices.js to deploy the verified snapshot.

Set `--valid-until` to the next expected closing report's availability, using a verified exchange session calendar (including holidays and special sessions). This is explicit operator-maintained validity, not a built-in holiday calendar. An old close can remain usable across nontrading days; failed refresh must not extend expiry. Expired data blocks quantities/save until refreshed. The importer limits validity to ten calendar days from the source report. Automatic refreshing remains pending an authorized provider and its trading-session metadata.

### Regression test

With Node and `linkedom` installed, run `node tests/validation.cjs`. Tests use synthetic quotes/terms only and never write them to production data. Coverage: shared budget, missing/expired closes, weekend validity, restore repricing, hidden stale research, SIP eligibility/minimums, monthly/one-time isolation, invalid budgets, combined export and generic sharing privacy.
