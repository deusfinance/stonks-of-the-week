import React from 'react';

import { ReactComponent as DeusLogo } from 'icons/DEUS Logo V1.0.svg';
import { ReactComponent as DownIcon } from 'icons/Down_Icon.svg';
import styles from './Header.module.scss';

export default function Header({account : address}) {
  const getAddressFormat = (address) => {
    return address.slice(0, 6) + '...' + address.slice(address.length - 4, address.length)
  }

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <DeusLogo />
        <span className={styles.finance}>finance</span>
        {address ? (
          <div className={styles.accountInfo}>
            <div className={styles.accountInfoText}>
              {getAddressFormat(address)}
            </div>
            {/* <div className={styles.accountInfoRightText}>
              {address.slice(address.length - 2)}
            </div> */}
          </div>
        ) : (
          <div className={styles.accountInfo} onClick={() => window.open('https://metamask.io/download', '_blank')}>
            <div className={styles.accountInfoText}>
              Install Metamask
            </div>
          </div>
        )}
      </div>
      <div className={styles.right}>
        {/* <div className={styles.rowItem}>
          <span className={styles.text}>LEARN</span>
          <DownIcon />
        </div>
        <div className={styles.rowItem}>
          <span className={styles.text}>APP</span>
          <DownIcon />
        </div> */}
        <div className={styles.rightNav}>
          <ul id="rightUl">
            <li className={styles.navItem}>
              <a href="https://app.deus.finance/learn">
                <div className={styles.navTitle}>
                  LEARN
                  <DownIcon className={styles.arrowNav} />
                </div>
              </a>
              <ul className={styles.subNav}>
                <li className={styles.subNavItem}><a href="https://wiki.deus.finance/"> DEUS wiki </a></li>
                <li className={styles.subNavItem}><a href="https://deus.finance/litepaper.pdf"> LITEPAPER </a></li>
              </ul>
            </li>
              <li className={styles.navItem}>
                <a href="https://app.deus.finance/">
                  <div className={styles.navTitle}>
                    APP
                    <DownIcon className={styles.arrowNav} />
                  </div>
                </a>
                <ul className={styles.subNav}>
                  <li className={styles.subNavItem}><a href="https://app.deus.finance/swap"> SWAP </a></li>
                  <li className={styles.subNavItem}><a href="https://app.deus.finance/synchronizer/"> SYNTHETICS </a></li>
                  <li className={styles.subNavItem}><a href="https://app.deus.finance/coinbase"> COINBASE </a></li>
                  <li className={styles.subNavItem}><a href="https://app.deus.finance/bakkt"> BAKKT </a></li>
                  <li className={styles.subNavItem}><a href="https://app.deus.finance/staking"> STAKING </a></li>
                  <li className={styles.subNavItem}><a href="https://app.deus.finance/vaults"> VAULTS </a></li>
                </ul>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}