---
title: GlueX Protocol
description:
  GlueX Protocol is an abstraction framework designed to uniformly represent blockchains, intents, intent originators
  and liquidity providers for deploying higg performant, universal smart order routing algorithms
keywords: [GlueX, GlueX APIs, GlueX Documentationm, GlueX Protocol, Liquidity, Smart Order Routing]
---

<head>
    <!-- Open graph -->
    <meta property="og:title" content="GlueX Protocol | GlueX Protocol" />
    <meta property="og:description" content="GlueX Protocol is an abstraction framework designed to uniformly represent blockchains, intents, intent originators and liquidity providers for deploying higg performant, universal smart order routing algorithms" />
    <!-- Twitter -->
    <meta name="twitter:title" content="GlueX Protocol | GlueX Protocol" />
    <meta name="twitter:description" content="GlueX Protocol is an abstraction framework designed to uniformly represent blockchains, intents, intent originators and liquidity providers for deploying higg performant, universal smart order routing algorithms" />
</head>

# GlueX Protocol

GlueX Protocol is an abstraction framework designed to uniformly represent blockchains, intents, intent originators, and
liquidity providers for deploying high-performance, universal smart order routing algorithms.

---

## How GlueX Protocol Works?

At the core of GlueX is the concept of "**GlueX Modules**", which act as the essential building blocks for integrating
various components needed to interact with decetralized financial applications. These modules are continuously developed
and refined by a dedicated group of developers, known as "**gluers**," who participate in focused weekly development
sessions called "**glueing sprints**." GlueX Modules can be reused across blockchains and intent auctions. Hence, a
module only needs to be onboarded once. The process is designed to ensure adaptability and continuous improvement.

<figure>
    <img src="/docs/gluex-protocol/gluex_protocol_modules.png" alt="" />
    <figcaption>
        <p align="center">
            GlueX Protocol Modules
        </p>
    </figcaption>
</figure>

Once completed, these modules are compiled into comprehensive SDKs that power a suite of GlueX services, including
Exchange Rates, Quote, Solve, and Bridge APIs. This modular architecture allows GlueX to adapt quickly to the demands of
an evolving blockchain ecosystem while maintaining a focus on delivering reliable and efficient services.

---

## Handling Execution Requests in GlueX

Execution requests to GlueX services, such as Quote, Solve, or Bridge APIs, are processed through a competitive network
of optimizers. These optimizers leverage proprietary smart order routing algorithms, supported by the GlueX Optimize
SDK, to identify the best execution strategies.&#x20;

The GlueX ecosystem ensures fairness by providing all optimizers access to the same liquidity sources, which are
pre-integrated as GlueX Liquidity Modules. This uniformity creates a level playing field where optimizers must excel in
speed, precision, and algorithmic innovation to gain an advantage. By fostering competition among optimizers, GlueX
drives performance improvements and provides MEV protection guarantees. Users benefit from fast, accurate, and optimal
execution of their transactions, even in the context of high-throughput blockchain environments.

---

## Mitigating Maximum Extractable Value (MEV)

Maximum Extractable Value (MEV) represents the portion of a transaction’s value that external parties can exploit due to
inefficiencies in execution. GlueX Protocol addresses this issue by targeting three critical areas: liquidity access,
optimization, and execution safeguards.

GlueX mitigates MEV risks by rapidly integrating new liquidity sources. Its streamlined design ensures that every
potential liquidity source is identified and utilized promptly, reducing the chances of missing valuable opportunities.
With a robust network of optimizers, GlueX finds the most efficient execution routes, minimizing inefficiencies and
ensuring optimal use of available liquidity.&#x20;

To safeguard transactions during execution, GlueX employs advanced mechanisms such as automatically computed slippage
tolerance values. These measures protect users from issues like front-running, back-running, and sandwiching attacks
while also minimizing the risk of transaction reverts.&#x20;
