# Automatic allocation engine — proposed model specification

**Status: proposal-1. These combinations and weights were created for product/research review. They are not Geojit-approved recommendations.** The supplied campaign workbook determines the fund universe and published ratings; it does not endorse these model combinations. Theme roles are editorial, not company investment theses. No live or dummy price was added.

## Model selection matrix

The client's product choice decides the hero. Help me choose uses the existing discovery route. Models are selected by horizon and response to a fall; goal shortfall never changes risk exposure.

| Product and profile | Model | Constituents / target weights | Budget floor |
| --- | --- | --- | --- |
| MF: 3–5 years, or >5 years with wait/understand response | Measured Beginning | HDFC Balanced Advantage Fund(G), 100% | ₹1,000 |
| MF: >5 years, review original reasons, below ₹2,500 | Long Journey Compact | Nippon India Large Cap Fund(G), 100% | ₹1,000 |
| MF: >5 years, review original reasons, ₹2,500+ | Long Journey | Nippon India Large Cap Fund(G), 60%; HDFC Flexi Cap Fund(G), 40% | ₹2,500 |
| MF: >5 years, consider adding after understanding risks, below ₹2,500 | Long Horizon Compact | HDFC Flexi Cap Fund(G), 100% | ₹1,000 |
| MF: >5 years, consider adding after understanding risks, ₹2,500+ | Long Horizon | HDFC Flexi Cap Fund(G), 60%; Nippon India Large Cap Fund(G), 40% | ₹2,500 |
| Equity: >5 years, review original reasons | Five-Business | ICICI Bank, Larsen & Toubro, Tech Mahindra, Exide Industries, Motherson: 20% each | ₹10,000 and calculated whole-share minimum |
| Equity: >5 years, consider adding after understanding risks | Ten-Business | All ten supplied stocks: 10% each | ₹10,000 and calculated whole-share minimum |

Short horizons (<3 years), protect-money responses and incomplete profiles do not generate an investment model. Stock models require >5 years and response index 2 or 3. Exploration without an amount remains a research journey. These are prototype discovery gates, not a full risk-capacity/suitability assessment. Investment purpose is recorded and explained, but does not independently change weights; amount changes the compact/full MF model, not the client's risk band.

The compact variant is explicitly defined, not an opportunistic deletion of schemes. If actual scheme minimums make a model unaffordable, return a budget requirement rather than silently substitute/drop a holding. A category label such as balanced advantage is not a capital-protection claim. Holdings overlap has not been computed and requires review.

## Arithmetic and constraints

- MF: calculate weighted rupee amounts in ₹100 increments. Round down, then allocate remaining ₹100 blocks to the greatest target shortfall, deterministic source-model order for ties. Keep any remainder below ₹100 as unassigned. Check every minimum before distributing remaining blocks. One-time terms also require `lumpsumTermsVerified`, HTTPS `lumpsumTermsUrl` and future `lumpsumTermsValidUntil` for data-ready status; workbook minimums alone support only indicative amounts. Explicitly ineligible schemes stop model generation. SIP minimum = higher of ₹1,000 campaign floor and known scheme minimum. If SIP terms are missing, show indicative amounts and mark them unverified; do not claim a verified order-ready allocation.
- Equity: show target amount = budget × target weight. When every constituent has a verified, unexpired close, quantity = floor(target amount / close); value = quantity × close to two decimal places. Keep cash remainder. Do not distribute leftover cash into overweight holdings, add fractional shares or silently drop a stock.
- Whole-share minimum = maximum of policy floor and ceiling(close / target weight) across constituents. If any target amount cannot purchase one share, report below_minimum with the required budget.
- After rounding, check actual invested position and sector shares (cash excluded from denominator). Five-stock position cap 25%; sector caps finance 30%, construction 35%, technology 25%, mobility 40%. Ten-stock position cap 15%; sector caps finance 25%, construction 35%, technology 25%, mobility 25%, jewellery 15%. These limits are proposals for research review. When rounding breaches a cap, reduce whole shares in the violating position/sector, retaining at least one share of each constituent and moving the difference to cash. If caps still cannot be met, return rounding_review. No minimum needed to resolve a concentration breach is promised.
- Input budgets must be positive whole rupees up to ₹10,00,00,000. Every row stays within the portfolio budget; every selected model's reserved budget plus manual allocations stays within the corresponding household input budget.
- Monthly and upfront ledgers are independent. A complementary model using the same upfront money requires an explicit rupee split. Both main and complementary models recalculate after that confirmation. Separate monthly money never consumes or duplicates the upfront ledger.

## Status, saving and data updates

Model definitions live in models.js, independently of UI. `approvalStatus`, `approvedBy`, HTTPS `approvalUrl` and future `validUntil` establish model approval metadata. Only actual research approval should populate them. No approval fields are inferred from a fund rating or membership in the stock list.

`proposed`: review model; `pending_data`: approved model with incomplete current data; `ready`: model approval and the configured data checks pass; `below_minimum`: model not affordable; `rounding_review`: rounded concentration breach; `unavailable`: invalid/ineligible profile or model. Even ready is a planning model, not an executable order or a full suitability assessment. Taxes/charges are excluded. No transaction integration is present.

All current deployed definitions are **proposed**. Current SIP metadata remains pending. User-supplied 19 October 2026 closes now calculate historical-reference whole-share quantities, with source/date labels. These do not expire into missing quantities, but are never treated as current verified prices. A future approved model using these prices has reference_pricing status. NAV and trailing returns for the three model funds are ISIN-matched Regular Growth data; see MARKET_DATA.md.

Gift summaries/downloads retain proposed/unverified labels. Saves persist product, mode and reserved budget, not calculated model rows. Restore/export regenerates outputs against current data and definitions; duplicates, unknown products, invalid modes and excess reservations are rejected. Manual portfolios from earlier versions remain supported, with separate validation. Model versions and IDs appear on the result for auditability.

## Review checklist for research owners

Confirm or replace each named scheme/stock, category role, target weight, profile gate, budget floor, compact variant, position/sector cap and rounding method. Verify fund plan/option, eligibility, minimums, payment increments/instalment requirements and overlap. Confirm data-display permissions and supply a current price snapshot. Record actual approval metadata with a review/expiry date. Do not mark proposed definitions approved simply to remove the UI label.

General risk references used for wording (not sources endorsing these model choices):
- https://www.amfiindia.com/investor/knowledge-center-info?zoneName=riskInMutualFunds
- https://www.amfiindia.com/investor/become-mf-distributor?zoneName=sip

## Verification

`tests/validation.cjs` exercises 1,792 allocation combinations plus model-first UI, compact/full switching, explicit shared-budget splits, missing/stale prices, current scheme minimums, approval gates, recalculation, persistence and private/generic exports. Browser/device visual QA remains unavailable in this environment. Test fixtures are not production market data.
