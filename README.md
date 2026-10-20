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
