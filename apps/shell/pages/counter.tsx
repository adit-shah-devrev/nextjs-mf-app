import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import { revalidate } from '@nextjs-mf-app/mf-revalidate';

const CounterDisplayRemote = dynamic(() =>
  import('template/counter-display').then((mod) => mod.CounterDisplay)
);

const GoBackRemote = dynamic(() =>
  import('components/go-back').then((mod) => mod.GoBack)
);

export const getServerSideProps = async ({ req, res }) => {
  revalidate({ req, res });
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
      <CounterDisplayRemote counter={counter} />
      <GoBackRemote router={router} />
    </div>
  );
}

export default Counter;

{
  /* <div>This is Client Side Rendered Page from Shell App</div>
      <div>This is Home Page - Rendered from Shell App</div> */
}
