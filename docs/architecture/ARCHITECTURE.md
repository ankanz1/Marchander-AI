# Marchander AI — Architecture

## 1. High-Level Architecture

```text
User
  ↓
Frontend (React + TypeScript + Tailwind)
  ↓
FastAPI Backend
  ├── Auth / Session
  ├── Product Service
  ├── Negotiation API
  ├── Cart Service
  └── Voice API
        ↓
AI Services
  ├── Speech-to-Text
  ├── Intent Classification
  ├── Offer Extraction
  ├── Negotiation Engine
  └── Text-to-Speech
        ↓
Data Layer
  ├── PostgreSQL
  └── Redis
```

## 2. Negotiation Flow

```text
Voice/Text Input
      ↓
STT (if voice)
      ↓
Intent + Offer Extraction
      ↓
Load Product + Negotiation Session
      ↓
Validate Seller Constraints
      ↓
Negotiation Engine
      ↓
Accept / Counter / Reject
      ↓
Response Generation
      ↓
TTS (if voice)
      ↓
User
      ↓
If accepted → Cart Update
```

## 3. Negotiation State
Each session should maintain:
- Product ID
- Listed price
- Minimum acceptable price
- Current offer
- Current counter-offer
- Round number
- Previous offers
- Session status
- Final agreed price, when applicable

## 4. Technology Stack
### Frontend
React, TypeScript, Tailwind CSS, Web Speech API where appropriate.

### Backend
Python, FastAPI, REST, WebSocket.

### AI
Whisper/STT, DistilBERT or rule-based MVP intent classification, Python negotiation engine, TTS provider.

### Data
PostgreSQL and Redis.

### Optional Web3
Celo, Solidity, Hardhat, Wagmi/RainbowKit.

## 5. Recommended Folder Structure

```text
marchander-ai/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── features/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── lib/
│   └── package.json
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── negotiation/
│   │   ├── voice/
│   │   └── main.py
│   ├── tests/
│   └── requirements.txt
├── ai/
│   ├── intent_classifier/
│   ├── negotiation_engine/
│   └── evaluation/
├── contracts/
├── tests/
├── scripts/
├── docs/
└── README.md
```

## 6. Architectural Principle
Keep the negotiation engine independent from the voice providers and frontend. Voice is an interface; negotiation logic is core business logic.
