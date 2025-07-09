---
title: Fees
description: Fee structure for GlueX Router API
keywords: [GlueX, GlueX APIs, Fees, Router API]
---

<head>
    <!-- Meta -->
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content="Fee structure for GlueX Router API" />
    <meta name="keywords" content="GlueX, GlueX APIs, Fees, Router API" />
    <meta name="author" content="GlueX Protocol" />
    <!-- Open Graph -->
    <meta property="og:title" content="Router API - Fees | GlueX Protocol" />
    <meta property="og:description" content="Fee structure for GlueX Router API" />
    <meta property="og:image" content="https://docs.gluex.xyz/banner.jpg" />
    <meta property="og:url" content="https://docs.gluex.xyz/gluex-apis/router-api/fees/Fees" />
    <meta property="og:type" content="website" />
    <!-- Twitter -->
    <meta name="twitter:title" content="Router API - Fees | GlueX Protocol" />
    <meta name="twitter:url" content="https://docs.gluex.xyz/gluex-apis/router-api/fees/Fees" />
    <meta name="twitter:description" content="Fee structure for GlueX Router API" />
    <meta name="twitter:image" content="https://docs.gluex.xyz/banner.jpg" />
    <meta name="twitter:card" content="https://docs.gluex.xyz/banner.jpg" />
</head>

# Fees

> The GlueX Router API is designed to provide users with the best possible routing experience, ensuring optimal swap execution at zero costs.

## Revenue for Partners

While the Router itself does not charge any fees, integrators can implement their own fees on their frontend.

### Partner Fee Model

We offer a partner fee model that allows integrators to generate revenue from swaps executed via the GlueX Router API. The implementation is straightforward and can be customized based on your needs.

### Surplus and Positive Slippage Sharing Model

In DeFi routing, surplus is the measurable value unlocked when a transaction executes at a better rate than expected or benchmarked. Different platforms define and utilize surplus in distinct ways, often depending on their routing logic and incentive model. We define surplus as the extra value captured when GlueX outperforms all other routers on the same chain at the time of the quote. When a surplus is detected, it is split among user, integrator and GlueX.

> To learn more about our revenue for partners and how to get started, please reach out to our team through our [Telegram](https://t.me/+_VmO_gIrNjxiZWE0) channel.

