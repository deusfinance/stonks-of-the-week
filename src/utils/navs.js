import React from 'react';

const navs = [
  {
      id: "app",
      text: "APP",
      path: "/",
      exact: true,
      children: [
          {
              id: "swap",
              text: "SWAP",
              path: "https://app.deus.finance/swap",
              exact: true,

          },
          {
              id: "synthetics",
              text: <span>SYNTHETICS</span>,
              path: "https://app.deus.finance/synchronizer",
              exact: true,
          },
          {
              id: "coinbase",
              text: "COINBASE",
              path: "https://app.deus.finance/coinbase",
              exact: true,

          },
          {
              id: "bakkt",
              text: "BAKKT",
              path: "https://app.deus.finance/bakkt",
              exact: true,

          },
          {
              id: "staking",
              text: "STAKING",
              path: "https://app.deus.finance/staking",
              exact: false,
          },

          {
              id: "vaults",
              text: "VAULTS",
              path: "https://app.deus.finance/vaults",
              exact: true,
          },
      ]
  },

  {
      id: "learn",
      text: "LEARN",
      path: "/",
      exact: true,
      children: [
          {
              id: "wiki",
              text: "DEUS wiki",
              path: "https://wiki.deus.finance",
              out: true,
              exact: true,

          },
          {
              id: "litepaper",
              text: "LITEPAPER",
              path: "https://deus.finance/litepaper.pdf",
              out: true,
              exact: true,

          },
      ]
  },
]

export default navs;