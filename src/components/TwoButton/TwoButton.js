import React from 'react';
import { Button } from 'antd';
import cx from 'classnames';

import styles from './TwoButton.module.scss';

export default function CustomButton({ leftText, rightText, size, style, textStyle, leftClick, rightClick, disabled }) {
  return (
    <div className={styles.buttons}>
      <Button
        onClick={() => !disabled ? leftClick() : null}
        className={
          cx(
            styles.button,
            size === 'big' ? styles.big : size === 'long' ? styles.long : styles.small,
            style,
            disabled ? styles.disabled : null
          )
        }>
        <span className={cx(styles.text, textStyle)}>{leftText}</span>
      </Button>
      <Button
        onClick={() => !disabled ? rightClick() : null}
        className={
          cx(
            styles.rightButton,
            size === 'big' ? styles.big : size === 'long' ? styles.long : styles.small,
            style,
            disabled ? styles.disabled : null
          )
        }>
        <span className={cx(styles.text, textStyle)}>{rightText}</span>
      </Button>
    </div>
  )
}