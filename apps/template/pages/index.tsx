import React from 'react';
import { NextRouter, useRouter } from 'next/router';

import Home from '../components/home';

export interface HomeProps {
  router: NextRouter;
}

export const Index = () => {
  const router = useRouter();
  return <Home router={router} />;
};

export default Index;
