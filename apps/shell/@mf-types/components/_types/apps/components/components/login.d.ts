/// <reference types="react" />
import { NextRouter } from 'next/router';
export interface LoginProps {
    router: NextRouter;
    children: ({ handleLogin }: {
        handleLogin: () => void;
    }) => JSX.Element;
}
export declare const Login: ({ router, children }: LoginProps) => JSX.Element;
export default Login;
