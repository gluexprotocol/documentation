# GlueX Liquidity Modules

## What's a GlueX Liquidity Module?

A GlueX Liquidity Module is an integral component of the GlueX SDK. Each module is a Python-based abstraction of a specific DeFi protocol's liquidity functionality. These modules enable seamless interaction with various decentralized finance (DeFi) protocols by unifying their distinct architectures into a standardized framework.

These modules handle operations such as swapping tokens, lending, borrowing, staking, and yield optimization. By abstracting protocol complexities, GlueX ensures efficient aggregation of liquidity across multiple protocols, optimizing trades and maximizing returns for users.

### General Description of GlueX Liquidity Modules

- Protocol Abstraction: Each module serves as an interface to a specific protocol, encapsulating its functionality within a Python codebase.
- Unified Framework: The modules standardize interactions, allowing GlueX to perform actions such as token swaps, lending, and staking in a unified manner, regardless of the underlying protocol.
- Efficiency and Scalability: By consolidating multiple protocols into a single framework, GlueX Liquidity Modules ensure high performance and scalability, even as more protocols are integrated.
- Extensibility: The modular architecture allows easy addition of new protocols, enabling GlueX to adapt quickly to evolving DeFi ecosystems.

### Subtypes of GlueX Liquidity Modules

#### Swapping Modules
- Description: These modules handle token exchanges using protocols that provide Automated Market Makers (AMMs).
- Example:
  - Uniswap v2: Facilitates direct token-to-token swaps with constant product formula.

#### Lending Modules
- Description: These modules interact with protocols enabling lending and borrowing of assets.
- Example:
  - Aave v3: Supports lending and borrowing, with features like variable interest rates and risk-adjusted pools.

#### Staking Modules
- Description: These modules connect to protocols offering staking services, locking tokens to secure networks or earn rewards.
- Example:
  - Lido Finance: Provides staking derivatives like stETH (staked ETH).

#### Yield Optimization Modules
- Description: These modules work with protocols that maximize returns by automatically reallocating funds across various strategies.
- Example:
  - Yearn Finance: Aggregates yields from lending protocols and optimizes returns.

### Integrating a liquidity module to GlueX Protocol

#### Types of AMM Liquidity Modules

| Type           | Examples                    | Factory              | Quoter              |
|----------------|-----------------------------|----------------------|---------------------|
| COMPLETE_AMM   | UniswapV3, BalancerV2       | Has factory contract | Has quoter contract |
| PARTIAL_AMM    | AaveV3, Sparklend           | Has factory contract | No quoter contract  |
| MINIMAL_AMM    | MakerPSM, Lido_wsteth_steth | No factory contract  | No quoter contract  |

#### Types of MM Liquidity Modules

| Type       | Examples                                        | Order Type          |
|------------|------------------------------------------------|---------------------|
| MM_PF_LOB  | 0x limit order book, HashFlow API              | Partial-Fillable Orders |
| MM_FOK     | Bebop API, Native API, HashFlow API, other MM APIs | Fill-or-Kill orders     |

#### Classification by Number of Liquidity Pools

| Classification     | Examples                                | Indexing      | Factory              | Number of Pools |
|--------------------|-----------------------------------------|---------------|----------------------|-----------------|
| Multi-pool Modules | UniswapV3, BalancerV2, AaveV2          | Required      | Has a factory contract | Multiple        |
| Single-pool Modules| MakerPSM, Lido_steth_wsteth            | Not required  | No factory contract   | One             |

#### Detailed Liquidity Module Types

##### Complete Liquidity Modules

Complete Liquidity Modules follow all best practices of a well-defined liquidity module:

- The protocol providing the module hosts a liquidity library.
- The protocol deployed a quoter contract to assist GlueX with testing.
- The protocol released the liquidity behind an immutable factory contract.

Benefits:

- End-to-end testing is automated.
- Fastest onboarding process due to adherence to best practices.

##### Partial Liquidity Modules

Partial Liquidity Modules adhere to only a subset of best practices:

- The protocol does not host a liquidity library, making pool indexing more complex.
- Indexing is achieved via RPC calls to smart contracts, often requiring custom implementations.
- Automated end-to-end testing is possible with well-specified GluexQL queries.

Challenges:

- Onboarding can be slower due to the need for query review and approval.

##### Minimal Liquidity Modules

Minimal Liquidity Modules deviate significantly from best practices:

- The protocol does not host a liquidity library or support RPC-based indexing, making the module non-indexable.
- End-to-end testing is not possible due to lack of indexability.
- Requires extensive manual review and expert evaluation for onboarding.

Challenges:

- Slowest onboarding process due to high dependency on manual validation.

#### Integration Requirements

All liquidity module integrations must satisfy the following:

1. Testing Coverage: Achieve at least 95% coverage in the end-to-end testing framework.
2. Guardian Approval: Obtain approval from at least three “GlueX Guardians.”

#### End-to-End Testing Framework
The testing framework is designed to help GlueX and liquidity module integrators streamline the integration process. However, approval by at least three GlueX Guardians is mandatory. The review process focuses on the following qualitative aspects:

Quoting Contract Verification
- Is the quoting contract code verified in the block explorer?
- Is the quoting contract immutable?

GlueX Coding Standards Compliance
- Is the liquidity module written according to the GlueX coding standards?

Reputation of the Protocol Team
- Is the protocol behind the liquidity module developed by a highly reputable team/organization?

Smart Contract Verification
- Are the smart contracts verified on the block explorer?
- Is the source code of the smart contracts available?

Smart Contract Immutability
- Are the smart contracts immutable, or are they behind a proxy contract?

Factory Contract Characteristics
- Is the factory contract immutable?
- Is the factory contract a proxy contract?