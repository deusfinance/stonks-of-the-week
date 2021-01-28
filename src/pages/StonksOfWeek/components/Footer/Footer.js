import React from 'react';

import FooterItemList from '../FooterItemList/FooterItemList';
import styles from './Footer.module.scss';

const items = [
  {
    title: 'COMMUNITY',
    items: [
      {
        title: 'Discord',
        url: 'https://discord.com/invite/xfeYT6acha',
      },
      {
        title: 'Telegram',
        url: 'https://t.me/deusfinance',
      },
    ]
  },
  {
    title: 'CONTRACTS',
    items: [
      {
        title: 'DEUS',
        url: 'https://etherscan.io/token/0x3b62f3820e0b035cc4ad602dece6d796bc325325',
      },
      {
        title: 'DEA',
        url: 'https://etherscan.io/token/0x80ab141f324c3d6f2b18b030f1c4e95d4d658778',
      },
    ]
  },
  {
    title: 'RESOURCES',
    items: [
      {
        title: 'WIKI',
        url: 'https://wiki.deus.finance',
      },
      {
        title: 'Github',
        url: 'https://github.com/deusfinance',
      },
      {
        title: 'Youtube',
        url: 'https://www.youtube.com/channel/UCEVRMEr1Kt-n6ycQSEYBScQ',
      },
      {
        title: 'Medium',
        url: 'https://medium.com/@deusfinance',
      },
      {
        title: 'Twitch',
        url: 'https://www.twitch.tv/deus_finance',
      },
    ]
  },
  {
    title: 'APP',
    items: [
      {
        title: 'SWAP',
        url: 'https://app.deus.finance/swap',
      },
      {
        title: 'STAKING',
        url: 'https://app.deus.finance/coinbase',
      },
      {
        title: 'VAULTS',
        url: 'https://app.deus.finance/staking',
      },
      {
        title: 'DASHBOARD',
        url: 'https://test.deus.finance/synchronizer',
      },
    ]
  }
]

export default function Footer() {
  return (
    <div className={styles.root}>
      {
        items.map(item => (
          <FooterItemList key={item.title} {...item} />
        ))
      }
    </div>
  )
}