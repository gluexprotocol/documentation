---
description: Seamlessly integrate the GlueX Router API into your app for efficient and optimized on-chain interactions.
---

# GlueX Router API [BETA]

> **Note:** GlueX Router API is currently in beta. We welcome your feedback to help us refine every detail and ensure it meets the highest quality standards you expect from GlueX Protocol products.

**GlueX Router API** is a powerful and flexible tool designed for developers to implement efficient on-chain interaction logic across multiple supported blockchains. Whether you’re building a DeFi application or optimizing cross-chain workflows, the API provides everything you need for seamless integration.

## Key Features

- **Multi-Chain Support**: Operates seamlessly across a wide range of blockchains.
- **Comprehensive DeFi Protocol Coverage**: Supports DEXs, lending, yield farming, staking, and more.
- **Fast Response Times**: Average round-trip time of ~500ms.
- **Optimized Execution**: Default configurations minimize reverts and protect users from MEV.
- **Positive Slippage Rewards**: All positive slippage is returned to the user.
- **Dynamic Fee Structure**: Transparent, volume-based routing fees.

---

## Fee Schedule

Unlike other routers that retain positive slippage as hidden fees, GlueX Router returns all positive slippage directly to users. During volatile markets, this can result in significant savings.

### Transaction Fees
GlueX Router uses a dynamic fee structure based on the transaction value:

| **Intent Value Size**       | **Fee Rate** |
|-----------------------------|--------------|
| `< $1,000`                  | **0.04%**    |
| `$1,000 - $10,000`          | **0.03%**    |
| `$10,000 - $20,000`         | **0.02%**    |
| `> $20,000`                 | **0.01%**    |

### Partner Discounts
Frequent users benefit from reduced fees based on 30-day cumulative transaction volumes:

| **30d Value Settled**        | **Routing Fee Rate** |
|------------------------------|----------------------|
| `< $100,000`                | **0.04%**           |
| `$100,000 - $200,000`       | **0.03%**           |
| `$200,000 - $300,000`       | **0.02%**           |
| `> $300,000`                | **0.01%**           |

**Pro Tip:** Consistent activity ensures the lowest routing fee for all trades, regardless of size.

---

## API Endpoints

Comprehensive endpoint documentation is available to help you get started quickly. Each endpoint includes detailed descriptions, request/response formats, and examples.

import { SwaggerDoc } from '@site/src/components/Swagger';

<SwaggerDoc url="https://raw.githubusercontent.com/gluexprotocol/gluex-openapis/main/router-api/openapi.json" />

### Tutorials

We offer several guides to teach you about the most important principles of the API. They will teach you step by step
how to integrate our endpoints into your dApp:
