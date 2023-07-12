import React, { FunctionComponent, JSX } from 'react';
import { LayoutProps } from "./Layout.props";
import styles from './Layout.module.css';
import cn from 'classnames';
import { Header } from "@/layout/Header/Header";
import { Sidebar } from "@/layout/Sidebar/Sidebar";
import { Footer } from "@/layout/Footer/Footer";

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className={cn(styles.wrapper)}>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <div className={styles.body}>
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};
