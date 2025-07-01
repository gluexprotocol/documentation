# Yield API

| title | description | keywords |
|-------|-------------|----------|
| Yield API | GlueX Yield API provides high-performance async calculations for lending pool APY, TVL, and yield optimization across multiple blockchain networks with intelligent caching and real-time data processing | GlueX, GlueX APIs, GlueX Documentation, Yield API, APY Calculator, TVL Calculator, DeFi Yield, Lending Pools, Multi-chain, Blockchain Analytics |

Async API for calculating lending pool APY, TVL, and yield optimization across multiple blockchain networks with intelligent caching and real-time data processing.

## Key Features

- **Multi-Chain APY Calculations**: Calculate historical and diluted APY across 17+ supported blockchains
- **TVL Analytics**: Real-time Total Value Locked calculations for lending pools
- **Dual Address Support**: Query pools using either pool addresses or LP token addresses
- **Smart Token Selection**: Auto-select optimal input tokens or specify custom tokens

## Historical vs Diluted APY

The API provides two distinct APY calculation methods to meet different analytical needs:

**Historical APY** represents the pure yield rate without considering liquidity impact. This calculation provides the baseline APY that a pool has been generating based on recent activity and fee collection, making it ideal for comparing pool performance and understanding historical trends.

**Diluted APY** accounts for the real-world impact of depositing a specific amount into the pool. When you deposit a large amount, it can affect the pool's liquidity depth and change the effective yield you'll receive. Diluted APY calculations simulate this impact, giving you a more accurate prediction of actual returns.

## Token Selection

When calculating APY, the API needs to know which underlying token to use for calculations. You have two options:

**Auto-Selection**: If you don't specify an `input_token`, the API automatically selects the first available underlying token that isn't the LP token itself. This works well for most standard pools and simplifies integration.

**Custom Selection**: Specify any of the pool's underlying tokens as the `input_token` for more precise control. This is useful when you want APY calculated from a specific asset's perspective or when working with multi-asset pools.

The API validates that your chosen token is actually an underlying asset of the pool and prevents common errors like accidentally using the LP token as the input token.

## Smart Caching System

The API implements a multi-layer caching strategy to optimize performance:

- **Session Cache**: 15-minute cache for APY calculations to reduce redundant computations
- **State Cache**: 5-minute cache for blockchain state data to minimize network calls
- **Database Optimization**: Intelligent connection pooling and query optimization

This caching system delivers sub-second response times for repeated queries while ensuring data freshness for rapidly changing DeFi markets.

## API Endpoints

### POST /historical-apy
Calculate historical APY for a lending pool without considering liquidity impact.

- Supports both pool address and LP token address lookup
- Auto-selects optimal input token or accepts custom token specification
- Returns baseline APY based on recent pool activity

### POST /diluted-apy
Calculate APY considering the impact of a specific deposit amount on pool liquidity.

- All features of historical APY calculation
- Requires `input_amount` parameter for impact simulation
- Returns realistic APY expectations for actual deposits

### POST /tvl
Calculate Total Value Locked for a lending pool in USD terms.

- Supports both pool address and LP token address lookup
- Returns aggregate value of all assets in the pool

### GET /active-protocols
Retrieve list of supported protocols organized by blockchain.

- Returns comprehensive list of protocol that are available for testing
- Updates as new protocols are added
- Useful for understanding API coverage and capabilities

## Request Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `pool_address` | string | Conditional | Pool contract address (40-42 hex characters) |
| `lp_token_address` | string | Conditional | LP token contract address (alternative to pool_address) |
| `chain` | string | Required | Blockchain identifier (ethereum, base, arbitrum, etc.) |
| `input_token` | string | Optional | Underlying token address for calculations (auto-selected if not provided) |
| `input_amount` | integer | Conditional | Amount in wei for diluted APY (required for /diluted-apy) |

**Note**: Either `pool_address` or `lp_token_address` must be provided, but not both.

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `success` | boolean | Indicates if the calculation was successful |
| `apy` | number | Calculated APY as a percentage (APY endpoints only) |
| `tvl` | number | Total Value Locked in USD (TVL endpoint only) |
| `pool_address` | string | The actual pool contract address |
| `network_id` | string | Blockchain identifier used for calculation |
| `input_token` | string | Token address used for APY calculation |
| `input_amount` | string | Amount used for diluted APY (diluted endpoint only) |

## Supported Blockchains

The API supports yield calculations across 17+ major blockchain networks:

* **Ethereum**
* **Base**
* **Arbitrum**
* **BNB Chain**
* **Avalanche**
* **Polygon**
* **Optimism**
* **Gnosis**
* **Mantle**
* **Linea**
* **Scroll**
* **Taiko**
* **Blast**
* **Sonic**
* **Berachain**
* **Unichain**
* **HyperEVM**

## Health & Monitoring

### GET /health-check
Comprehensive system health validation including:
- Database connectivity verification
- Service initialization status
- System resource monitoring (CPU, memory)
- Error rate validation

### GET /metrics
Detailed performance metrics including:
- Request/response statistics
- Cache hit rates and performance
- Average response times
- Error rates and classifications

### GET /system-metrics
Real-time system performance data:
- CPU and memory utilization
- Disk usage and I/O metrics
- Active task counts
- Service uptime tracking

## Quick Start

### Production Endpoint
```
https://yield-api.gluex.xyz
```

### Example Requests

#### Historical APY Calculation
```bash
curl -X POST "https://yield-api.gluex.xyz/historical-apy" \
  -H "Content-Type: application/json" \
  -d '{
    "lp_token_address": "0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc",
    "chain": "ethereum"
  }'
```

#### Diluted APY with Amount
```bash
curl -X POST "https://yield-api.gluex.xyz/diluted-apy" \
  -H "Content-Type: application/json" \
  -d '{
    "lp_token_address": "0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc",
    "chain": "ethereum",
    "input_amount": 1000000000000000000
  }'
```

#### TVL Calculation
```bash
curl -X POST "https://yield-api.gluex.xyz/tvl" \
  -H "Content-Type: application/json" \
  -d '{
    "pool_address": "0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc",
    "chain": "ethereum"
  }'
```

### Example Response
```json
{
  "success": true,
  "historic_yield": {
    "apy": 5.162025157449772,
    "pool_address": "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc",
    "network_id": "ethereum",
    "input_token": "0xa0b86a33e6180d93286370ac8d51a738ba4a6cc1"
  }
}
```

**Production Documentation**: https://yield-api.gluex.xyz/docs

## License

This project is proprietary software developed by GlueX Protocol.

## Support

**Get all the support you need:** [GlueX Telegram Community](https://t.me/gluexprotocol)