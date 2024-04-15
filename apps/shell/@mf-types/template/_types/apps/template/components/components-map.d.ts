/// <reference types="react" />
declare const ComponentsMap: {
    text: {
        Component: ({ text, borderWidth, borderColor, borderStyle, childrenProps, }: {
            text: any;
            borderWidth: any;
            borderColor: any;
            borderStyle: any;
            childrenProps: any;
        }) => JSX.Element;
    };
    button: {
        Component: ({ borderWidth, borderColor, borderStyle, children, text, styles, }: {
            borderWidth: any;
            borderColor: any;
            borderStyle: any;
            children: any;
            text: any;
            styles: any;
        }) => JSX.Element;
        childrenType: string;
    };
};
export default ComponentsMap;
