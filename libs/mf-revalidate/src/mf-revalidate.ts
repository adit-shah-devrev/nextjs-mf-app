import { revalidate as mfRevalidate } from '@module-federation/nextjs-mf/utils';

export const revalidate = async ({ req, res }: { req: any; res: any }) => {
  if (process.env.NODE_ENV === 'development' && !req.url.includes('_next')) {
    await mfRevalidate().then((shouldReload) => {
      if (shouldReload) {
        res.writeHead(302, { Location: req.url });
        res.end();
      }
    });
  } else {
    res?.on('finish', () => {
      mfRevalidate();
    });
  }
};
