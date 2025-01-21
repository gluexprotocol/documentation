# GluexRouter

The `GluexRouter` smart contract provides versatile functionality for routing tokens, collecting fees, and executing on-chain interactions through a structured interface. This contract is designed for high security and usability, ensuring strict adherence to routing and slippage rules.

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

### `collectFees`

Collects routing fees from specified tokens and transfers them to the receiver.

#### Function Signature

```solidity
function collectFees(IERC20[] memory feeTokens, address payable receiver) external onlyTreasury;
```

#### Parameters

- `feeTokens` (IERC20[] memory): An array of ERC20 tokens from which fees will be collected.
- `receiver` (address payable): The address where collected fees will be transferred.

#### Reverts

- `OnlyGlueTreasury`: If the caller is not the Glue treasury.
- `ZeroAddress`: If the `receiver` address is zero.

---

## Events

### `Routed`

Emitted when a routing operation is completed.

#### Event Signature

```solidity
 event Routed(
    bytes indexed unique_pid,
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

- `unique_pid` (bytes): The unique identifier for the partner.
- `inputToken` (IERC20): The ERC20 token used as input.
- `inputAmount` (uint256): The amount of input token used for routing.
- `outputToken` (IERC20): The ERC20 token received as output.
- `outputAmount` (uint256): The expected output amount from the route.
- `partnerFee` (uint256): The fee charged for the partner.
- `routingFee` (uint256): The fee charged for the routing operation.
- `finalOutputAmount` (uint256): The actual output amount received after routing.

---