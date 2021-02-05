import React from 'react';

import styles from './FormatVotes.module.scss';

export default function FormatVotes({short, long}) {
  return (
    <span className={styles.text}>
      (
      <span className={styles.short}>{`${short}S`}</span>
      /
      <span className={styles.long}>{`${long}L`}</span>
      )
    </span>
  )
}