import React from 'react';
import styles from './tab.module.css';
export const Tab = ({ value, count, active, onClick }) => {
  return (
    <button
      className={`${styles.tab} ${active ? styles['tab-active'] : ''} `}
      onClick={onClick}
      disabled={count === 0}
    >
      <span
        className={`${styles['tab-value']} ${
          count === 0 ? styles['tab-value-disabled'] : ''
        }`}
      >
        {value}
      </span>
      <span
        className={`${styles['tab-count']} ${
          count === 0 ? styles['tab-count-disabled'] : ''
        }`}
      >
        {count}
      </span>
    </button>
  );
};
