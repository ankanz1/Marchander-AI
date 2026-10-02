# Marchander AI — Rules

## 1. Product Rules
- The seller defines `P_min`.
- The system must never accept a price below `P_min`.
- Every negotiation belongs to a product and session.
- A confirmed deal must have an explicit final price.
- Cart price updates happen only after deal confirmation.

## 2. AI Rules
- Never invent product prices, discounts, inventory, or seller policies.
- Negotiation decisions must be traceable to explicit inputs and rules.
- Use deterministic validation after model output.
- Keep a rule-based fallback for critical negotiation decisions.
- AI-generated text must not override financial constraints.

## 3. Voice Rules
- Provide text fallback when microphone/STT fails.
- Clearly show when the system is listening or processing.
- Do not silently record or retain audio beyond the defined product behavior.
- Handle Hindi/English code-switching gracefully where supported.

## 4. Security Rules
- Never expose API keys or wallet private keys.
- Validate all client-provided prices server-side.
- Do not trust frontend cart prices.
- Authorize every cart/deal update.
- Keep Web3/payment functionality isolated from the core MVP.

## 5. Engineering Rules
- Business logic belongs in backend services, not UI components.
- Use typed API contracts.
- Keep services modular.
- Add tests for negotiation edge cases before changing negotiation logic.
- Document breaking architecture decisions.

## 6. UX Rules
- Negotiation status must always be visible.
- Show listed price, current offer, and accepted price clearly.
- Never make a counter-offer look like a confirmed deal.
- Provide a clear exit/walk-away action.

## 7. Avoid
- Hard-coded seller secrets.
- Client-side-only price validation.
- Unbounded negotiation loops.
- Silent price changes.
- Fake claims about AI accuracy or business impact.
- Adding Web3 complexity before the core negotiation flow works.
