# Tutorials

## **How to Use the GlueX API**

This section provides a step-by-step guide on how to interact with the GlueX Router API, from checking available liquidity to executing an on-chain transaction. Follow these steps to integrate GlueX into your system efficiently.

### **1. Fetch Available Liquidity**
Before using GlueX Router, you need to understand where it is available and which liquidity modules it supports. Call `/liquidity` to retrieve the supported chains and available liquidity modules. This allows partners to scale their systems efficiently.

You can check the latest available chains and liquidity modules here: [GlueX Liquidity API](https://router.gluex.xyz/liquidity).

### **2. Generate an API Key**
Now that you understand GlueX Router, the next step is getting started. This is straightforward—partners must create an API key to access liquidity. Call `/create` with your details to obtain an API key. This key is required for accessing `/price` and `/quote` endpoints.

### **3. Fetch Swap Pricing**
Before generating calldata for a swap, it is useful to estimate the expected swap values. Call `/price` with details of the tokens to swap, the user’s address, and the desired chain. The response will provide the estimated output amount, routing fees, and liquidity sources.

### **4. Get Calldata for On-Chain Execution**
Once you're ready to execute a swap, call `/quote` to obtain the **router contract address** and the required **calldata**. This calldata represents the exact execution path for your swap and must be submitted on-chain through the router contract.

### **5. Approve the Router to Use Tokens**
To allow GlueX Router to execute swaps on your behalf, you must approve the router contract to spend your `inputToken` amount. This ensures the transaction can be processed seamlessly.

### **6. Execute the Swap On-Chain**
Finally, use the calldata retrieved from the `/quote` endpoint on the router contract to submit a transaction on-chain.