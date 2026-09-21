# Marchander AI

```
> **Voice-first AI negotiation for the next generation of e-commerce.**
```

Marchander AI brings the traditional Indian bargaining experience into digital commerce. Instead of accepting fixed prices, users can **speak naturally, make offers, negotiate with an AI agent, and receive a negotiated price directly in their cart.**

---

## Problem Statement

### Bridging the Bargaining Gap

Traditional Indian shopping has a strong culture of bargaining in markets, bazaars, and local stores. However, most e-commerce platforms use fixed pricing and provide limited opportunities for real-time negotiation.

This creates a gap between:

**Traditional Shopping**

`Browse → Bargain → Counter → Agree → Buy`

and

**Modern E-commerce**

`Browse → Fixed Price → Buy`

### The Problem

* Customers cannot naturally negotiate online.
* Existing discount systems are mostly static.
* Text-based negotiation interfaces can feel unnatural.
* Regional-language and voice-first shopping remain underutilized.
* Sellers need a way to negotiate without going below their minimum acceptable price.

### Our Solution

**Marchander AI transforms fixed-price e-commerce into a conversational marketplace where buyers can negotiate prices naturally using voice and AI.**

---

# What is Marchander AI?

Marchander AI is a **voice-enabled AI negotiation agent for e-commerce**.

A customer can simply say:

```
> "Can you give me this jacket for ₹900?"
```

Marchander AI understands the request, evaluates the offer, generates a counter-offer, and responds naturally:

```
> "I can give it for ₹1,050. That's my best offer."
```

The conversation can continue until the customer and AI reach an acceptable price.

Once the deal is accepted, the negotiated price is added to the cart.

---

# Key Features

### Voice-Based Negotiation

Users can negotiate prices naturally using their voice instead of typing offers manually.

### Multilingual Interaction

The architecture is designed for Hindi, English, and other Indian regional languages.

### AI Intent Detection

The system identifies negotiation actions such as:

* Initial offer
* Counter-offer
* Accept
* Reject
* Walk-away

### Intelligent Negotiation Engine

The AI uses seller-defined pricing constraints and negotiation logic to generate appropriate counter-offers.

### Multi-Turn Negotiation

The user can negotiate through multiple rounds instead of receiving a single static discount.

### Seller Price Protection

Sellers define a minimum acceptable price:

`P_min = Minimum Acceptable Price`

The negotiation engine should not accept an offer below this threshold.

### Automatic Cart Update

After a successful negotiation, the agreed price can be added directly to the shopping cart.

### Optional Web3 Payments

The system can optionally integrate Celo-based payments and smart-contract escrow after the negotiation is completed.

---

# How It Works

```text
User Voice
    ↓
Speech-to-Text
    ↓
Intent Classification
    ↓
AI Negotiation Engine
    ↓
Counter-Offer / Accept / Reject
    ↓
Text-to-Speech
    ↓
Voice Response
    ↓
Negotiation Loop
    ↓
Deal Accepted
    ↓
Update Cart
    ↓
Order / Payment
```

---

# Example

### Customer

```
> "Will you give this ₹1,200 jacket for ₹900?"
```

### Marchander AI

```
> "I can give it for ₹1,050. That's my best offer."
```

### Customer

```
> "₹950?"
```

### Marchander AI

```
> "Okay, deal confirmed at ₹950!"
```

### Result

```text
Original Price:     ₹1,200
Customer Offer:       ₹900
AI Counter:          ₹1,050
Final Price:           ₹950
Cart:              Updated
```

---

# System Architecture

```text
┌──────────────┐
│     USER     │
│ Voice Input  │
└──────┬───────┘
       ↓
┌────────────────────┐
│  SPEECH-TO-TEXT    │
│      Whisper       │
└─────────┬──────────┘
          ↓
┌────────────────────┐
│ INTENT CLASSIFIER  │
│ DistilBERT / Rules │
└─────────┬──────────┘
          ↓
┌─────────────────────────┐
│  AI NEGOTIATION ENGINE  │
│                         │
│ Listed Price            │
│ Minimum Price            │
│ Previous Offers          │
│ Negotiation Strategy     │
└───────────┬─────────────┘
            ↓
      ┌─────────────┐
      │   DECISION  │
      └──────┬──────┘
             ↓
    ┌──────────────────┐
    │ Counter / Accept │
    │ / Reject         │
    └────────┬─────────┘
             ↓
┌────────────────────┐
│  TEXT-TO-SPEECH    │
│ ElevenLabs / Google│
└─────────┬──────────┘
          ↓
┌────────────────────┐
│  VOICE RESPONSE    │
│      TO USER       │
└─────────┬──────────┘
          ↓
    Negotiation Loop
          ↓
┌────────────────────┐
│   UPDATE CART      │
│ Negotiated Price   │
└─────────┬──────────┘
          ↓
┌────────────────────┐
│   ORDER / PAYMENT  │
└────────────────────┘
```

---

# Negotiation Engine

The negotiation engine uses seller-defined constraints.

### Core Variables

```text
P_listed = Original listed price

P_min = Minimum acceptable price

P_offer = Customer's current offer
```

### Basic Logic

If:

```text
P_offer >= P_min
```

The system can accept the offer.

Otherwise, the engine calculates a counter-offer:

```text
P_counter =
max(
    P_min,
    P_offer + α × (P_listed - P_offer)
)
```

where:

```text
α ∈ [0.3, 0.6]
```

The system can also apply controlled concessions over multiple negotiation rounds.

### Example

```text
Listed Price = ₹1,200
Minimum Price = ₹950
Customer Offer = ₹900

AI Counter = ₹1,050
        ↓
Customer Counter = ₹950
        ↓
Accepted
        ↓
Final Price = ₹950
```

The seller therefore retains control over the minimum acceptable price.

---

# Technology Stack

## Frontend

* React.js
* TypeScript
* Tailwind CSS
* Web Speech API
* Responsive UI
* Voice Interface
* Product UI
* Real-time negotiation interface
* Cart management

## Backend

* Python
* FastAPI
* REST API
* WebSocket
* Session Management
* Business Logic

## AI / ML

### Speech-to-Text

* OpenAI Whisper
* Google Speech-to-Text
* Whisper.cpp as an offline alternative

### Intent Classification

* DistilBERT
* Hugging Face
* Rule-based NLP for MVP

### Negotiation

* Python
* Game-theoretic negotiation logic
* Seller price constraints
* Dynamic counter-offers
* Optional reinforcement learning

### Text-to-Speech

* ElevenLabs
* Google Text-to-Speech

## Database

* PostgreSQL

Used for:

* Users
* Products
* Negotiation history
* Orders
* Pricing information

## Cache / Session Store

* Redis

Used for:

* User sessions
* Negotiation state
* Temporary data
* Fast price/state lookups

## Web3 — Optional

* Celo
* cUSD
* Solidity
* Hardhat
* Wagmi
* RainbowKit
* Smart-contract escrow

## Deployment

* Docker
* Railway / Render
* GitHub Actions
* GitHub

---

# Technical Methodology

## Phase 1 — Core AI Pipeline

1. Create FastAPI backend.
2. Build the negotiation endpoint.
3. Integrate Speech-to-Text.
4. Convert voice input into text.
5. Classify negotiation intent.
6. Extract the customer's offer.
7. Pass the offer to the negotiation engine.
8. Generate a counter-offer.
9. Convert the response into speech.
10. Return the response to the user.

---

## Phase 2 — Frontend

Build a React-based interface containing:

* Product cards
* Product price
* Negotiate button
* Microphone input
* Voice response
* Negotiation history
* Cart
* Final negotiated price

---

## Phase 3 — Negotiation Loop

```text
User Offer
    ↓
Analyze Intent
    ↓
Evaluate Offer
    ↓
Accept?
 ┌──┴──┐
YES    NO
 ↓      ↓
Deal   Counter
 ↓      ↓
Cart ← User Response
          ↓
       New Round
```

---

## Phase 4 — Optional Web3 Layer

After a successful negotiation:

```text
Negotiated Price
       ↓
Smart Contract
       ↓
Buyer Payment
       ↓
Escrow
       ↓
Delivery Confirmation
       ↓
Seller Payment
```

Celo and stablecoin-based payment can be used as an optional extension.

---

# Data Flow

```text
VOICE INPUT
     ↓
Audio Processing
     ↓
Speech-to-Text
     ↓
Text
     ↓
Intent + Offer Extraction
     ↓
Negotiation Engine
     ↓
Price Decision
     ↓
Response Generation
     ↓
Text-to-Speech
     ↓
VOICE RESPONSE
     ↓
User Decision
     ↓
 ┌───────────────┐
 │               │
Accept         Counter
 │               │
 ↓               └────→ Negotiation Engine
Cart
 ↓
Order
```

---

# Major Use Cases

### E-commerce

Negotiate prices for:

* Fashion
* Electronics
* Home products
* Lifestyle products
* D2C products

### Future Expansion

The negotiation engine can potentially be extended to:

* B2B marketplaces
* Rentals
* Travel
* Services
* Tickets
* Local marketplaces
* Wholesale platforms

---

# Target Users

### Buyers

* Price-sensitive shoppers
* Voice-first users
* Regional-language users
* Tier 2 and Tier 3 users
* Users who enjoy bargaining

### Sellers

* Small businesses
* D2C brands
* Local merchants
* Marketplace sellers

### Platforms

* E-commerce platforms
* Marketplaces
* Social commerce platforms

---

# Business Model

Marchander AI can use a combination of:

### Transaction Commission

Charge a percentage of successful negotiated transactions.

Example:

```text
2–5% commission
```

### Merchant SaaS

Offer negotiation tools and analytics to sellers.

Example pricing model:

```text
₹999 – ₹4,999 / month
```

### Enterprise Integration

Provide APIs and negotiation infrastructure to larger e-commerce platforms.

---

# Business Impact

Potential project targets include:

* **10–20%** reduction in manual negotiation effort
* **5–15%** potential increase in conversion opportunities
* **20–30%** faster offer processing
* **24/7** automated negotiation availability

```
> These figures are project targets/illustrative assumptions and should be validated through real-world pilots.
```

---

# Market Opportunity

Marchander AI targets the intersection of:

```text
E-commerce
     +
Conversational AI
     +
Voice Commerce
     +
Dynamic Pricing
     +
AI Agents
```

### Market Strategy

**TAM:** Indian e-commerce market

**SAM:** Online retail categories where negotiation can provide meaningful value

**Initial SOM:** Focus on a small percentage of the addressable e-commerce transaction volume through merchant integrations.

The project should validate the exact market figures and assumptions before using them as investment or commercial forecasts.

---

# Competitive Landscape

Marchander AI operates alongside several categories of existing solutions.

| Category               | Typical Capability     | Marchander AI           |
| ---------------------- | ---------------------- | ----------------------- |
| E-commerce Platforms   | Fixed pricing          | Voice negotiation       |
| Price Comparison       | Find cheaper products  | Actively negotiate      |
| Coupon Platforms       | Find/apply discounts   | Generate counter-offers |
| AI Shopping Assistants | Discover and recommend | Negotiate prices        |
| Traditional Chatbots   | Answer questions       | Multi-turn bargaining   |

### Core Differentiator

Traditional shopping assistants:

```text
Search → Compare → Discount → Buy
```

Marchander AI:

```text
Search → Make Offer → Negotiate → Agree → Buy
```

The core product positioning is therefore **AI-powered conversational price negotiation**, rather than simply price comparison or discount discovery.

---

# Innovation

Marchander AI combines:

* Voice AI
* Multilingual NLP
* Intent classification
* Game-theoretic negotiation
* Dynamic counter-offers
* Seller-controlled pricing
* E-commerce cart integration
* Optional Web3 payments

### Key Innovation

```
> **Turning bargaining from a human-only shopping behavior into an AI-powered digital interaction.**
```

---

# Feasibility

## Technical Feasibility

The system can be built using existing technologies:

* Whisper for STT
* DistilBERT / rules for intent classification
* Python for negotiation logic
* FastAPI for backend APIs
* PostgreSQL for persistent data
* Redis for session state
* ElevenLabs / Google TTS for voice output
* React for frontend

## Economic Feasibility

Potential revenue streams include:

* Transaction commission
* Merchant subscriptions
* Enterprise APIs
* Premium negotiation analytics

---

# Challenges & Mitigation

| Challenge             | Mitigation                                     |
| --------------------- | ---------------------------------------------- |
| Voice latency         | Streaming STT/TTS and optimized inference      |
| Ambiguous user intent | Hybrid rules + ML classification               |
| Seller onboarding     | Simple merchant dashboard                      |
| Regional languages    | Start with Hindi + English and expand          |
| Negotiation abuse     | Seller-defined minimum price                   |
| Web3 complexity       | Keep Web3 optional                             |
| Model errors          | Fallback rules and validation                  |
| Scaling               | Redis, WebSockets and containerized deployment |

---

# Future Scope

### Multilingual Expansion

Support **10+ Indian languages** over time.

### Advanced AI Negotiation

Use reinforcement learning and adaptive strategies to improve negotiation behavior.

### Autonomous Seller Agents

Allow merchants to deploy AI agents that negotiate automatically within predefined rules.

### Dynamic Pricing

Integrate:

* Demand
* Inventory
* Time
* Customer behavior
* Market conditions

### Multimodal Negotiation

Extend beyond voice to:

* Text
* Images
* Product photos
* Video

### Web3

Expand into:

* Smart contracts
* Escrow
* Decentralized payments
* Cross-border commerce

### Platform Expansion

Integrate with:

* E-commerce APIs
* Shopify-like platforms
* Marketplaces
* B2B platforms

---

# Demo Script

### Step 1

User selects a product.

### Step 2

User presses **Negotiate**.

### Step 3

User says:

```
> "यह ₹1,200 का जैकेट ₹900 में दोगे?"
```

### Step 4

Marchander AI responds:

```
> "मैं ₹1,050 में दे सकता हूँ — यह मेरा बेस्ट ऑफर है।"
```

### Step 5

User says:

```
> "₹950?"
```

### Step 6

AI responds:

```
> "ठीक है, ₹950 में डील पक्की! कार्ट में जोड़ रहा हूँ।"
```

### Step 7

The negotiated price is added to the cart.

### Optional Web3 Demo

```text
Deal Confirmed
      ↓
Pay with UPI / Celo
      ↓
Transaction Complete
```

---

# Project Flow

```text
                 MARCHANDER AI

                       USER
                        │
                        ▼
                 Voice / Text Input
                        │
                        ▼
                 Speech-to-Text
                        │
                        ▼
               Intent Classification
                        │
                        ▼
              Negotiation Engine
                        │
              ┌─────────┴─────────┐
              │                   │
           Accept              Counter
              │                   │
              ▼                   ▼
          Deal Done          New Offer
              │                   │
              ▼                   └──────┐
        Update Cart                       │
              │                           │
              ▼                           │
           Payment ◄─────────────────────┘
```

---

# Project Structure

A recommended project structure:

```text
marchander-ai/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── backend/
│   ├── api/
│   ├── models/
│   ├── services/
│   ├── negotiation/
│   ├── stt/
│   ├── tts/
│   └── main.py
│
├── ai/
│   ├── intent_classifier/
│   ├── negotiation_engine/
│   └── models/
│
├── contracts/
│   └── BargainEscrow.sol
│
├── docs/
│   ├── architecture/
│   └── research/
│
├── tests/
│
├── docker/
│
├── .env.example
├── docker-compose.yml
├── README.md
└── LICENSE
```

---

# Getting Started

## Prerequisites

Install:

* Node.js
* Python 3.10+
* PostgreSQL
* Redis
* Git
* Docker (recommended)

Optional:

* Celo wallet
* Hardhat
* Web3 development tools

## Clone the Repository

```bash
git clone https://github.com/your-username/marchander-ai.git

cd marchander-ai
```

## Backend

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# Linux/macOS
source venv/bin/activate

pip install -r requirements.txt
```

Create your environment file:

```bash
cp .env.example .env
```

Configure required API keys and database credentials.

Run the backend:

```bash
uvicorn main:app --reload
```

## Frontend

```bash
cd frontend

npm install

npm run dev
```

The frontend can then connect to the FastAPI backend.

---

# Environment Variables

Example:

```env
DATABASE_URL=
REDIS_URL=

OPENAI_API_KEY=

ELEVENLABS_API_KEY=

GOOGLE_TTS_API_KEY=

CELO_RPC_URL=
WALLET_PRIVATE_KEY=
```

```
> Never commit API keys, private keys, or secrets to GitHub.
```

---

# API Concept

### Negotiation

```http
POST /negotiate
```

Example request:

```json
{
  "product_id": "JACKET-001",
  "offer": 900,
  "currency": "INR",
  "session_id": "session-123"
}
```

Example response:

```json
{
  "status": "counter_offer",
  "counter_offer": 1050,
  "currency": "INR",
  "message": "I can give it for ₹1050."
}
```

---

# Security Considerations

Marchander AI should protect:

* User information
* Seller pricing constraints
* Negotiation history
* Payment information
* API credentials
* Wallet/private-key information

For Web3 functionality:

* Never expose private keys.
* Validate smart-contract inputs.
* Keep payment functionality optional during the MVP.
* Use audited contract patterns before production deployment.

---

# Research & References

The original project research references include:

1. **BargainBot: AI-Driven Price Negotiation Chatbot for E-Commerce** — IJISRT, 2026
2. **Artificial Intelligence Based Price Negotiating E-commerce Chatbot** — IRJET, 2023
3. **AI Negotiation Chatbot Architecture** — IJIRT
4. **Game-Theoretic Negotiation / Pricebots and Shopbots** — IJCAI
5. **Voice AI Architecture and Implementation Resources**
6. **Whisper / Speech-to-Text research and implementation resources**
7. **ElevenLabs Text-to-Speech resources**
8. **India e-commerce and e-retail market research**

---

# Roadmap

```text
[MVP]
Voice Input
    ↓
STT
    ↓
Intent Detection
    ↓
Negotiation Engine
    ↓
TTS
    ↓
Cart
```

### Version 1.0

* Voice negotiation
* Hindi + English
* Product catalog
* Negotiation engine
* Cart integration

### Version 2.0

* More Indian languages
* Merchant dashboard
* Advanced negotiation strategies
* Analytics
* Dynamic pricing

### Version 3.0

* Autonomous AI seller agents
* Web3 payments
* Smart-contract escrow
* Cross-platform integrations
* B2B negotiation

---

# Vision

```
> **Make negotiation a native feature of digital commerce.**
```

Marchander AI aims to make online shopping feel less like accepting a price and more like having a conversation.

```text
Traditional Commerce
       ↓
     Bargain
       ↓
   Human Seller
       ↓
     Agreement

Marchander AI
       ↓
 Voice + AI
       ↓
AI Negotiation Agent
       ↓
     Agreement
       ↓
  Digital Commerce
```



---

## Marchander AI

**Voice. Bargain. Deal.**

```
> **E-commerce gives customers a price.  
> Marchander AI lets them negotiate it.**
```
