import { NextRouter } from 'next/router';
import React from 'react';
import styles from '../pages/index.module.scss';

export const GoBack = ({ router }: { router: NextRouter }) => {
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className={styles.login}>
      <div>This is Go Back Component - Rendered from Components App</div>
      <button onClick={handleGoBack}>
        {'Go Back - Rendered from Components App' +
          '\n' +
          'onClick handled from Components App'}
      </button>
    </div>
  );
};
