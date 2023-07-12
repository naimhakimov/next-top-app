import { JSX, useEffect, useState, KeyboardEvent } from 'react';
import styles from './Rating.module.css';
import { RatingProps } from "./Rating.props";
import StartIcon from './star.svg';
import cn from "classnames";

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number): void => {
        const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: index < currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(index + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(index + 1)}>
                            <StartIcon
                                tabIndex={isEditable ? 0 : -1}
                                onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(index + 1, e)}
                            />
                </span>
            );

        });
        setRatingArray(updatedArray);
    };

    const changeDisplay = (rating: number): void => {
        if (!isEditable) {
            return;
        }
        constructRating(rating);
    };

    const onClick = (rating: number): void => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(rating);
    };

    const handleSpace = (rating: number, event: KeyboardEvent<SVGAElement>) => {
        if (event.code != 'Space' || !setRating) {
            return;
        }
        setRating(rating);
    };

    return (
        <div {...props}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
};
