---
id: router-api-tutorial-deposit-to-lending-vault
title: Router API - Tutorial (Deposit to a Lending Vault)
description: A step by step guide on how to deposit assets to a lending vault using the GlueX Router API
keywords: [GlueX, GlueX APIs, Router API, Tutorial, Deposit to a Lending Vault, Lending Vault, Deposit]
sidebar_label: 2. Deposit to a Lending Vault
---

<head>
    <!-- Open graph -->
    <meta property="og:title" content="Router API - Tutorial (Deposit to a Lending Vault) | GlueX Protocol" />
    <meta property="og:description" content="A step by step guide on how to deposit assets to a lending vault using the GlueX Router API" />
    <!-- Twitter -->
    <meta name="twitter:title" content="Router API - Tutorial (Deposit to a Lending Vault) | GlueX Protocol" />
    <meta name="twitter:description" content="A step by step guide on how to deposit assets to a lending vault using the GlueX Router API" />
</head>

# Tutorial 2: Deposit to a Lending Vault

# Depositing to a Lending Vault Using GlueX

## Introduction

Imagine holding **$GALA** and wanting to start earning yield with **$aETHWETH**. With GlueX, this is possible in just **one transaction**. This tutorial explains how to seamlessly deposit into a **lending vault** by swapping GALA for aETHWETH using GlueX's liquidity modules. We'll break down the process using a real Ethereum transaction as an example:

[Etherscan Txn](https://etherscan.io/tx/0xd0c48d25ac3e0ab111b3ab401903d4a357baa22ee9c9efb832e0b80278ba5ba3)

### **How It Works**

1. **Transfer $GALA** from the user's wallet.
2. **Swap $GALA for $WETH** via Uniswap V3.
3. **Receive $aETHWETH** via Aave V3.
4. **Start earning yield** automatically.

### **Why This Matters?**

Moving from a regular token to a **yield-bearing asset** usually requires multiple platforms, manual steps, and higher fees. GlueX removes these barriers, bringing:

✅ **Time efficiency** - One transaction instead of many.

✅ **Cost savings** - Fewer gas fees.

✅ **Simplicity** - No manual interactions with multiple protocols.

This tutorial uses **$GALA → $aETHWETH** as an example, but GlueX allows you to swap **any token to any yield-generating token** in a single transaction.

## **Code Implementation**

### **1. Setup and Configuration**

```python
from web3 import Web3
import requests
import json
import time

# Configuration
API_KEY = "your_api_key"
QUOTE_ENDPOINT = "https://router.gluex.xyz/v1/quote"
RPC_URL = "https://mainnet.gateway.tenderly.co/your_rpc_url"
PRIVATE_KEY = "your_private_key"

# Token Addresses
GALA_ADDRESS = "0xd1d2Eb1B1e90B638588728b4130137D262C87cae"
AETHWETH_ADDRESS = "0x4d5F47FA6A74757f35C14fD3a6Ef8E3C9BC514E8"

# Input amount (in decimals)
INPUT_AMOUNT = 2000000000000  # 2,000,000 GALA (including decimals)

# Initialize Web3
web3 = Web3(Web3.HTTPProvider(RPC_URL))
account = web3.eth.account.from_key(PRIVATE_KEY)
COMPUTATION_UNITS = 1000000
COMPUTATION_COST = web3.eth.gas_price
```

### **2. Fetching a Swap Quote**

Before executing the transaction, fetch a quote from the GlueX Router.

```python
def fetch_quote():
    """Fetch a quote from the GlueX Router for GALA to aETHWETH swap."""
    headers = {"x-api-key": API_KEY}
    body = {
        "chainID": "ethereum",
        "userAddress": account.address,
        "outputReceiver": account.address,
        "uniquePID": "your_unique_pid",
        "inputToken": GALA_ADDRESS,
        "outputToken": AETHWETH_ADDRESS,
        "inputAmount": INPUT_AMOUNT,
        "isPermit2": False
    }
    response = requests.post(QUOTE_ENDPOINT, json=body, headers=headers)
    return response.json()
```

### **3. Approving the Router Contract to Spend GALA**

Before executing the swap, the router contract needs permission to spend the user's GALA tokens.

```python
def approve_spender(spender, amount, token_address):
    """Approve the router contract to spend GALA."""
    signature = "0x095ea7b3"
    encoded_arguments = Web3.solidity_keccak(['address', 'uint256'], [spender, amount]).hex()
    calldata = signature + encoded_arguments[2:]
    
    txn = {
        "from": account.address,
        "to": Web3.to_checksum_address(token_address),
        "data": calldata,
        "gas": COMPUTATION_UNITS,
        "gasPrice": web3.eth.gas_price,
        "nonce": web3.eth.get_transaction_count(account.address),
    }
    
    signed_txn = web3.eth.account.sign_transaction(txn, account.key)
    txn_hash = web3.eth.send_raw_transaction(signed_txn.raw_transaction)
    print(f"Approval Transaction Hash: {web3.to_hex(txn_hash)}")
    return txn_hash
```

### **4. Executing the Transaction**

After approval, we execute the transaction using the calldata from the quote.

```python
def execute_transaction(calldata, router_address):
    """Execute the swap transaction on GlueX Router."""
    txn = {
        "from": account.address,
        "to": Web3.to_checksum_address(router_address),
        "data": calldata,
        "gas": COMPUTATION_UNITS,
        "gasPrice": web3.eth.gas_price,
        "nonce": web3.eth.get_transaction_count(account.address),
    }
    signed_txn = web3.eth.account.sign_transaction(txn, account.key)
    txn_hash = web3.eth.send_raw_transaction(signed_txn.raw_transaction)
    print(f"Transaction Hash: {web3.to_hex(txn_hash)}")
    return txn_hash
```

### **5. Putting Everything Together**

```python
def main():
    # Fetch the quote
    quote_data = fetch_quote()
    if quote_data.get('statusCode') != 200:
        print("Error fetching quote:", quote_data)
        return
    
    print("Quote received successfully:", quote_data)
    router_address = quote_data["result"]["router"]
    calldata = quote_data["result"]["calldata"]
    
    # Approve the router contract
    print("Approving router contract to spend GALA...")
    approve_spender(router_address, INPUT_AMOUNT, GALA_ADDRESS)
    
    # Execute the transaction
    print("Executing transaction...")
    execute_txn = execute_transaction(calldata, router_address)
    
    receipt = web3.eth.wait_for_transaction_receipt(execute_txn)
    print("Transaction confirmed. Receipt:")
    print(receipt)

if __name__ == "__main__":
    main()
```

## **Conclusion**

With GlueX, moving from **$GALA** to a yield-generating asset like **$aETHWETH** takes just **one transaction**. This tutorial demonstrates:

- Fetching a swap quote
- Approving the router contract to spend GALA
- Executing the transaction to swap and deposit seamlessly

This isn't limited to **GALA → aETHWETH**. GlueX enables **any token → any yield-bearing asset** in a **single** transaction, saving time and costs.

### **Opportunities with GlueX:**

🔹 **Instant access to yield** without manual interventions.

🔹 **Seamless diversification** into yield-generating assets.

🔹 **Cost savings** by reducing gas fees across multiple steps.

With GlueX, DeFi becomes as easy as sending an email. 🚀
