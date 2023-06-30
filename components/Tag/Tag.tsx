import { TagProps } from "./Tag.props";
import styles from './Tag.module.scss';
import cn from "classnames";

export const Tag = ({size = 'sm', color = 'ghost', children, className, ...props}: TagProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, className, {
            [styles.sm]: size === 'sm',
            [styles.md]: size === 'md',
            [styles.ghost]: color === 'ghost'
        })} {...props}>{children}</div>
    );
};
