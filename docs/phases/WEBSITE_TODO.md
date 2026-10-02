# Marchander AI — Website Build TODO

This is the working roadmap for turning the current frontend demo into a production-ready Marchander AI platform. Work through it in order; only mark an item complete after it is implemented and verified.

## Current milestone

**North-star flow:** browse a product → make a voice or text offer → Marchander AI negotiates → accept a deal → negotiated price enters the cart.

| Area | Current state |
| --- | --- |
| Brand and home experience | Foundation in place |
| Marketplace, product, negotiation, cart, checkout UI | Frontend prototype in place |
| Real API, database, AI, voice and payments | Not started |

## Phase 0 — Foundation

- [x] Project name: Marchander AI
- [ ] Finalize logo and favicon
- [ ] Formalize typography, color, spacing, button, card, and animation tokens
- [ ] Extract reusable UI components from page prototypes
- [ ] Define responsive breakpoints and accessibility focus states
- [ ] Add client routing and route guards
- [ ] Add global state management
- [ ] Add typed API/service layer
- [ ] Create `.env.example`
- [ ] Add linting, formatting, test runner, and CI build check

## Phase 1 — Home

- [x] Hero, branding, primary CTA, and crowd animation
- [ ] Wire all navigation and CTA routes to real routes
- [ ] Finish mobile navigation menu
- [ ] Optimize hero assets and loading performance

## Phase 2 — Marketplace

- [ ] Real product search and suggestions
- [ ] Voice search with permission and failure states
- [ ] Category navigation, filters (price/rating/negotiable), and sort controls
- [ ] Product pagination or infinite scrolling
- [ ] Loading, empty, and API-error states
- [ ] Complete product card: image, rating, review count, original/current price, discount, wishlist, quick view, and negotiate CTA

## Phase 3 — Product details

- [ ] Product gallery with thumbnails, switching, and accessible zoom
- [ ] Product facts: specifications, seller, reviews, discount, inventory, and delivery
- [ ] Wishlist and add-to-cart interactions
- [ ] Prominent text and voice negotiation CTAs

## Phase 4 — AI negotiator UI

- [ ] Product preview, listed price, current user offer, AI offer, and visible history
- [ ] Text offer entry with validation
- [ ] Large microphone interaction with waveform
- [ ] States: idle, listening, processing, thinking, speaking, permission denied, transcription failure, and network failure
- [ ] Actions: offer, counter, accept, reject, end, and restart negotiation
- [ ] Visible price range without exposing the seller minimum price

## Phase 5 — Negotiation engine

- [ ] Implement server-side product/session lookup
- [ ] Implement listed price, hidden minimum price, customer offer, history, counter-offer, concession, timeout, and round limit
- [ ] Implement accept, counter, reject, and walk-away outcomes
- [ ] Validate prices server-side: valid product, numeric/positive price, no manipulation, no below-floor acceptance
- [ ] Add unit and edge-case tests; never return `P_min` to the client

## Phase 6 — Voice AI

- [ ] Microphone permission and recording lifecycle
- [ ] Speech-to-text for English, Hindi, and code-switching
- [ ] Text-to-speech response, stop/replay, voice/language selection, and speaking animation
- [ ] Voice fallback and clear recovery states

## Phase 7 — Deal confirmation and cart

- [ ] Persist confirmed deal ID, original price, final price, savings, and discount percentage
- [ ] Add confirmed deal to cart only after explicit acceptance
- [ ] Cart quantities, removal, price breakdown, delivery, taxes, empty/loading/error states

## Phase 8 — Checkout and orders

- [ ] Address form and validation: name, phone, address, city, state, PIN
- [ ] Payment UI: UPI, card, net banking, wallet, status, failure, retry
- [ ] Create orders, order IDs, order history, details, tracking, cancellation, and refund statuses
- [ ] Optional later: Celo/wallet/escrow; it is not an MVP dependency

## Phase 9 — Customer experience

- [ ] Authentication: sign-up, sign-in/out, password reset, verification, Google login, sessions, protected routes
- [ ] User dashboard: orders, negotiations, wishlist, saved items, active deals, savings analytics
- [ ] Negotiation history with a viewable conversation
- [ ] Dedicated wishlist and global search experience
- [ ] In-app and email notifications

## Phase 10 — Merchant experience

- [ ] Merchant dashboard: revenue, orders, negotiations, deals, conversion, discounts
- [ ] Product management: CRUD, images, stock, listed price, hidden minimum price, negotiation toggle
- [ ] Merchant negotiation settings: strategy, rounds, minimum price, maximum discount, auto-accept, personality, language
- [ ] Merchant analytics: volume, outcomes, discount, revenue, offer distribution, rounds, peak times

## Phase 11 — Content and trust pages

- [ ] Complete Deals page: trending, recently negotiated, recommendations, filters/sort; show timers only for real expirations
- [ ] Complete How It Works: product → offer → AI → counter → deal → cart → order
- [ ] Complete About: story, problem, mission, vision, technology, team, contact
- [ ] AI transparency: seller constraints, visible offers, final-price confirmation, right to reject

## Phase 12 — Backend and data

- [ ] FastAPI app with REST API, WebSocket events, typed contracts, CORS, auth, rate limits, and error handling
- [ ] APIs: users, products, negotiations, carts, orders, payments, merchants, analytics
- [ ] PostgreSQL schema: users, sellers, products, categories, images, negotiations, messages, offers, carts, orders, payments, wishlists, reviews, notifications
- [ ] Redis: sessions, negotiation state, temporary offers, caching, rate limits, real-time state
- [ ] AI services: STT, intent, offer extraction, negotiation, response generation, TTS, safe rule fallback

## Phase 13 — Quality, security, and release

- [ ] Security: authorization, JWT/session policy, input validation, CORS, secrets, abuse controls
- [ ] Performance: image optimization, lazy loading, code splitting, caching, DB indexing, voice latency
- [ ] Accessibility: keyboard, screen reader labels, contrast, focus, accessible forms, text alternative to voice
- [ ] Testing: component/page/API/DB/AI/E2E tests and price-floor tests
- [ ] Edge cases: invalid offers, unclear speech, microphone/network failure, product unavailable, deal expiry, payment/session failure
- [ ] Deploy frontend, backend, PostgreSQL, Redis, HTTPS, CI/CD, monitoring, error tracking, and uptime checks

## Deferred work

- [ ] Web3: Celo, cUSD, wallet connection, deal locking, escrow, transaction history
- [ ] Advanced AI: adaptive strategies, inventory/demand awareness, preference modeling, seller agents

## Definition of done for the MVP

- [ ] A user can browse and search real products.
- [ ] A user can make a text or voice offer.
- [ ] The server safely evaluates the offer and produces a counter/accept/reject response.
- [ ] The seller minimum is never exposed or violated.
- [ ] Accepted prices enter the cart, survive checkout, and create an order.
- [ ] Buyer and merchant views are authenticated, responsive, accessible, tested, and deployed.
