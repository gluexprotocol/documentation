---
title: Router API
description:
  GlueX Router API is a powerful and flexible tool designed for developers to implement efficient and optimized onchain
  interaction logic across multiple supported blockchains
keywords: [GlueX, GlueX APIs, GlueX Documentation, GlueX Router API, Router API, GlueX Router, Routing API]
---

<head>
    <!-- Meta -->
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content="GlueX Router API is a powerful and flexible tool designed for developers to implement efficient and optimized onchain interaction logic across multiple supported blockchains" />
    <meta name="keywords" content="GlueX, GlueX APIs, GlueX Documentation, GlueX Router API, Router API, GlueX Router, Routing API" />
    <meta name="author" content="GlueX Protocol" />
    <!-- Open Graph -->
    <meta property="og:title" content="Router API | GlueX Protocol" />
    <meta property="og:description" content="GlueX Router API is a powerful and flexible tool designed for developers to implement efficient and optimized onchain interaction logic across multiple supported blockchains" />
    <meta property="og:image" content="https://docs.gluex.xyz/banner.jpg" />
    <meta property="og:url" content="https://docs.gluex.xyz/gluex-apis/router-api/" />
    <meta property="og:type" content="website" />
    <!-- Twitter -->
    <meta name="twitter:title" content="Router API | GlueX Protocol" />
    <meta name="twitter:url" content="https://docs.gluex.xyz/gluex-apis/router-api/" />
    <meta name="twitter:description" content="GlueX Router API is a powerful and flexible tool designed for developers to implement efficient and optimized onchain interaction logic across multiple supported blockchains" />
    <meta name="twitter:image" content="https://docs.gluex.xyz/banner.jpg" />
    <meta name="twitter:card" content="https://docs.gluex.xyz/banner.jpg" />
</head>

# GlueX Router API

**GlueX Router API** is a powerful and flexible tool designed for developers to implement efficient on-chain interaction
logic across multiple supported blockchains. Whether you’re building a DeFi application or optimizing cross-chain
workflows, the API provides everything you need for seamless integration.

## 🌐 API Base URL

https://router.gluex.xyz

All endpoint paths in this document are relative to the base URL above.

## 🚀 Key Features

- **Multi-Chain Support**: Operates seamlessly across a wide range of blockchains.
- **Comprehensive DeFi Protocol Coverage**: Supports DEXs, lending, yield farming, staking, and more.
- **Fast Response Times**: Average round-trip time of ~500ms.
- **Optimized Execution**: Default configurations minimize reverts and protect users from MEV.
- **Positive Slippage Rewards**: All positive slippage is returned to the user.
- **Dynamic Fee Structure**: Transparent, volume-based routing fees.

---

## Additional Features

### 🛡 Surge Protection

Surge Protection is a built-in safety mechanism designed to protect users from volatile price swings and shallow liquidity that could result in significant value loss.

Imagine you're swapping 100 USDC for another token. Surge Protection checks what would happen if you tried to reverse that trade in the same block, without any other transactions in between. If the system estimates that you'd only get back, say, 84 USDC, it considers that a potential red flag.

Rather than letting the trade go through and leaving you with a surprise loss, Surge Protection intervenes. It halts the transaction and alerts you that the trade would lead to a direct loss in the input token’s value.

This isn't just another feature—it's a new class of trade safety. By simulating the reverse of your trade before execution, it evaluates:
* Liquidity depth
* Price impact
* Volatility risk

If the projected loss exceeds 10%, the trade is blocked.

Why it matters:
* No more entering a trade and immediately regretting it.
* No more being the exit liquidity in a volatile or low-depth pool.
* Surge Protection gives users peace of mind with pre-trade risk visibility.

Note: Surge Protection is enabled by default.
If you understand the risks and still want to proceed with the trade, you can explicitly disable it by setting `"surgeProtection": false` in your API request payload.

### 🛋 Partial Fill Order

In volatile or low-liquidity market conditions, executing a full trade might not be optimal—or even possible—without incurring high slippage. That’s where Partial Fill Orders come in.

When you enable partial fills by setting "isPartialFill": true, the GlueX Router will dynamically determine the optimal amount of your input token to use for the swap. It calculates the most efficient route and returns both:
* The partial input amount that should be filled.
* The expected output amount based on that partial fill.

This gives you the best possible execution, even when the full amount can't be traded effectively in one go.

Use case example:
Say you want to swap 1000 USDC, but due to shallow liquidity or aggressive slippage, only 730 USDC can be swapped optimally.
With partial fills enabled, the router will suggest using just 730 USDC and return the expected output for that amount—ensuring you get a better trade rather than forcing through a poor one.

Why use Partial Fills?
* Prevents large orders from being hit with high price impact.
* Dynamically adapts to current market conditions.
* Enables smarter routing with minimal manual tuning.

Note: Partial fill logic is opt-in.
To enable it, set `"isPartialFill": true` in your payload.
If left unset or set to false, the router will attempt to fill the entire input amount.

### 🔁 Buy Order

In a Sell Order, the user specifies the input amount, and the router calculates the best possible output amount.

Buy Orders work in reverse: the user specifies the output amount they want to receive, and the router calculates the required input amount to fulfill the trade.

To use a Buy Order, set the `"orderType"` field in the payload to `"BUY"` and include the desired `"outputAmount"`.

If orderType is not provided, the router defaults to a Sell Order, and `"inputAmount"` must be included.

| `orderType` | **Required Field** | **Description**                       |
|-------------|--------------------|---------------------------------------|
| `BUY`       | `outputAmount`     | Amount of the output token to receive |
| `SELL`      | `inputAmount`      | Amount of the input token to sell     |

---

## Fee Schedule

Unlike other routers that retain positive slippage as hidden fees or charge additional fee on transactions, GlueX Router returns all positive slippage directly to users and there are no hidden charges. During volatile markets, this can result in significant savings.

---

## 📊 API Tiers

GlueX offers flexible rate limits to meet different project needs:

| Tier         | Requests per Second (RPS) | Burst Capacity | Description                                    |
| ------------ | ------------------------- | -------------- | ---------------------------------------------- |
| Basic        | 3                         | 3              | For small apps, testing, or prototypes         |
| Growth       | 10                        | 30             | Suitable for mid-size DApps or production use  |
| Premium      | 20                        | 50             | Supports high-frequency trading or aggregators |
| Enterprise   | Custom                    | Custom         | Tailored SLAs, support, and throughput limits  |

---

## 📱 API Endpoints

Comprehensive endpoint documentation is available to help you get started quickly. Each endpoint includes detailed
descriptions, request/response formats, and examples.

### `POST /v1/price`

Returns a **price estimate** for a swap. Does **not** include calldata or simulation metadata.

* Surge Protection: `true` by default
* Partial Fills supported
* Returns all *Common Response Fields*

### `POST /v1/quote`

Returns a **price quote + calldata** for executing the trade on-chain. Includes simulation data.

* Simulation enabled by default (`computeEstimate: true`)
* Includes all *Common Response Fields*

## 🔍 Query Parameters

| Name              | Type           | Required    | Description                                    |
| ----------------- | -------------- | ----------- | ---------------------------------------------- |
| `chainID`         | string         | Conditional | Human-readable chain name (`ethereum`)         |
| `networkID`       | string/integer | Conditional | Numeric chain ID (`1` = Ethereum)              |
| `inputToken`      | string         | ✅           | ERC-20 address of token to sell                |
| `outputToken`     | string         | ✅           | ERC-20 address of token to buy                 |
| `inputAmount`     | string/integer | Conditional | Amount of `inputToken` (with `SELL`)           |
| `outputAmount`    | string/integer | Conditional | Amount of `outputToken` (with `BUY`)           |
| `orderType`       | string         | Conditional | `"SELL"` or `"BUY"`                            |
| `userAddress`     | string         | ✅           | Address initiating the swap                    |
| `outputReceiver`  | string         | ✅           | Address receiving the output                   |
| `uniquePID`       | string         | ✅           | Partner ID for tracking                        |
| `computeEstimate` | boolean        | Optional    | Enable simulation (default: true for `quote`) |
| `computeStable`   | boolean        | Optional    | Include USD values in response                 |
| `surgeProtection` | boolean        | Optional    | Enable trade safety (default: false)            |
| `isPartialFill`   | boolean        | Optional    | Allow partial swaps (default: false)           |
| `isPermit2`       | boolean        | Optional    | Enable Permit2 for allowances                  |
| `slippage`        | string/integer | Optional    | Max slippage (in basis points)                 |
| `partnerFee`      | string/integer | Optional    | Fee in bps applied to `outputAmount`           |
| `partnerAddress`  | string         | Conditional | Partner EOA to collect `partnerFee`            |
| `modulesFilter`   | list           | Optional    | Filter the liquidity modules in the solution   |

## 📤 Common Response Fields

These fields appear in both `price` and `quote` responses:

| Field                   | Type    | Description                           |
| ----------------------- | ------- | ------------------------------------- |
| `inputToken`            | string  | ERC-20 address of input               |
| `outputToken`           | string  | ERC-20 address of output              |
| `feeToken`              | string  | Token used for fees                   |
| `inputSender`           | string  | Swap initiator                        |
| `outputReceiver`        | string  | Recipient of output                   |
| `inputAmount`           | string  | Amount of input tokens                |
| `outputAmount`          | string  | Output token amount                   |
| `partnerFee`            | string  | Partner fee amount                    |
| `routingFee`            | string  | GlueX routing fee                     |
| `effectiveInputAmount`  | string  | Actual used input (partial fills)     |
| `effectiveOutputAmount` | string  | Net output after fees                 |
| `minOutputAmount`       | string  | Slippage-protected output             |
| `liquidityModules`      | array   | Modules used in the swap route        |
| `isNativeTokenInput`    | boolean | Input is native token (e.g., ETH)     |
| `value`                 | string  | Native value to send with transaction |

## 🔧 Endpoint-Specific Fields

### `price` Only

| Field        | Type    | Description                   |
| ------------ | ------- | ----------------------------- |
| `surgeValue` | integer | Estimated reverse loss (in %) |

### `quote` Only

| Field              | Type    | Description                               |
| ------------------ | ------- | ----------------------------------------- |
| `calldata`         | string  | ABI-encoded transaction data              |
| `revert`           | boolean | Would the transaction revert?             |
| `computationUnits` | integer | Estimated gas cost                        |
| `lowBalance`       | boolean | True if balance is insufficient           |
| `blockNumber`      | integer | Block number used for simulation          |
| `simulation`       | object  | Raw trace/debug object (advanced use)     |


import { SwaggerDoc } from '@site/src/components/Swagger';

<SwaggerDoc url="https://raw.githubusercontent.com/gluexprotocol/gluex-openapis/main/router-api/openapi.json" />

### Tutorials

We offer several guides to teach you about the most important principles of the API. They will teach you step by step
how to integrate our endpoints into your dApp:

1. [Getting Started](https://docs.gluex.xyz/gluex-apis/router-api/tutorials/router-api-tutorial-getting-started)
2. [Deposit to a Lending Vault](https://docs.gluex.xyz/gluex-apis/router-api/tutorials/router-api-tutorial-deposit-to-lending-vault)
3. [Mint Liquidity Position in a DEX](https://docs.gluex.xyz/gluex-apis/router-api/tutorials/router-api-tutorial-mint-liquidity-position-in-dex)
3. [Swapping Native Tokens](https://docs.gluex.xyz/gluex-apis/router-api/tutorials/router-api-tutorial-swapping-native-tokens)
5. [Using Permit2](https://docs.gluex.xyz/gluex-apis/router-api/tutorials/router-api-tutorial-using-permit2)
