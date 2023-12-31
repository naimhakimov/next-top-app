import {JSX} from 'react';
import {ButtonProps} from "./Button.props";
import styles from './Button.module.css';
import ArrowIcon from '../../public/arrow.svg';
import cn from 'classnames';

export const Button = ({children, appearance, arrow = '', className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost'
        })}
                {...props}
        >
            {children}
            {arrow && <span className={cn(styles.arrow, {
                [styles.down]: arrow === 'down',
                [styles.right]: arrow === 'right'
            })}><ArrowIcon /></span>}
        </button>
    );
};
