---
description: Integrate GlueX Router API directly into your app.
---

# Router API

**Gluex Router API** is a versitle self-service tool that provides optimal execution logic for any type of any type of on-chain interaction across multiple supported chains. For example,

- Swap between any two arbitrary tokens
- Exit a position in any token to deposit into a any lending vault.
- Remove liquidity from any liquidity pool to enter a position in any lending vault.
- Withdraw assets from any lending vault and enter a position in any token.
- Much more...

## Key Features

The main key characteristics of GlueX Router are

- Large multi-chain availability
- Diverse coverage of DeFi protocol (DEXs, Lending, Yield, Staking, etc.)
- Average API request round trip of 500ms
- MEV protection
- Default slippage configuration optimized for revert minimization and value protection
- User always receives all positive slippage
- Dynamic routing fees

## Fee Schedule

Unlike other routers that retain positive slippage as the service fee, the GlueX Router returns all positive slippage
directly to the user. During periods of high market volatility, the amount of positive slippage can be substantial. As a
result, even if some routers appear fee-free, users may ultimately lose more value through positive slippage than they
would by paying small routing fees.

The GlueX Router employs a dynamic fee structure based on the transaction value being settled

| **Intent Value Size**       | **Fee Rate** |
| --------------------------- | ------------ |
| > 1000 USD                  | 0.04%        |
| 10k USD > volume > 1000 USD | 0.03%        |
| 20k USD > volume > 10k USD  | 0.02%        |
| > 20k USD                   | 0.01%        |

In addition to this tiered fee schedule, GlueX Router rewards consistent activity by reducing the routing fee for users
with higher cumulative transaction volumes over 30 days

| **30d Value Settled**        | **Routing Fee Rate** |
| ---------------------------- | -------------------- |
| > 100k USD                   | 0.04%                |
| 200k USD > volume > 100k USD | 0.03%                |
| 300k USD > volume > 200k USD | 0.02%                |
| > 300k USD                   | 0.01%                |

Meaning, a consistent user will always pay the lowest routing fee irrespective of the size of the trade.

### API Endpoints

import { SwaggerDoc } from '@site/src/components/Swagger';

<SwaggerDoc url="https://raw.githubusercontent.com/gluexprotocol/gluex-openapis/main/router-api/openapi.json" />

### Tutorials

We offer several guides to teach you about the most important principles of the API. They will teach you step by step
how to integrate our endpoints into your dApp:
