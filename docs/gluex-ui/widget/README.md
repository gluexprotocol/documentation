---
title: GlueX Widget [BETA]
description:
  GlueX Widget is a set of prebuilt UI components that will help you integrate a secure and smooth swapping experience
  that can be styled to match your application design perfectly
keywords: [Swaps, Widget]
---
<head>
    <!-- Meta -->
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content="GlueX Widget is a set of prebuilt UI components that will help you integrate a secure and smooth swapping experience that can be styled to match your application design perfectly" />
    <meta name="keywords" content="GlueX Widget, Widget, Widget GlueX Protocol, Swaps, GlueX Widget, GlueX Docs, originator, Docs, Decentralized Finance, Blockchain, dApps, API suite, cross-chain, liquidity aggregation" />
    <meta name="author" content="GlueX Protocol" />
    <!-- Open Graph -->
    <meta property="og:title" content="Widget | GlueX Protocol" />
    <meta property="og:description" content="GlueX Widget is a set of prebuilt UI components that will help you integrate a secure and smooth swapping experience that can be styled to match your application design perfectly" />
    <meta property="og:image" content="https://docs.gluex.xyz/banner.jpg" />
    <meta property="og:url" content="https://docs.gluex.xyz/gluex-ui/widget/" />
    <meta property="og:type" content="website" />
    <!-- Twitter -->
    <meta name="twitter:title" content="Widget | GlueX Protocol" />
    <meta name="twitter:url" content="https://docs.gluex.xyz/gluex-ui/widget/" />
    <meta name="twitter:description" content="GlueX Widget is a set of prebuilt UI components that will help you integrate a secure and smooth swapping experience that can be styled to match your application design perfectly" />
    <meta name="twitter:image" content="https://docs.gluex.xyz/banner.jpg" />
    <meta name="twitter:card" content="https://docs.gluex.xyz/banner.jpg" />
</head>

# GlueX Widget [BETA]

GlueX Widget is a set of prebuilt UI components that will help you integrate a secure and smooth swapping experience
that can be styled to match your application design perfectly.

#### GlueX Widget features include:

- All chains and tokens that GlueX supports
- Embeddable variants: compact and wide
- Pre configured themes and lots of customization options with dark mode support to match the look and feel of your web
  app
- Wallet management UI with the option to opt out and use your own (following Wagmi Standard support)
- Complete UI translations to match your customer’s preferred language
- Compatibility tested with React, Vite, and Next.js

> Contact our [partnership team](https://discord.gg/gluex) to discover how you can partner with us and integrate GlueX into your platform.

## 📦 Install Widget

To get started, install the latest version of Widget and SDK

Using `npm`

```sh
npm install wagmi @tanstack/react-query @gluex/widget @gluex/sdk
```

Using `yarn`

```sh
yarn add wagmi @tanstack/react-query @gluex/widget @gluex/sdk
```

Using `pnpm`

```sh
pnpm add wagmi @tanstack/react-query @gluex/widget @gluex/sdk
```

### Compatibility

List of environments, libraries and frameworks the widget supports so far:

- React 18+
- Vite
- Next.js
- Remix
- Gatsby
- more support coming soon...

> Please file an issue if you have any incompatibilities

### Sample

Here is a basic example for Widget with minimal customization

```jsx
import { GlueXWidget, WidgetConfig } from '@gluex/widget';

const config = {
  apiKey: process.env.NEXT_PUBLIC_GLUEX_API_KEY, // Please reachout the partnership team for an API_KEY
  appearance: "dark",
} as Partial<WidgetConfig>

export const WidgetPage = () => {
  return (
    <GlueXWidget config={config} integrator="identifier" />
  );
};
```

### ⚙️ Configuring the Widget

The GlueX Widget supports a range of configuration options, allowing you to:

- Allow or deny specific chains or tokens
- Preselect default source and destination chains
- Choose default tokens for to send and receive
- Specify the receiving address

These options enable precise control over the widget's behavior and improve the user experience by adjusting it to
specific needs and preferences

#### Initialize form values

The GlueX Widget uses a number of form fields that are used to fetch and execute quotes. These values are `fromAmount`,
`fromChain`, `fromToken`, `toChain`, `toToken` and `toAddress`. They are most often set by using the Widget UI but they
can also be initialized and updated programmatically. By configuring these options, you can streamline the user
experience, ensuring that the widget is preloaded with the desired chains, tokens, amount and address for the swap. This
reduces the need for manual input and helps guide users through the intended flow.

> As GlueX currently supports only swaps, either one of `fromChain`, `toChain` can be set at a time

You can initialize these values by either:

- Widget config : by adding the form fields to the widget config
- URL search params : when `buildUrl` in the widget config is set to true, by adding them to the URL search params in
  the url of the page containing the widget

Example:

```jsx
import type { WidgetConfig } from '@gluex/widget';

const config: Partial<WidgetConfig> = {
  // set from chain
  fromChain: 8453, // (example: Base)
  // set send token
  fromToken: '',
  // set receive token
  toToken: '',
  // set send token amount
  fromAmount: 10,
  // set the receiver wallet address (experimental)
  toAddress: {
    address: '',
  },
};

export const WidgetPage = () => {
  return <GlueXWidget config={config} integrator="identifier" />;
};
```

### 🎨Customizing the Widget

GlueX Widget supports visual customization, allowing you to match your application's design. The widget's layout stays
consistent, but you can modify colors, fonts and styles - also disable or hide parts of the UI, and more customizations
soon...

```jsx
interface WidgetConfig {
  // set the default appearance - light, dark or auto (system)
  appearance?: Appearance;

  // disables parts of the UI
  disabledUI?: DisabledUIType[];

  // hides parts of the UI
  hiddenUI?: HiddenUIType[];

  // makes parts of the UI required
  requiredUI?: RequiredUIType[];

  // tweaks styles of the different widgets
  theme?: WidgetTheme;
}
```

#### Theme

By customizing the theme, you can ensure the Widget matches the look and feel of your application. The theme
configuration option allows you to customize various aspects of the widget's appearance, including colors, typography,
shapes and component styles.

```jsx
const widgetConfig: Partial<WidgetConfig> = {
  theme: {
    container: {
      boxShadow: '',
      borderRadius: '',
      // ... more styles
    },
    palette: {
      primary: { main: '#...' },
      secondary: { main: '#...' },
    },
    shape: {
      borderRadius: 0,
      borderRadiusSecondary: 0,
    },
    typography: {
      fontFamily: '...',
    },
  },
};
```

### 🎭 Events (Experimental)

The GlueX Widget provides a `useWidgetEvents` hook that lets you subscribe to a series of widget events and helps you
retrieve helpful information about executing quotes, and track swap progress (experimental), track selection of chains
and tokens, interactions with specific UI elements and more

> We are working on events and if you face any issues or are interested in a specific event, reach out to us via the
> [partnership team](https://discord.gg/gluex)

To minimize unnecessary re-renders and prevent potential glitches in the main Widget component, please integrate the
`useWidgetEvents` hook outside of the component where the main Widget is integrated

Example of how to subscribe to widget events:

```jsx
import type { Route } from '@gluex/sdk';
import type { RouteExecutionUpdate } from '@gluex/widget';
import { useWidgetEvents, WidgetEvent } from '@gluex/widget';
import { useEffect } from 'react';

export const WidgetEvents = () => {
  const widgetEvents = useWidgetEvents();

  useEffect(() => {
    const onRouteExecutionStarted = (route: Route) => {
      // ...
    };
    const onRouteExecutionUpdated = (update: RouteExecutionUpdate) => {
      // ...
    };
    const onRouteExecutionCompleted = (route: Route) => {
      // ...
    };
    const onRouteExecutionFailed = (update: RouteExecutionUpdate) => {
      // ...
    };

    widgetEvents.on(WidgetEvent.RouteExecutionStarted, onRouteExecutionStarted);
    widgetEvents.on(WidgetEvent.RouteExecutionUpdated, onRouteExecutionUpdated);
    widgetEvents.on(WidgetEvent.RouteExecutionCompleted, onRouteExecutionCompleted);
    widgetEvents.on(WidgetEvent.RouteExecutionFailed, onRouteExecutionFailed);

    return () => {
      widgetEvents.all.clear();
    };
  }, [widgetEvents]);

  return <></>;
};
```

### 👛 Wallet Management

The widget has a built in wallet management UI, so you can connect the wallet and use the widget as a standalone dApps.
However, when embedding the widget into the dApp, reusing the existing wallet management UI of that dApp makes the most
sense.

#### EVM wallet connection

To manage wallet connection to EVM (Ethereum Virtual Machine) chains, switching chains, etc. the widget uses the
[Wagmi](https://wagmi.sh) library internally and also provides first-class support for all Wagmi-based libraries such as
RainbowKit, Dynamic, Reown AppKit

If you already manage wallets using Wagmi or Wagmi-based library in your dApp and the Widget detects that it is wrapped
in `WagmiProvider` it will start re-using your wallet management without any additional configuration.

The example below shows how to preconfigure a basic wallet management using Wagmi:

```jsx
import { GlueXWidget } from '@gluex/widget';
import { createClient } from 'viem';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { mainnet, arbitrum, optimism, scroll } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

const wagmiConfig = createConfig({
  // Make sure to provide the full list of chains
  // you would like to support in the Widget (make sure these are supported by GlueX)
  // and keep them in sync, so all functionality
  // like switching chains can work correctly
  chains: [mainnet, base],
  connectors: [injected()],
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});

export const WidgetPage = () => {
  return (
    <WagmiProvider config={wagmiConfig} reconnectOnMount>
      <GlueXWidget ... />
    </WagmiProvider>
  );
};
```

##### Keep chains in sync

It is important to keep the Wagmi chains configuration in sync with the Widget chain list so all functionality, like
switching chains, can keep working correctly.

There are two approaches to this:

- Manually update the Widget and Wagmi chains configuration to specify all chains you would like to support in your dApp
  and the Widget
- Get all available chains from GlueX API and dynamically update Wagmi configuration

> Developers can still use `Ethers.js` or any other alternative library in their project and convert Signer/Provider
> objects to Wagmi's injected connector before wrapping the Widget with WagmiProvider
>
> Reference: [injected](https://wagmi.sh/react/api/connectors/injected)
