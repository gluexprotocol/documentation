---
title: Exchange Rates API
description:
  GlueX Exchange Rates API provides an easy to use and highly scalable solution for accessing onchain exchange rates
  between any two token pairs across multiple supported blockchains
keywords:
  [
    GlueX,
    GlueX APIs,
    GlueX Documentation,
    Exchange Rates API,
    Wallets,
    DeFi Applications,
    Trading Platforms,
    Blockchain Tools,
  ]
---

<head>
    <!-- Open graph -->
    <meta property="og:title" content="Exchange Rates API | GlueX Protocol" />
    <meta property="og:description" content="GlueX Exchange Rates API provides an easy to use and highly scalable solution for accessing onchain exchange rates between any two token pairs across multiple supported blockchains" />
    <!-- Twitter -->
    <meta name="twitter:title" content="Exchange Rates API | GlueX Protocol" />
    <meta name="twitter:description" content="GlueX Exchange Rates API provides an easy to use and highly scalable solution for accessing onchain exchange rates between any two token pairs across multiple supported blockchains" />
</head>

# Exchange Rates API

**Gluex Exchange Rates API** provides an easy-to-use and highly scalable solution for accessing on-chain exchange rates
between any two token pairs across multiple supported blockchains. Whether you're building a DeFi application, wallet,
trading platform, or any blockchain-powered tool, this API ensures you can retrieve real-time, accurate exchange rate
data effortlessly.

---

## Key Features

The main key characteristics of GlueX Exchange Rates API are

- Real-Time Rates.
- Extensive Multichain Support.
- Diverse DeFi Platform Integration
- Allows effective batching of upto 25 token pairs in one request.
- Average API request round trip of 500ms.
- Specialized Support for Unique Tokens.

---

## Using the API

The API doesn't require any form of authorization and can easily be accessed via
<a href="https://exchange-rates.gluex.xyz">exchange rates url</a> . However, optional API keys will give you access to
custom rate limits.&#x20;

<details>
  <summary>Rate Limit Information</summary>
  <p>If your application exceeds our default rate limits, reach out to us by filling in this form: 
  <a href="https://typeform.typeform.com/">New Platform TypeForm</a> to apply for API keys with custom rate limiting.</p>
</details>

### API Endpoints

import { SwaggerDoc } from '@site/src/components/Swagger';

<SwaggerDoc url="https://raw.githubusercontent.com/gluexprotocol/gluex-openapis/main/exchange-rates-api/openapi.json" />
