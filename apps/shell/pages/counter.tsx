import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
// import { revalidate } from '@nextjs-mf-app/mf-revalidate';
import { CounterDisplay as CounterDisplayRemote } from '@mf-types/template/counter-display';
import { GoBack as GoBackRemote } from '@mf-types/components/go-back';

const CounterDisplayComponent = dynamic(() =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  import('template/counter-display').then((mod) => mod.CounterDisplay)
) as typeof CounterDisplayRemote;

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
      <CounterDisplayComponent counter={counter} />
      <GoBackComponent router={router} />
    </div>
  );
}

export default Counter;
