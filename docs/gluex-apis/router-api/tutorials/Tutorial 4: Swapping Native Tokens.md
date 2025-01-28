---
id: router-api-tutorial-swapping-native-tokens
title: Router API - Tutorial (Swapping Native Tokens)
description: A step by step guide on how to swap native tokens using the GlueX Router API
keywords: [GlueX, GlueX APIs, Router API, Tutorial, Swapping Native Tokens, Swap, Native Tokens, DEX, Decentralized Exchange, Liquidity Position, Mint, Router API, GlueX Protocol]
sidebar_label: 4. Swapping Native Tokens
---

<head>
    <!-- Open graph -->
    <meta property="og:title" content="Router API - Tutorial (Swapping Native Tokens) | GlueX Protocol" />
    <meta property="og:description" content="A step by step guide on how to swap native tokens using the GlueX Router API" />
    <!-- Twitter -->
    <meta name="twitter:title" content="Router API - Tutorial (Swapping Native Tokens) | GlueX Protocol" />
    <meta name="twitter:description" content="A step by step guide on how to swap native tokens using the GlueX Router API" />
</head>

# Tutorial 4: Swapping Native Tokens

This tutorial provides a step-by-step guide on how to swap native tokens using the GlueX Router.

## Prerequisites

Before running the script, ensure you have the following installed:

- Python 3.10
- Web3 (`pip install web3`)
- Requests (`pip install requests`)
- eth-abi (`pip install eth-abi`)

Additionally, you need access to an Ethereum-compatible blockchain node, such as an Infura or Tenderly RPC endpoint.

## How GlueX Router Works

The GlueX Router simplifies the token swap process by:
1. Fetching a price quote for swapping native tokens.
2. Generating the appropriate calldata for the swap.
3. Executing the transaction on-chain to swap the native token for the desired output token.

## Script Overview

### 1. **Setup and Configuration**

The following script initializes the necessary configurations:

```python
from web3 import Web3
import requests
import json
import os
import time

# Configuration
API_KEY = "your_api_key"
UNIQUE_PID = "your_unique_pid"
QUOTE_ENDPOINT = "https://router.gluex.xyz/v1/quote"
RPC_URL = "https://mainnet.gateway.co/your_rpc_url"
PRIVATE_KEY = "your_private_key"

# Token Information
NATIVE_TOKEN_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"  # Represents native ETH
TOKEN_IN = NATIVE_TOKEN_ADDRESS
TOKEN_OUT = "0xTokenOutAddress"  # Replace with the desired output token address
INPUT_AMOUNT = 1000000000000000000  # Example: 1 ETH in Wei

# Initialize Web3
web3 = Web3(Web3.HTTPProvider(RPC_URL))
account = web3.eth.account.from_key(PRIVATE_KEY)
COMPUTATION_UNITS = 1000000
COMPUTATION_COST = web3.eth.gas_price
```

### 2. **Fetching a Swap Quote**

Before executing the swap, obtain a quote from the GlueX Router. This ensures that you get the best rate available:

```python
def fetch_quote(body, headers):
    """Fetch a quote from the GlueX Router."""
    response = requests.post(QUOTE_ENDPOINT, json=body, headers=headers)
    return response.json()
```

This function sends a request to the GlueX Router to retrieve a quote for swapping native tokens.

### 3. **Executing the Swap Transaction**

Once the quote is retrieved, execute the swap transaction by sending the appropriate calldata:

```python
def execute_transaction(calldata, router_address, account, value=0):
    """Execute transaction on the GlueX Router."""
    txn = {
        "from": account.address,
        "to": Web3.to_checksum_address(router_address),
        "data": calldata,
        "gas": COMPUTATION_UNITS,
        "gasPrice": web3.eth.gas_price,
        "nonce": web3.eth.get_transaction_count(account.address),
        "value": value
    }
    signed_txn = web3.eth.account.sign_transaction(txn, account.key)
    txn_hash = web3.eth.send_raw_transaction(signed_txn.raw_transaction)
    print(f"Transaction Hash: {web3.to_hex(txn_hash)}")
    return txn_hash
```

This function constructs and signs the transaction, ensuring it is sent to the Ethereum blockchain for processing.

### 4. **End-to-End Swap Execution**

The `main()` function ties everything together by fetching a quote and executing the transaction:

```python
def main():
    headers = {"x-api-key": API_KEY}
    body = {
        "chainID": "1",  # Ethereum Mainnet
        "userAddress": account.address,
        "outputReceiver": account.address,
        "uniquePID": UNIQUE_PID,
        "inputToken": TOKEN_IN,
        "outputToken": TOKEN_OUT,
        "inputAmount": INPUT_AMOUNT,
        "isPermit2": False
    }
    
    print("============================================================================")
    print("Fetching swap quote...")
    print(body)
    quote_data = fetch_quote(body, headers)
    
    if quote_data.get('statusCode') != 200:
        print("Error fetching quote:", quote_data)
        return
    
    print("Quote received successfully:")
    print(quote_data)
    
    router_address = quote_data["result"]["router"]
    calldata = quote_data["result"]["calldata"]
    
    print("Executing transaction...")
    execute_txn = execute_transaction(calldata, router_address, account, value=INPUT_AMOUNT)
    
    receipt = web3.eth.wait_for_transaction_receipt(execute_txn)
    print("Transaction confirmed. Receipt:")
    print(receipt)
    print("")

if __name__ == "__main__":
    main()
```

### 5. **Running the Script**

To execute the swap, run the script as follows:

```bash
python swap_native_tokens.py
```

### 6. **Understanding the Workflow**

1. **User provides their private key and RPC URL.**  
2. **The script fetches a quote** for the native token swap from the GlueX Router.  
3. **The appropriate calldata is generated** for the transaction.  
4. **The transaction is executed on-chain**, sending native tokens and receiving the desired token in return.  
5. **The transaction hash is displayed**, which users can verify on Etherscan or their preferred blockchain explorer.

## Conclusion

By following this tutorial, users can seamlessly swap native tokens for any available token on the blockchain using the GlueX Router. The script automates fetching quotes, signing transactions, and executing swaps securely. Users can modify this script to suit their specific needs, such as swapping different tokens, changing input amounts, or integrating it into larger applications.

For further enhancements, users can implement error handling, dynamic user input, or even integrate this functionality into a larger trading bot or DeFi application.
