# Marchander AI — Product Requirements Document

## 1. Product
Marchander AI is a voice-first AI negotiation layer for e-commerce. A buyer can make a natural-language offer, receive AI-generated counter-offers, negotiate over multiple turns, and add the agreed price to the cart.

## 2. Problem
Most e-commerce experiences are fixed-price. Marchander AI addresses the gap between traditional bargaining and digital commerce by introducing conversational negotiation while preserving seller price controls.

## 3. Target Audience
### Primary
- Price-sensitive online shoppers
- Voice-first shoppers
- Hindi/English and regional-language users
- Users who are comfortable with bargaining

### Secondary
- D2C brands
- Small and local merchants
- Marketplace sellers
- E-commerce platforms

## 4. MVP Goals
1. User can browse/select a product.
2. User can start a negotiation.
3. User can submit an offer by voice or text.
4. System extracts the offer and negotiation intent.
5. Negotiation engine evaluates the offer against seller constraints.
6. System generates a counter-offer or accepts/rejects.
7. User can continue multiple rounds.
8. Accepted deal updates the cart.
9. Negotiation history is retained for the session.

## 5. Core Features
- Product catalog
- Voice input
- Speech-to-text
- Intent classification
- Offer extraction
- Negotiation engine
- Multi-turn negotiation
- Seller minimum price (`P_min`)
- Text-to-speech response
- Negotiation history
- Cart price update
- Basic merchant configuration

## 6. Optional Features
- Multilingual expansion
- Merchant analytics
- Dynamic pricing
- Web3/Celo payment
- Smart-contract escrow
- Autonomous seller agents

## 7. Non-Goals for MVP
- Real marketplace payments
- Production-scale merchant onboarding
- Fully autonomous reinforcement-learning negotiation
- Complex Web3 infrastructure
- Real-world pricing optimization based on personal data

## 8. Core User Flow
`Browse → Select Product → Negotiate → Make Offer → AI Counter/Accept/Reject → Repeat → Deal Confirmed → Cart Updated → Checkout`

## 9. Success Criteria
- Negotiation can complete end-to-end in a demo.
- Seller minimum price is never violated by the negotiation engine.
- Accepted negotiated price is correctly reflected in the cart.
- Conversation state survives multiple turns.
- Voice path and text fallback both work.
- Errors have clear user-facing recovery states.
