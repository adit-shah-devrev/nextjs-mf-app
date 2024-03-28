import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
// import { revalidate } from '@nextjs-mf-app/mf-revalidate';

import { GoBack as GoBackRemote } from '@mf-types/components/go-back';
import CounterDisplay from '../components/counter-display';

const GoBackComponent = dynamic(() =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  import('components/go-back').then((mod) => mod.GoBack)
) as typeof GoBackRemote;

export const getServerSideProps = async ({ req, res }) => {
  // revalidate({ req, res });
  return Promise.resolve({
    props: {
      title: 'Shell App',
    },
  });
};

export function Counter() {
  const [counter, setCounter] = useState(0);
  console.log(counter);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Hey');
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const router = useRouter();

  return (
    <div className={styles.page}>
      <div>This is Counter Page - Rendered from Shell App</div>
      <CounterDisplay counter={counter} />
      <GoBackComponent router={router} />
    </div>
  );
}

export default Counter;
