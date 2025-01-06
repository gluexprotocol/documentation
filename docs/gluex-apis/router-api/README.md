---
description: Integrate GlueX Router API directly into your app.
---

# Router API

The **Gluex Router API** is a cutting-edge solution designed to simplify and streamline complex blockchain interactions. It facilitates secure and atomic multi-step transactions, ensuring your on-chain interactions are smooth, fail-safe and MEV protected. 
With over over 100 liquidity modules across chains, GlueX Router can facilitate any type of atomic execution on behalf of users. For example,

- Exit a position in any token to deposit into a any lending vault.
- Remove liquidity from any liquidity pool to enter a position in any lending vault.
- Withdraw assets from any lending vault and enter a position in any token.
- Much more...

# Key Features

The main key characteristics of GlueX Router are

- Large multi-chain availability
- Diverse coverage of DeFi protocol (DEXs, Lending, Yield, Staking, etc.)
- Average API request round trip of 500ms
- MEV protection by default
- Default slippage configuration optimized for revert minimization and value protection
- User always receives all positive slippage
- Dynamic routing fees

# Fee Schedule

Unlike other routers that retain positive slippage as the service fee, the GlueX Router returns all positive slippage directly to the user. During periods of high market volatility, the amount of positive slippage can be substantial. As a result, even if some routers appear fee-free, users may ultimately lose more value through positive slippage than they would by paying small routing fees. 

The GlueX Router employs a dynamic fee structure based on the transaction value being settled

| **Intent Value Size**       | **Fee Rate** |
|-----------------------------|--------------|
| > 1000 USD                  | 0.04%        |
| 10k USD > volume > 1000 USD | 0.03%        |
| 20k USD > volume > 10k USD  | 0.02%        |
| > 20k USD                   | 0.01%        |


In addition to this tiered fee schedule, GlueX Router rewards consistent activity by reducing the routing fee for users with higher cumulative transaction volumes over 30 days 


| **30d Value Settled**       | **Routing Fee Rate** |
|-----------------------------|--------------|
| > 100k USD                     | 0.04%        |
| 200k USD > volume > 100k USD   | 0.03%        |
| 300k USD > volume > 200k USD   | 0.02%        |
| > 300k USD                     | 0.01%        |

Meaning, a consistent user will always pay the lowest routing fee irrespective of the size of the trade.


# Using the API

[coming soon]




# Tutorials

[coming soon]
