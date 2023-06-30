import { PProps } from "./P.props";
import styles from './P.module.css';
import cn from "classnames";
export const P = ({size = 'sm', children, className, ...props}: PProps): JSX.Element => {
    return (<p className={cn(styles.p, className, {
        [styles.sm]: size === 'sm',
        [styles.md]: size === 'md',
        [styles.lg]: size === 'lg'
    })} {...props}>{children}</p>);
};
