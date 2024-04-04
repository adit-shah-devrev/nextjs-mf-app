import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
// import { revalidate } from '@nextjs-mf-app/mf-revalidate';
import { Home as HomeRemote } from '@mf-types/template/home';
import { Section } from '../types';
import { parsePageLayout } from '../parse-page-layout';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import ComponentsMap from 'template/components-map';

const HomeTemplateRemote = dynamic(() =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  import('template/home').then((mod) => mod.Home)
) as typeof HomeRemote;

// const ComponentsMap = dynamic(
//   () =>
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     //@ts-ignore
//     import('template/components-map')
// ) as Record<string, any>;

const PAGE_LAYOUT: Section = {
  styles: {
    layout: {
      type: 'flex',
      direction: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    display: {
      height: '100%',
      width: '100%',
    },
  },
  type: 'section',
  children: [
    {
      type: 'component',
      name: 'text',
      props: {
        text: 'Hello World!',
        borderWidth: '1px',
        borderColor: 'red',
        borderStyle: 'solid',
      },
      styles: {
        layout: {},
        display: {},
      },
    },
  ],
};

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
  console.info('ComponentsMap', ComponentsMap);
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    // <div className={styles.page}>
    //   <div>This is Server Side Rendered Page from {title}</div>
    //   <div>This is Index Page - Rendered from {title}</div>
    //   <HomeTemplateRemote router={router} />
    // </div>
    <div className={styles.page}>
      {parsePageLayout(PAGE_LAYOUT, ComponentsMap)}
    </div>
  );
}

export default Index;
