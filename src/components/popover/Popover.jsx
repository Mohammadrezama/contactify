import React from 'react';
import styles from './popover.module.css';
export const Popover = (props) => {
  const { children, show, onClose, style, withBackdrop = false } = props;

  return (
    <>
      <div
        className={`${styles.popover} ${
          !show
            ? `${styles.invisible} opacity-0`
            : `${styles.visible} opacity-100`
        } ${styles['with-transition']}`}
        style={style}
        onClick={() => {
          if (onClose) {
            onClose();
          }
        }}
        show={show}
      >
        {children}
      </div>
      {withBackdrop && (
        <div
          className={`${styles.backdrop}  ${
            !show
              ? `${styles.invisible} opacity-0`
              : `${styles.visible} opacity-20`
          } ${styles['with-transition']} `}
          onClick={onClose}
        />
      )}
    </>
  );
};
