import React from 'react';
import cx from 'classnames';

import Button from 'components/Button/Button';
import styles from './RankItem.module.scss';

export default function RankItem({ voted, search, onVote, rank, last, item }) {
  return (
    <div className={cx(styles.main, {[styles.noborder]: last})}>
      <div className={styles.left}>
        <div className={styles.rankData}>
          <div className={styles.rankText}>
            #{item?.vote?.ranking === 0 ? '' : item?.vote?.ranking}
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
        <div className={styles.voteText}>{item?.vote?.numberOfVotes} Votes so far</div>
        {
          item?.vote?.closed === false ? (
            <Button size="small" text="VOTE" handleClick={() => onVote(item.id)} />
          ) : search ? (<span className={styles.alreadyConducted}>Closed</span>) : null
        }
      </div>
    </div>
  )
}