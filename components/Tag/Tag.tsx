import {JSX} from 'react';
import { TagProps } from "./Tag.props";
import styles from './Tag.module.scss';
import cn from "classnames";

export const Tag = ({size = 'sm', color = 'ghost', children, href, className, ...props}: TagProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, className, {
            [styles.sm]: size === 'sm',
            [styles.md]: size === 'md',
            [styles.ghost]: color === 'ghost',
            [styles.primary]: color === 'primary',
            [styles.green]: color === 'green',
            [styles.grey]: color === 'grey',
            [styles.red]: color === 'red'
        })} {...props}>
            {href ? <a href={href}>{children}</a> : <>children</>}
        </div>
    );
};
