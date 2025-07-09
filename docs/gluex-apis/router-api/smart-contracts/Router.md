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

**Contract Address**: `0xaF6Dd700b655D100e56201b92B29BD7A9E406CEB`

### Availability on Chains

Check the chains where GlueX Router is currently available
[here](https://router.gluex.xyz/liquidity). This provides up-to-date information
about the supported chains.

---

## Functions

## `swap`

Executes a token routing operation through an external `IExecutor` contract using a predefined set of interactions.

### Parameters

- `executor` (`IExecutor`): The executor contract responsible for processing interactions.
- `desc` (`RouteDescription calldata`): A structured object containing input/output token information, fees, limits, and recipient addresses.
- `interactions` (`Interaction[] calldata`): An array of interaction steps to be executed by the executor.

### Returns

- `finalOutputAmount` (`uint256`): The final amount of output token received by the `outputReceiver` after fees and surplus/slippage sharing.

---

### Reverts

- `InvalidNativeTokenInputAmount`: If the ETH value sent does not match the expected input amount.
- `RoutingFeeTooHigh`: If `desc.routingFee` exceeds the maximum allowed fee (`_MAX_FEE`).
- `RoutingFeeTooLow`: If `desc.routingFee` is below the minimum required fee (`_MIN_FEE`).
- `PartnerSurplusShareTooHigh`: If `desc.partnerSurplusShare` exceeds `_MAX_PARTNER_SURPLUS_SHARE_LIMIT`.
- `ProtocolSurplusShareTooLow`: If `desc.protocolSurplusShare` is below `_MIN_PROTOCOL_SURPLUS_SHARE_LIMIT`.
- `PartnerSlippageShareTooHigh`: If `desc.partnerSlippageShare` exceeds `_MAX_PARTNER_SLIPPAGE_SHARE_LIMIT`.
- `ProtocolSlippageShareTooLow`: If `desc.protocolSlippageShare` is below `_MIN_PROTOCOL_SLIPPAGE_SHARE_LIMIT`.
- `ZeroAddress`: If any required address (e.g. `inputReceiver`, `outputReceiver`) is a zero address.
- `InvalidSlippage`: If `desc.minOutputAmount` is zero.
- `SlippageLimitTooLarge`: If `desc.minOutputAmount` exceeds `desc.outputAmount`.
- `InsufficientBalance`: If the router does not hold sufficient balance for the intended transfer.
- `NativeTransferFailed`: If the native token transfer fails.

---

## Event: `Routed`

Emitted upon successful completion of a routing operation.

### Event Signature

```solidity
event Routed(
    bytes32 indexed uniquePID,
    address indexed userAddress,
    address outputReceiver,
    IERC20 inputToken,
    uint256 inputAmount,
    IERC20 outputToken,
    uint256 finalOutputAmount,
    uint256 partnerFee,
    uint256 routingFee,
    uint256 partnerShare,
    uint256 protocolShare
);
```

#### Parameters

- `uniquePID` (bytes): The unique identifier for the partner.
- `userAddress` (address): The address of the user who initiated the route.
- `outputReceiver` (address): The address of the receiver of the output token.
- `inputToken` (IERC20): The ERC20 token used as input.
- `inputAmount` (uint256): The amount of input token used for routing.
- `outputToken` (IERC20): The ERC20 token received as output.
- `finalOutputAmount` (uint256): The actual output amount received after routing.
- `partnerFee` (uint256): The fee charged for the partner.
- `routingFee` (uint256): The fee charged for the routing operation.
- `partnerShare` (uint256): The share of surplus/slippage allocated to the partner.
- `protocolShare` (uint256): The share of surplus/slippage allocated to the protocol.

---