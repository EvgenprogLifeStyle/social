import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleView } from 'entities/Article/model/types/article';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import s from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string
    view?:ArticleView
    onViewClick?:(view:ArticleView)=>void

}

const viewsTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView:ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames('', {}, [className])}>
            {
                viewsTypes.map((viewsTypes) => (
                    <Button
                        theme={ButtonTheme.CLEAR}
                        onClick={onClick(viewsTypes.view)}
                    >
                        <Icon
                            Svg={viewsTypes.icon}
                            className={classNames('', { [s.selected]: viewsTypes.view !== view }, [])}
                        />
                    </Button>
                ))
            }
        </div>
    );
});
