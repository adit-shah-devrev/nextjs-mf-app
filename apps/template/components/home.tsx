import React from 'react';
import { NextRouter } from 'next/router';
import styles from '../pages/index.module.scss';
import { Login as LoginRemote } from '@mf-types/components/login';

import dynamic from 'next/dynamic';

const LoginComponentRemote = dynamic(() =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  import('components/login').then((mod) => mod.Login)
) as typeof LoginRemote;

export const Home = ({ router }: { router: NextRouter }) => {
  return (
    <div className={styles.home}>
      <div>This is Home Component - Rendered from Template App</div>
      <LoginComponentRemote router={router}>
        {({ handleLogin }) => (
          <button onClick={handleLogin}>
            {'Click me - Rendered from Template App' +
              '\n' +
              'onClick handled from Components App'}
          </button>
        )}
      </LoginComponentRemote>
    </div>
  );
};

export default Home;
