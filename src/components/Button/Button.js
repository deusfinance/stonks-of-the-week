import React from 'react';
import { Button } from 'antd';
import cx from 'classnames';

import styles from './Button.module.scss';

export default function CustomButton({ text, size, style, textStyle, handleClick, disabled }) {
  return ( 
    <Button
      onClick={() => !disabled ? handleClick() : null}
      className={
        cx(
          styles.button,
          size === 'big' ? styles.big : size === 'long' ? styles.long : styles.small,
          style,
          disabled ? styles.disabled : null
        )
      }>
      <span className={cx(styles.text, textStyle)}>{text}</span>
    </Button>
  )
}