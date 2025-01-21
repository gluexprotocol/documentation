# GlueX Router API Reference
This section contains examples of request body and responses for the available API endpoints. Each endpoint is explained with its purpose, expected input, and output format.

## **1. /liquidity**
**Method:** `GET`

**Description:** Returns the available chains and liquidity modules supported by GlueX Router.

**Response Example:**
```json
{
  "chains": [
    {"chainID": "base", "networkID": 8453},
    {"chainID": "ethereum", "networkID": 1}
  ],
  "liquidity_modules": {
    "base": ["uniswap_v2", "morpho", "balancer_v2_composable_stable_v5"],
    "ethereum": ["curve_main_stable_swap_plain", "aave_v3", "sushiswap"]
  }
}
```

## **2. /create**
**Method:** `POST`

**Description:** Creates an API key for the partner to use `/price` and `/quote` endpoints.

**Request Headers:**
- `x-api-key: {admin_api_key}`

**Request Body:**
```json
{
  "partnerName": "GlueX",
  "partnerAddress": "0x174F75176b73124627116653085Ce9585E261388",
  "partnerFee": 0
}
```

**Response Example:**
```json
{
  "statusCode": 200,
  "body": {
    "message": "API key created successfully.",
    "uniquePID": "38fd6b234ce00707407f03d3b7466d9bf758b769c433cfe3cd4154c63245a824",
    "apikey": "XyurkjAblAknbQKxE8iLuBjURWjb2p"
  }
}
```

## **3. /v1/price**
**Method:** `POST`

**Headers:**
- `x-api-key: {your_api_key}`

**Description:** Returns the swap price without calldata.

**Request Payload Example:**
```json
{
  "inputToken": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  "outputToken": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  "inputAmount": 20000000000,
  "userAddress": "0x174F75176b73124627116653085Ce9585E261388",
  "outputReceiver": "0x174F75176b73124627116653085Ce9585E261388",
  "chainID": "ethereum",
  "uniquePID": "38fd6b234ce00707407f03d3b7466d9bf758b769c433cfe3cd4154c63245a824"
}
```

**Response Example:**
```json
{
  "statusCode": 200,
  "result": {
    "inputToken": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    "outputToken": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    "feeToken": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    "outputReceiver": "0x174F75176b73124627116653085Ce9585E261388",
    "inputAmount": 20000000000,
    "outputAmount": 6121830800259800326,
    "partnerFee": 0,
    "routingFee": 612183080026374,
    "effectiveOutputAmount": 6121218617179773952,
    "minOutputAmount": 6118158007871184896,
    "liquidityModules": [
      "uniswap_v3"
    ]
  }
}
```

## **4. /v1/quote**
**Method:** `POST`

**Headers:**
- `x-api-key: {your_api_key}`

**Description:** Returns the calldata for the swap, which can be used on the router contract to process the swap on-chain.

**Request Payload Example:**
```json
{
  "inputToken": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  "outputToken": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  "inputAmount": 20000000000,
  "userAddress": "0x174F75176b73124627116653085Ce9585E261388",
  "outputReceiver": "0x174F75176b73124627116653085Ce9585E261388",
  "chainID": "ethereum",
  "uniquePID": "38fd6b234ce00707407f03d3b7466d9bf758b769c433cfe3cd4154c63245a824",
  "isPermit2": false
}
```

**Response Example:**
```json
{
  "statusCode": 200,
  "result": {
    "inputToken": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    "outputToken": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    "feeToken": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    "outputReceiver": "0x174F75176b73124627116653085Ce9585E261388",
    "inputAmount": 20000000000,
    "outputAmount": 6119854428544000000,
    "partnerFee": 0,
    "routingFee": 611985442853888,
    "effectiveOutputAmount": 6119242443101146112,
    "minOutputAmount": 6116182821879596032,
    "liquidityModules": [
      "fluid_dex"
    ],
    "router": "0x8a37EeC92DbBaDbA3C44ea9D94d1569A2bd55B80",
    "calldata": "0xb8039e98..."
  }
}
```