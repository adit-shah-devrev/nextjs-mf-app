/// <reference types="react" />
import { NextRouter } from 'next/router';
export interface HomeProps {
    router: NextRouter;
}
export declare const Home: ({ router }: HomeProps) => JSX.Element;
export default Home;
