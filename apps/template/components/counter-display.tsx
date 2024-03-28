import React from 'react';
import styles from '../pages/index.module.scss';

export const CounterDisplay = ({ counter }: { counter: number }) => {
  return (
    <div className={styles.home}>
      <div>This is Counter Component - Rendered from Template App</div>
      <div>{`Count: ${counter}`}</div>
    </div>
  );
};

export default CounterDisplay;
