# Exchange Rates API

The **Gluex Exchange Rates API** provides an easy-to-use and highly scalable solution for accessing **on-chain**
exchange rates between any two token pairs across multiple supported blockchains. Whether you're building a DeFi
application, wallet, trading platform, or any blockchain-powered tool, this API ensures you can retrieve real-time,
accurate exchange rate data effortlessly.

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

<!-- <iframe
  src="https://gluexprotocol.github.io/exchange-rates-api-swagger/#/default/getChains"
  width="100%"
  height="800"
  frameborder="0"
  allowfullscreen >
</iframe> -->

<!-- <details>
  <summary>/exchange-rate</summary>
  <p><strong>Description:</strong> Gets exchange rates for token pairs on any of the supported chain.</p>
  <p><strong>Example Request:</strong> <code>POST /exchange-rate</code></p>
</details> -->

### Tutorials

We offer several guides to teach you about the most important principles of the API. They will teach you step by step
how to integrate our endpoints into your dApp:

<!-- 1. [How to request all supported chains](how-to-request-all-supported-chains.md)
2. [How to request exchange rates](how-to-request-exchange-rates.md) -->
