---
title: GluexRouter (v1)
description:
  The GluexRouter smart contract provides efficient and optimized functionality for routing tokens, collecting fees and
  executing onchain interactions through a structured interface
keywords: [GlueX, GlueX APIs, Audits, Smart Contracts, Router API]
---

<head>
    <!-- Meta -->
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content="The GluexRouter smart contract provides efficient and optimized functionality for routing tokens, collecting fees and executing onchain interactions through a structured interface" />
    <meta name="keywords" content="GlueX, GlueX APIs, Audits, Smart Contracts, Router, Router API" />
    <meta name="author" content="GlueX Protocol" />
    <!-- Open Graph -->
    <meta property="og:title" content="Router API - GluexRouter (v1) | GlueX Protocol" />
    <meta property="og:description" content="The GluexRouter smart contract provides efficient and optimized functionality for routing tokens, collecting fees and executing onchain interactions through a structured interface" />
    <meta property="og:image" content="https://docs.gluex.xyz/banner.jpg" />
    <meta property="og:url" content="https://docs.gluex.xyz/gluex-apis/router-api/smart-contracts/Router" />
    <meta property="og:type" content="website" />
    <!-- Twitter -->
    <meta name="twitter:title" content="Router API - GluexRouter (v1) | GlueX Protocol" />
    <meta name="twitter:url" content="https://docs.gluex.xyz/gluex-apis/router-api/smart-contracts/Router" />
    <meta name="twitter:description" content="The GluexRouter smart contract provides efficient and optimized functionality for routing tokens, collecting fees and executing onchain interactions through a structured interface" />
    <meta name="twitter:image" content="https://docs.gluex.xyz/banner.jpg" />
    <meta name="twitter:card" content="https://docs.gluex.xyz/banner.jpg" />
</head>


# GluexRouter v1

The `GluexRouter` smart contract provides versatile functionality for routing tokens, collecting fees, and executing
on-chain interactions through a structured interface. This contract is designed for high security and usability,
ensuring strict adherence to routing and slippage rules.

## Deployment

The `GluexRouter` contract is deployed at the following address:

**Contract Address**: `0x6Ec7612828B776cC746fe0Ee5381CC93878844f7`

### Availability on Chains

Check the chains where GlueX Router is currently available
[here](https://router.gluex.xyz/liquidity). This provides up-to-date information
about the supported chains.

---

## Functions

### `swap`

Executes a token routing operation using a specified executor and interaction data.

#### Function Signature

```solidity
function swap(
    IExecutor executor,
    RouteDescription calldata desc,
    Interaction[] calldata interactions,
    uint256 deadline
) external payable returns (uint256 finalOutputAmount);
```

#### Parameters

- `executor` (IExecutor): The executor contract performing the interactions.
- `desc` (RouteDescription calldata): The route description containing input, output, and fee details.
- `interactions` (Interaction[] calldata): The interactions encoded for execution by the executor.
- `deadline` (uint256): The timestamp after which the transaction will revert.

#### Returns

- `finalOutputAmount` (uint256): The final amount of output token received.

#### Reverts

- `Deadline passed`: If the block timestamp exceeds the `deadline`.
- `Routing fee too high`: If `desc.routingFee` exceeds `_MAX_FEE`.
- `Routing fee too low`: If `desc.routingFee` is below `_MIN_FEE`.
- `Negative slippage limit`: If `desc.minOutputAmount` is less than or equal to zero.
- `Slippage limit too large`: If `desc.minOutputAmount` exceeds `desc.outputAmount`.
- Other validations related to input/output tokens and fees.

---

## Events

### `Routed`

Emitted when a routing operation is completed.

#### Event Signature

```solidity
event Routed(
    bytes indexed uniquePID,
    address indexed userAddress,
    address outputReceiver,
    IERC20 inputToken,
    uint256 inputAmount,
    IERC20 outputToken,
    uint256 outputAmount,
    uint256 partnerFee,
    uint256 routingFee,
    uint256 finalOutputAmount
);
```

#### Parameters

- `uniquePID` (bytes): The unique identifier for the partner.
- `userAddress` (address): The address of the user who initiated the route.
- `outputReceiver` (address): The address of the receiver of the output token.
- `inputToken` (IERC20): The ERC20 token used as input.
- `inputAmount` (uint256): The amount of input token used for routing.
- `outputToken` (IERC20): The ERC20 token received as output.
- `outputAmount` (uint256): The expected output amount from the route.
- `partnerFee` (uint256): The fee charged for the partner.
- `routingFee` (uint256): The fee charged for the routing operation.
- `finalOutputAmount` (uint256): The actual output amount received after routing.

---
