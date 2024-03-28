import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
// import { revalidate } from '@nextjs-mf-app/mf-revalidate';
import { Home as HomeRemote } from '@mf-types/template/home';

const HomeTemplateRemote = dynamic(() =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  import('template/home').then((mod) => mod.Home)
) as typeof HomeRemote;

export const getServerSideProps = async ({ req, res }) => {
  // revalidate({ req, res });
  return Promise.resolve({
    props: {
      title: 'Shell App',
    },
  });
};

export function Index({ title }) {
  const router = useRouter();
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <div>This is Server Side Rendered Page from {title}</div>
      <div>This is Index Page - Rendered from {title}</div>
      <HomeTemplateRemote router={router} />
    </div>
  );
}

export default Index;
