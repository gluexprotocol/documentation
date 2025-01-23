---
title: GlueX Modules
description:
  Explore more about GlueX Modules, the core building blocks of GlueX Protocol that enable efficient integration of
  intents, blockchains, intent originators and liquidity sources
keywords:
  [GlueX, GlueX APIs, GlueX Documentation, GlueX Modules, GlueX Protocol, Originator, Intent, Blockchain, Liquidity]
sidebar_label: Modules
---

<head>
    <!-- Open graph -->
    <meta property="og:title" content="Modules | GlueX Protocol" />
    <meta property="og:description" content="Explore more about GlueX Modules, the core building blocks of GlueX Protocol that enable efficient integration of intents, blockchains, intent originators and liquidity sources" />
    <!-- Twitter -->
    <meta name="twitter:title" content="Modules | GlueX Protocol" />
    <meta name="twitter:description" content="Explore more about GlueX Modules, the core building blocks of GlueX Protocol that enable efficient integration of intents, blockchains, intent originators and liquidity sources" />
</head>

# GlueX Modules

At the core of GlueX is the concept of "**GlueX Modules**", which act as the essential building blocks for integrating
various components needed to interact with decetralized financial applications. The latest version of GlueX Protocol
enables the modular integration of intents, blockchains, intent originators and liquidity sources.

The modular design enhances GlueX's ability to integrate with diverse protocols, scale efficiently, and adapt to future
developments. All this while simplifying the development process and improving performance considerably!

---

## The GlueX Workflow: From Intent to Settlement

In the GlueX ecosystem, a entity’s intent—such as executing a swap or any other financial transaction—flows seamlessly
through four core modules. Each module plays a critical role in ensuring the entire process is executed efficiently and
securely. The following section illustrates how these modules work together to fulfill the entity's request:

---

### Originator Module:

The process begins when the Originator Module receives an intent from an entity's DApp. This module abstracts the
settlement protocol by collecting all the necessary details, such as the tokens to be swapped, the source and
destination blockchains, and protocol-specific metadata. It acts as the gateway for the entity’s request into the GlueX
ecosystem, converting it into a standardized format that can be processed by the subsequent modules.

---

### Intent Module:

Once the Originator Module passes the data to the Intent Module, the data is abstracted into a standardized GlueX intent
object. This abstraction ensures that the entity’s request can be understood and processed in a unified way across all
modules, irrespective of the originating protocol. The Intent Module is responsible for ensuring that complex trade
logic, such as routing, multiple order types, and cross-chain transactions, are handled seamlessly while preserving the
entity’s original intent across all steps.

---

### Blockchain Module:

The Blockchain Module is where GlueX adapts to the specifics of different blockchain environments. It abstracts the
complexities of interacting with various blockchains, providing a unified interface for all supported networks. It
handles the complexities of each blockchain’s metadata, native tokens, operational nuances, and transaction
requirements, ensuring seamless compatibility across multiple networks.

---

### Liquidity Module:

The Liquidity Module abstracts the process of sourcing liquidity on each blockchain. It identifies and accesses the
relevant liquidity of LPs across different protocols. The module abstracts the path to liquidity by considering factors
such as liquidity pool availability, fees, and slippage, ensuring that the swap is executed efficiently.

Once the appropriate liquidity sources are identified, the process flows back through the Blockchain Module, where the
necessary blockchain details are finalized. The Intent Module ensures that the data remains consistent, and the
Originator Module completes the settlement by executing the transaction on-chain.

_Curious to learn more? Explore the details of each module in the next sections!_
