import React from 'react';
import styles from './close.module.css';
export const Close = (props) => {
  const { onClick } = props;
  return <div className={styles.close} onClick={onClick} />;
};
