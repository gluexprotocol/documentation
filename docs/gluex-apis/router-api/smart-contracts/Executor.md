---
description: GlueX Executor smart contract
---


### `executeRoute` Function (GluexExecutor)**
#### **Purpose**
The `executeRoute` function processes an array of interactions, executing them sequentially through low-level calls. It ensures atomic execution of swaps while handling potential failures efficiently.

#### **Flow of Execution**
1. **Track Initial Balance**
   - Records the contract’s balance of the output token before execution.

2. **Processing Interactions**
   - Iterates through the provided interactions.
   - Each interaction consists of:
     - A target contract address.
     - Encoded function call data.
     - A specified amount of native tokens (if applicable).
   - Executes each interaction using a **low-level `.call`**.
   - If any call fails, the transaction reverts with detailed failure information.

3. **Calculate Final Output**
   - Retrieves the contract’s output token balance after execution.
   - Determines the **actual output amount** as the difference between the initial and final balance.

4. **Positive Slippage Handling**
   - If the **actual output amount exceeds the expected output amount**, the user **receives the extra amount in full**.
   - No additional routing fees are charged on the slippage.
   - This ensures that the user benefits from **better-than-expected execution**.

5. **Transfer Output Tokens**
   - The final output amount is sent to the **GluexRouter**.
   - The router then forwards the tokens to the designated recipient.
