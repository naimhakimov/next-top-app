import { FooterProps } from "@/layout/Footer/Footer.props";
import { JSX } from "react";
import cn from "classnames";
import styles from './Footer.module.css';
import { P } from "@/components";

export const Footer = ({className}: FooterProps): JSX.Element => {
    return (
        <footer className={cn(styles.footer, className)}>
            <P size='md' className={styles.textWhite}>OwlTop © 2020 - 2021 Все права защищены</P>
            <P size='md' className={styles.textWhite}>Пользовательское соглашение</P>
            <P size='md' className={styles.textWhite}>Политика конфиденциальности</P>
        </footer>
    );
};
