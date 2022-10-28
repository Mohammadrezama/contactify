import React from 'react';
import './tab.css';
import classnames from 'classnames';
export const Tab = ({ value, count, active, onClick }) => {
  return (
    <div
      className={classnames('tab', {
        'tab--active': active,
      })}
      onClick={onClick}
    >
      <span
        className={classnames('tab-value', {
          'tab-value--disabled': count === 0,
        })}
      >
        {value}
      </span>
      <span
        className={classnames('tab-count', {
          'tab-count--disabled': count === 0,
        })}
      >
        {count}
      </span>
    </div>
  );
};
