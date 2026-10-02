# Marchander AI — Project Memory

This file is the persistent project context for future development sessions.

## Identity
- Project name: Marchander AI
- Previous name: BargainBot
- Category: AI + E-commerce + Voice AI
- Core concept: Voice-first AI price negotiation

## Core Product
Marchander AI allows an online shopper to make a natural-language offer, negotiate through multiple turns with an AI agent, and receive the final agreed price in the cart.

## Core Rule
`Final Price >= Seller Minimum Acceptable Price (P_min)`

## Primary Flow
`User → STT → Intent/Offer Extraction → Negotiation Engine → Counter/Accept/Reject → TTS → User → Cart`

## MVP Priorities
1. Negotiation engine
2. Text negotiation
3. Product + cart flow
4. Session state
5. Voice input/output
6. Merchant price floor

## Deferred
- Web3 payment
- Smart-contract escrow
- Reinforcement learning
- Large-scale merchant onboarding
- Advanced dynamic pricing

## Product Positioning
Existing shopping tools generally search, compare, recommend, or apply discounts. Marchander AI focuses on active conversational price negotiation.

## Important Naming
Always use **Marchander AI** in new product-facing content. Do not use BargainBot except when explaining project history or migration.

## Technical Direction
- Frontend: React + TypeScript + Tailwind
- Backend: Python + FastAPI
- Real-time: WebSocket where required
- Database: PostgreSQL
- Cache/session: Redis
- STT: Whisper-compatible service
- Intent: rules first, ML where useful
- TTS: provider abstraction
- Optional Web3: Celo

## Decision Log
### 2026-10-02
Initial project documentation structure established:
- PRD
- Architecture
- Rules
- Phases/TODO
- Design
- Memory

## Working Principle
Build the smallest complete negotiation loop first. Add advanced AI, merchant analytics, multilingual expansion, and Web3 only after the core flow is stable.
