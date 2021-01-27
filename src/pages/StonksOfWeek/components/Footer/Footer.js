import React from 'react';

import FooterItemList from '../FooterItemList/FooterItemList';
import styles from './Footer.module.scss';

const items = [
  {
    title: 'COMMUNITY',
    items: [
      {
        title: 'Discord',
        url: '/',
      },
      {
        title: 'Telegram',
        url: '/',
      },
    ]
  },
  {
    title: 'CONTRACTS',
    items: [
      {
        title: 'DEUS',
        url: '/',
      },
      {
        title: 'DEA',
        url: '/',
      },
    ]
  },
  {
    title: 'RESOURCES',
    items: [
      {
        title: 'WIKI',
        url: '/',
      },
      {
        title: 'Github',
        url: '/',
      },
      {
        title: 'Youtube',
        url: '/',
      },
      {
        title: 'Medium',
        url: '/',
      },
      {
        title: 'Twitch',
        url: '/',
      },
    ]
  },
  {
    title: 'APP',
    items: [
      {
        title: 'SWAP',
        url: '/',
      },
      {
        title: 'STAKING',
        url: '/',
      },
      {
        title: 'VAULTS',
        url: '/',
      },
      {
        title: 'DASHBOARD',
        url: '/',
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