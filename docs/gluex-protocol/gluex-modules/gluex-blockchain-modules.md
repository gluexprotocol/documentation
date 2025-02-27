---
id: blockchain-module
title: GlueX Modules - Blockchain Module
description:
  GlueX Blockchain Module consists of specialized components designed to improve the onboarding and integration process
  of different blockchains ensuring compatibility and reducing the complexity associated with supporting multiple chains
  with differing architectures, consensus mechanisms and operational nuances
keywords: [GlueX, GlueX APIs, GlueX Modules, GlueX Blockchain Module]
sidebar_label: Blockchain Module
---

<head>
    <!-- Meta -->
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content="GlueX Blockchain Module consists of specialized components designed to improve the onboarding and integration process of different blockchains ensuring compatibility and reducing the complexity associated with supporting multiple chains with differing architectures, consensus mechanisms and operational nuances" />
    <meta name="keywords" content="GlueX blockchain modules, blockchain modules, blockchain modules GlueX Protocol, GlueX blockchain, GlueX blockchain, GlueX modules, GlueX Docs, blockchain, Docs, Decentralized Finance, Blockchain, dApps, API suite, cross-chain, liquidity aggregation" />
    <meta name="author" content="GlueX Protocol" />
    <!-- Open Graph -->
    <meta property="og:title" content="GlueX Modules - Blockchain Module | GlueX Protocol" />
    <meta property="og:description" content="GlueX Blockchain Module consists of specialized components designed to improve the onboarding and integration process of different blockchains ensuring compatibility and reducing the complexity associated with supporting multiple chains with differing architectures, consensus mechanisms and operational nuances" />
    <meta property="og:image" content="https://docs.gluex.xyz/banner.jpg" />
    <meta property="og:url" content="https://docs.gluex.xyz/gluex-protocol/gluex-modules/blockchain-module" />
    <meta property="og:type" content="website" />
    <!-- Twitter -->
    <meta name="twitter:title" content="GlueX Modules - Blockchain Module | GlueX Protocol" />
    <meta name="twitter:url" content="https://docs.gluex.xyz/gluex-protocol/gluex-modules/blockchain-module" />
    <meta name="twitter:description" content="GlueX Blockchain Module consists of specialized components designed to improve the onboarding and integration process of different blockchains ensuring compatibility and reducing the complexity associated with supporting multiple chains with differing architectures, consensus mechanisms and operational nuances" />
    <meta name="twitter:image" content="https://docs.gluex.xyz/banner.jpg" />
    <meta name="twitter:card" content="https://docs.gluex.xyz/banner.jpg" />
</head>

# GlueX Blockchain Modules

## What's a GlueX Blockchain Module?

GlueX Blockchain Modules are specialized components designed to streamline the onboarding and integration process of
different blockchains into the GlueX Protocol. These modules abstract blockchain-level differences, providing a unified
interface for interacting with various blockchains. By leveraging these modules, GlueX ensures seamless compatibility
and reduces the complexity associated with supporting multiple chains with differing architectures, consensus
mechanisms, and operational nuances.

---

## Integrating a Blockchain Module to GlueX Protocol

#### Requirements for Integration

1. **Blockchain Node Access**

   - **Requirement:** Access to a fully synced blockchain node or a reliable third-party RPC endpoint to interact with
     the target blockchain network.
   - **Purpose:** To enable API calls for querying the blockchain and submitting transactions.

2. **Blockchain-Specific SDK or Libraries**

   - **Requirement:** Include any required SDKs, libraries, or APIs specific to the target blockchain (e.g., Web3 for
     Ethereum, Cosmos SDK for Cosmos-based chains).
   - **Purpose:** Facilitate low-level communication and transaction creation.

3. **Chain Configuration**

   - **Requirement:**
     - Chain ID and network details (mainnet/testnet).
     - Native token information (e.g., gas currency).
     - Gas fee estimation logic specific to the chain.
   - **Purpose:** Configure the GlueX Protocol to understand chain-specific properties.

4. **Implementation of Default Functionalities**:

   - **Requirement:**
     - Multicall for efficient batching of read operations.
     - Fetching token balances of specific addresses.
     - Calculating computation cost and factor to ensure transaction validity.
     - Estimating gas (transaction cost) for blockchain operations.
     - Signing transactions securely and efficiently.
   - **Purpose:** Abstraction of default functional requirements for Gluex Protocol to interact with different
     blockchains

5. **Error Handling and Fallbacks**

   - **Requirement:** Implement robust error-handling mechanisms to account for chain-specific quirks or downtime (e.g.,
     transaction reverts, RPC errors).
   - **Purpose:** Maintain reliability and uptime in multi-chain operations.

6. **Abstracting Blockchain Differences**
   - **Requirement:** Develop chain-specific logic to abstract differences in:
     - Consensus algorithms (e.g., Proof-of-Stake vs. Proof-of-Work).
     - Transaction formats and metadata.
     - Gas fee structures and dynamic adjustments.
   - **Purpose:** Provide a unified GlueX interface to interact with different blockchains seamlessly.

With these steps and requirements met, GlueX Blockchain Modules can provide robust and efficient integration, allowing
the GlueX Protocol to operate seamlessly across various blockchain ecosystems.
