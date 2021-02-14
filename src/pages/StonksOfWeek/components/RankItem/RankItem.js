import React from 'react';
import cx from 'classnames';

import TwoButton from 'components/TwoButton/TwoButton';
import styles from './RankItem.module.scss';
import FormatVotes from 'components/FormatVotes/FormatVotes';

export default function RankItem({ voted, search, onVote, rank, last, item }) {
  return (
    <div className={cx(styles.main, {[styles.noborder]: last})}>
      <div className={styles.left}>
        <div className={styles.rankData}>
          <div className={styles.rankText}>
            #{item?.vote?.ranking === 0 ? 'Na' : item?.vote?.ranking}
          </div>
          <div className={styles.percent}>
            {item?.vote?.percentageShare}%
          </div>
        </div>
        <div className={styles.stonkData}>
          <div className={styles.top}>
            <div className={styles.itemName}>{item?.ticker}</div>
            <div className={styles.itemInfo}>{item?.exchange}</div>
          </div>
          <div className={styles.itemDescription}>
            {item?.name}
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.voteText}>{item?.vote?.numberOfVotes} Votes <FormatVotes short={item?.vote?.votesShort} long={item?.vote?.votesLong} /></div>
        {
          item?.vote?.closed === false ? (
            <TwoButton leftClick={() => onVote(item, 'short')} rightClick={() => onVote(item, 'long')} size="small" leftText="SHORT" rightText="LONG" />
          ) : search ? (<span className={styles.alreadyConducted}>Closed</span>) : null
        }
      </div>
      <div className={styles.mobileLeft}>
        <div className={styles.rankData}>
          <div className={styles.rankText}>
            #{item?.vote?.ranking === 0 ? 'Na' : item?.vote?.ranking}
          </div>
          <div className={styles.itemName}>{item?.ticker}</div>
          <div className={styles.itemDescription}>
            {item?.name}
          </div>
        </div>
        <div className={styles.stonkData}>
          <div className={styles.percent}>
            {item?.vote?.percentageShare}%
          </div>
          <div className={styles.itemInfo}>{item?.exchange}</div>
        </div>
      </div>
      <div className={styles.mobileRight}>
        {
          item?.vote?.closed === false ? (
            <TwoButton leftClick={() => onVote(item, 'short')} rightClick={() => onVote(item, 'long')} size="small" leftText="SHORT" rightText="LONG" />
          ) : search ? (<span className={styles.alreadyConducted}>Closed</span>) : null
        }
        <div className={styles.voteText}>{item?.vote?.numberOfVotes} Votes <FormatVotes short={item?.vote?.votesShort} long={item?.vote?.votesLong} /></div>
      </div>
    </div>
  )
}