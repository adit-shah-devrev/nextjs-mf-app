import React from 'react';
import { NextRouter } from 'next/router';
import styles from '../pages/index.module.scss';

export const Login = ({
  router,
  children,
}: {
  router: NextRouter;
  children: ({ handleLogin }: { handleLogin: () => void }) => JSX.Element;
}) => {
  const handleLogin = () => {
    router.push('/counter');
  };

  return (
    <div className={styles.login}>
      <div>This is Login Component - Rendered from Components App</div>
      <div>{children({ handleLogin })}</div>
    </div>
  );
};

export default Login;
