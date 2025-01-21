# Smart Contracts

The **Gluex Router** is a decentralized execution framework that facilitates efficient and modular token interactions.
It ensures smooth token swaps by managing interactions and routing mechanisms while enforcing strict validation and
security measures.

## **Key Components**

2. **GluexRouter** – Manages token validations, slippage protection, and fee deductions.
1. **GluexExecutor** – Handles the execution of predefined interactions.

---

## **Key Functions and Workflow**

### **1. `swap` Function (GluexRouter)**

#### **Purpose**

The `swap` function enables users to swap tokens by executing a series of interactions through the **GluexExecutor**. It
ensures that slippage, fees, and routing parameters are strictly adhered to.

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

---

### **2. `executeRoute` Function (GluexExecutor)**

#### **Purpose**

The `executeRoute` function processes an array of interactions, executing them sequentially through low-level calls. It
ensures atomic execution of swaps while handling potential failures efficiently.

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

---

## **How It Works Together**

1. **A user initiates a swap** by calling `swap` on **GluexRouter**.
2. **GluexRouter** verifies the input parameters and collects the required tokens.
3. **It forwards interactions** to **GluexExecutor** via `executeRoute`.
4. **GluexExecutor** sequentially executes each interaction using `.call`.
5. **After execution**, the contract calculates the output token amount.
6. **If there’s positive slippage**, the extra tokens are sent directly to the user.
7. **Final output tokens** are transferred to the designated recipient.
8. **The `Routed` event** logs the transaction details, ensuring transparency.
