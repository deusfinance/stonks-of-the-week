import React from 'react';
import { Anchor } from 'antd';

import styles from './FooterItemList.module.scss';
const { Link } = Anchor;

export default function FooterItemList({ title, items }) {
  return (
    <div className={styles.main}>
      <div className={styles.title}>{title}</div>
      <div className={styles.items}>
        <Anchor>
          {
            items.map(item => (
              <Link key={item.title} className={styles.item} href={item.url} title={item.title} />
            ))
          }
        </Anchor>
      </div>
    </div>
  )
}