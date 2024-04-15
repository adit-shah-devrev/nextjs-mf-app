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
      alignItems: 'flex-start',
    },
    display: {
      height: '100%',
      width: '100%',
      padding: '50px',
    },
  },
  type: 'section',
  children: [
    {
      type: 'component',
      name: 'text',
      props: {
        text: 'Lord Ayush',
        borderWidth: '1px',
        borderColor: 'red',
        borderStyle: 'solid',
      },
      styles: {
        layout: {},
        display: {},
      },
    },
    {
      type: 'component',
      name: 'button',
      props: {
        borderWidth: '1px',
        borderColor: 'blue',
        borderStyle: 'solid',
        text: 'Button text from top section',
      },
      styles: {
        layout: {
          type: 'flex',
          direction: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        display: {},
      },
      children: [
        {
          type: 'component',
          name: 'text',
          props: {
            text: 'Children 2 from button component',
            borderWidth: '1px',
            borderColor: 'green',
            borderStyle: 'solid',
          },
          styles: {
            layout: {},
            display: {},
          },
        },
        {
          type: 'section',
          styles: {
            layout: {
              type: 'flex',
              direction: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            },
            display: {},
          },
          children: [
            {
              type: 'component',
              name: 'text',
              props: {
                text: 'Children 3 from section inside button component',
                borderWidth: '1px',
                borderColor: 'yellow',
                borderStyle: 'solid',
              },
              styles: {
                layout: {},
                display: {},
              },
            },
            {
              type: 'component',
              name: 'text',
              props: {
                text: 'Children 4 from section inside button component',
                borderWidth: '1px',
                borderColor: 'black',
                borderStyle: 'solid',
              },
              styles: {
                layout: {},
                display: {},
              },
            },
          ],
        },
      ],
    },
    // {
    //   type: 'component',
    //   name: 'directories',
    //   props: {},
    //   styles: {
    //     layout: {
    //       type: 'flex',
    //       direction: 'row',
    //       justifyContent: 'flex-start',
    //       alignItems: 'flex-start',
    //     },
    //     display: {
    //       padding: '20px',
    //     },
    //   },
    //   children: [
    //     {
    //       type: 'component',
    //       name: 'directory',
    //       props: {
    //         borderWidth: '1px',
    //         borderColor: 'red',
    //         borderStyle: 'solid',
    //       },
    //       styles: {
    //         layout: {},
    //         display: {},
    //       },
    //       children: [
    //         {
    //           type: 'component',
    //           name: 'text',
    //           props: {
    //             text: 'Directory 1',
    //             borderWidth: '1px',
    //             borderColor: 'green',
    //             borderStyle: 'solid',
    //           },
    //           styles: {
    //             layout: {},
    //             display: {},
    //           },
    //         },
    //       ],
    //     },
    //   ],
    // },
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
