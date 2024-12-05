import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';
import StarIcon from '../../assets/icons/star.svg';

interface StarRatingProps {
    className?: string
    onSelect?: (starsCount: number) => void
    size?: number
    selectedStars?: number
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className, onSelect,
        size = 30,
        selectedStars = 0,
    } = props;
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars ?? 0);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };
    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };
    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };
    console.log(isSelected);
    return (
        <div className={classNames(s.StarRating, {}, [className])}>
            {stars.map((e) => (
                <Icon
                    className={
                        classNames(
                            s.starIcon,
                            { [s.selected]: isSelected },
                            [currentStarsCount >= e ? s.hovered : s.normal],
                        )
                    }
                    Svg={StarIcon}
                    key={e}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(e)}
                    onClick={onClick(e)}
                />
            ))}

        </div>
    );
});
