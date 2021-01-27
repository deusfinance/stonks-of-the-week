import React from 'react';

import { ReactComponent as DeusLogo } from 'icons/DEUS Logo V1.0.svg';
import { ReactComponent as DownIcon } from 'icons/Down_Icon.svg';
import styles from './Header.module.scss';

export default function Header({account : address}) {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <DeusLogo />
        <span className={styles.finance}>finance</span>
        {address ? (
          <div className={styles.accountInfo}>
            <div className={styles.accountInfoText}>
              {address}
            </div>
            <div className={styles.accountInfoRightText}>
              {address.slice(address.length - 2)}
            </div>
          </div>
        ) : null}
      </div>
      <div className={styles.right}>
        <div className={styles.rowItem}>
          <span className={styles.text}>LEARN</span>
          <DownIcon />
        </div>
        <div className={styles.rowItem}>
          <span className={styles.text}>APP</span>
          <DownIcon />
        </div>
      </div>
    </div>
  )
}