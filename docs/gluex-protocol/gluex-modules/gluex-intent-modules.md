---
id: intent-module
title: GlueX Modules - Intent Module
description:
  GlueX Intent Module is a high level abstractions designed to manage and execute specific user defined intents across
  blockchains encapsulating all logic required to achieve the desired outcomes efficiently, including search space
  generation, state management and optimization
keywords: [GlueX, GlueX APIs, GlueX Modules, GlueX Intent Module]
sidebar_label: Intent Module
---

<head>
    <!-- Open graph -->
    <meta property="og:title" content="GlueX Modules - Intent Module | GlueX Protocol" />
    <meta property="og:description" content="GlueX Intent Module is a high level abstractions designed to manage and execute specific user defined intents across blockchains encapsulating all logic required to achieve the desired outcomes efficiently, including search space generation, state management and optimization" />
    <!-- Twitter -->
    <meta name="twitter:title" content="GlueX Modules - Intent Module | GlueX Protocol" />
    <meta name="twitter:description" content="GlueX Intent Module is a high level abstractions designed to manage and execute specific user defined intents across blockchains encapsulating all logic required to achieve the desired outcomes efficiently, including search space generation, state management and optimization" />
</head>

# GlueX Intent Modules

## What's a GlueX Intent Module?

A GlueX Intent Module represents a high-level abstraction designed to manage and execute specific user-defined intents
across blockchains. An intent represents a high-level goal, such as executing a token swap, placing a limit order, or
managing cross-chain transactions. This module encapsulates all logic required to achieve the desired outcomes
efficiently, including search space generation, state management, and optimization.

---

## Key Features of GlueX Intent Modules

#### Modular Design

Each intent module is self-contained and tailored for a specific type of task, such as swaps or limit orders. This
modularity ensures flexibility, ease of maintenance, and scalability for the GlueX framework.

#### Blockchain Agnosticism

Intent Modules are designed to operate seamlessly across different blockchains. They can handle both native and wrapped
tokens, allowing users to interact with multiple ecosystems without manual adjustments.

#### Optimization and Cost Efficiency

GlueX Intent Modules leverage advanced optimization algorithms to:

- Balance execution costs (e.g., gas fees) and benefits.
- Select the best execution paths based on real-time conditions, such as liquidity and token prices.

#### Dynamic State Management

The modules track and transition between various states during execution. This includes:

- Tracking token balances.
- Maintaining execution maps and search spaces.
- Managing dependencies for accurate and efficient execution.
