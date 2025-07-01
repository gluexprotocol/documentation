---
id: router-api-tutorial-getting-started
title: Router API - Tutorial (Getting Started)
description:
  A step by step guide on how to interact with the GlueX Router API, from checking available liquidity to executing an
  onchain transaction
keywords: [GlueX, GlueX APIs, Router API, Tutorial, Getting Started]
sidebar_label: 1. Getting Started
---


<head>
    <!-- Meta -->
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content="A step by step guide on how to interact with the GlueX Router API, from checking available liquidity to executing an onchain transaction" />
    <meta name="keywords" content="GlueX, GlueX APIs, Router API, Tutorial, Getting Started" />
    <meta name="author" content="GlueX Protocol" />
    <!-- Open Graph -->
    <meta property="og:title" content="Router API - Tutorial (Getting Started) | GlueX Protocol" />
    <meta property="og:description" content="A step by step guide on how to interact with the GlueX Router API, from checking available liquidity to executing an onchain transaction" />
    <meta property="og:image" content="https://docs.gluex.xyz/banner.jpg" />
    <meta property="og:url" content="https://docs.gluex.xyz/gluex-apis/router-api/tutorials/router-api-tutorial-getting-started" />
    <meta property="og:type" content="website" />
    <!-- Twitter -->
    <meta name="twitter:title" content="Router API - Tutorial (Getting Started) | GlueX Protocol" />
    <meta name="twitter:url" content="https://docs.gluex.xyz/gluex-apis/router-api/tutorials/router-api-tutorial-getting-started" />
    <meta name="twitter:description" content="A step by step guide on how to interact with the GlueX Router API, from checking available liquidity to executing an onchain transaction" />
    <meta name="twitter:image" content="https://docs.gluex.xyz/banner.jpg" />
    <meta name="twitter:card" content="https://docs.gluex.xyz/banner.jpg" />
</head>

# Tutorial 1: Getting Started

This section provides a step-by-step guide on how to interact with the GlueX Router API, from checking available
liquidity to executing an on-chain transaction. Follow these steps to integrate GlueX into your system efficiently.

### **1. Fetch Available Liquidity**

Before using GlueX Router, you need to understand where it is available and which liquidity modules it supports. Call
`/liquidity` to retrieve the supported chains and available liquidity modules. This allows partners to scale their
systems efficiently.

You can check the latest available chains and liquidity modules here:
[GlueX Liquidity API](https://router.gluex.xyz/liquidity).

### **2. Generate an API Key**

Now that you understand GlueX Router, the next step is getting started. This is straightforward—partners must create an
API key to access liquidity. Call `/create` with your details to obtain an API key. This key is required for accessing
`/v1/price` and `/v1/quote` endpoints.

### **3. Fetch Swap Pricing**

Before generating calldata for a swap, it is useful to estimate the expected swap values. Call `/v1/price` with details of
the tokens to swap, the user’s address, and the desired chain. The response will provide the estimated output amount,
routing fees, and liquidity sources.

### **4. Get Calldata for On-Chain Execution**

Once you're ready to execute a swap, call `/v1/quote` to obtain the **router contract address** and the required
**calldata**. This calldata represents the exact execution path for your swap and must be submitted on-chain through the
router contract.

### **5. Approve the Router to Use Tokens**

To allow GlueX Router to execute swaps on your behalf, you must approve the router contract to spend your `inputToken`
amount. This ensures the transaction can be processed seamlessly.

### **6. Execute the Swap On-Chain**

Finally, use the calldata retrieved from the `/v1/quote` endpoint on the router contract to submit a transaction on-chain.
