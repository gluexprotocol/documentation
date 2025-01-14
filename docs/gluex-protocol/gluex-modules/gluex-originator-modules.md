# GlueX Originator Modules

### What's a GlueX Originator Module?

GlueX Originator Modules are specialized components within the GlueX Protocol designed to seamlessly integrate with
settlement protocols to fetch and manage orders. They serve as a critical link between decentralized financial
applications and the GlueX ecosystem, fetching and standardizing orders from various settlement protocols. This enables
a unified, protocol-agnostic approach to order processing within GlueX.

The GlueX Originator Module maintains metadata related to settlement protocols, manages inventories needed for
settlements, and stores settlement-specific information essential for executing swaps on-chain.

---

### Originator Modules in the GlueX-modules ecosystem:

<div align="center">
   <figure>
      <img src="/docs/gluex-protocol/originator_module_in_gluex.png" alt="Originator Modules in the GlueX ecosystem" />
      <figcaption>
         <p align="center">
            Originator Modules in the GlueX ecosystem
         </p>
      </figcaption>
   </figure>
</div>

1. **Order Collection**: Originator Modules fetch orders from settlement protocols like UniswapX and CowSwap through
   their APIs, providing GlueX with real-time liquidity and trade opportunities.
2. **Intent Abstraction**: Retrieved orders are converted into standardized GlueX intent objects, enabling uniform trade
   handling across different protocols.
3. **Blockchain Metadata Retrieval**: The Blockchain Module gathers required blockchain details, ensuring smooth
   execution, especially for cross-chain operations.
4. **Execution Map Generation**: GlueX uses liquidity modules to calculate optimal execution paths, minimizing costs and
   maximizing efficiency.
5. **Settlement Object Creation**: The execution map and order details are used to create settlement objects for
   on-chain execution.
6. **On-Chain Execution**: Settlement objects are executed on-chain, completing the transaction securely and
   efficiently.

### Subtypes

1. **Bridge Intent Module:**
   - Facilitates cross-chain transfers by setting up interactions between different blockchain networks.
   - Handles validations, fee estimations, and execution paths for assets moving between chains.
2. **Solo-Chain Intent Module:**
   - Manages interactions limited to a single blockchain.
   - Simplifies execution and state management for native transactions, token swaps, or other on-chain intents.

---

### Integrating an originator module to GlueX Protocol

Integrating a settlement protocol with GlueX only requires you to furnish a few services and interfaces that GlueX can
use. All other aspects will be handled by GlueX.

<div align="center">
   <figure>
      <img src="/docs/gluex-protocol/originator_module_integration.png" alt="Originator Module Integration" />
      <figcaption></figcaption>
   </figure>
</div>

We require the following information from the settlement protocol:

1. **API for Order Retrieval**:
   - The protocol must expose a robust API that allows GlueX to fetch active orders in real time. This API should
     provide comprehensive details about each order, including tokens involved, amounts, deadlines, and any unique order
     parameters.
   - The API should support high availability and efficient querying to handle the potential volume and frequency of
     requests made by GlueX.
2. **Protocol Metadata**:
   - Each order fetched through the API should include all relevant metadata necessary for execution. This includes
     blacklisted tokens/pools, fee structures, slippage tolerances, expiration times, security deposits and any cosigner
     conditions.
3. **Contract Details**:
   - The protocol must provide comprehensive details about the on-chain contracts used for executing settlements. This
     includes:
     - Settlement Contract: For solo-chain intents, the protocol must specify the settlement contract address and
       interface, which handles direct on-chain swaps or transfers within a single blockchain.
     - Escrow Contracts (Optional for Bridge Intents): For cross-chain operations, the protocol should detail escrow
       contracts used to lock funds securely until conditions for release are met. These escrow contracts must handle
       deposit and withdrawal actions in a secure, atomic manner to facilitate cross-chain settlements.
   - The protocol should ensure these contracts are well-documented, including their ABI and any nuances involved in
     interacting with them, to allow GlueX seamless integration and interaction.

The requirements below are optional, but they would enable a smoother integration:

4. **Security and Solvability Measures**:
   - The protocol must implement mechanisms for solvability checks, ensuring that orders can be fulfilled without risk
     of failure. This may involve exposing services that validate liquidity availability or support pre-execution
     checks.
5. **Rate and Pricing Information**:
   - If the settlement protocol provides its own pricing or exchange rate service, particularly if your settlement
     protocol is a bridge-intent protocol, it should make these rates available for GlueX to fetch and use in its
     decision-making processes. Accurate and timely rate information ensures that orders are priced correctly and
     executed efficiently.
6. **Cross-Chain Intents/ Bridge support (if applicable)**:
   - For protocols operating on multiple chains, we will appreciate documentation on how cross-chain transactions are
     handled, including any relayer services or secret hashing mechanisms used for secure fund transfers.
   - The protocol should define processes for unlocking assets and managing cross-chain liquidity securely.

If your protocol uses different mechanisms, we can still integrate it with some adjustments of course :)
