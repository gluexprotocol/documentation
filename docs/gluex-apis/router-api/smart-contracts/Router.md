---
description: GlueX Router smart contract
---

### `swap` Function (GluexRouter)**
#### **Purpose**
The `swap` function enables users to swap tokens by executing a series of interactions through the **GluexExecutor**. It ensures that slippage, fees, and routing parameters are strictly adhered to.

#### **Flow of Execution**
1. **Validation Checks**
   - Ensures that the provided `deadline` has not passed.
   - Verifies that the slippage tolerance is within acceptable limits.
   - Checks that the routing fee is within the configured range (`_MIN_FEE` to `_MAX_FEE`).
   - Ensures valid input and output amounts.

2. **Handling Input Token Transfers**
   - If using the native token (ETH), ensures that the correct amount is sent in `msg.value`.
   - If using an ERC20 token, the required amount is transferred to the `inputReceiver`.

3. **Executing the Swap via `executeRoute`**
   - Calls `executeRoute` on the **GluexExecutor**, passing in interactions.
   - This step initiates the low-level execution of token interactions.

4. **Handling Output Tokens**
   - After execution, calculates the **final output amount**.
   - If there is **positive slippage**, meaning the actual output is greater than the expected output:
     - The **entire positive slippage amount is credited to the user**.
     - No extra fees are taken from positive slippage.
   - Ensures that the final output meets the minimum output amount (`minOutputAmount`).
   - Transfers the final output tokens to the `outputReceiver`.

5. **Emits the `Routed` Event**
   - Logs transaction details such as input/output tokens, routing fees, and final amounts.