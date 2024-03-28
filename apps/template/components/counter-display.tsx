import React from 'react';
import styles from '../pages/index.module.scss';

export interface CounterDisplayProps {
  counter: number;
}

export const CounterDisplay = ({ counter }: CounterDisplayProps) => {
  return (
    <div className={styles.home}>
      <div>This is Counter Component - Rendered from Template App</div>
      <div>{`Count: ${counter}`}</div>
    </div>
  );
};

export default CounterDisplay;
