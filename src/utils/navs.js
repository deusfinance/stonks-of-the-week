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
              out: true,

          },
          {
              id: "synthetics",
              text: <span>SYNTHETICS</span>,
              path: "https://app.deus.finance/synchronizer",
              exact: true,
              out: true,
          },
          {
              id: "coinbase",
              text: "COINBASE",
              path: "https://app.deus.finance/coinbase",
              exact: true,
              out: true,

          },
          {
              id: "bakkt",
              text: "BAKKT",
              path: "https://app.deus.finance/bakkt",
              exact: true,
              out: true,

          },
          {
              id: "staking",
              text: "STAKING",
              path: "https://app.deus.finance/staking",
              exact: false,
              out: true,
          },

          {
              id: "vaults",
              text: "VAULTS",
              path: "https://app.deus.finance/vaults",
              exact: true,
              out: true,
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