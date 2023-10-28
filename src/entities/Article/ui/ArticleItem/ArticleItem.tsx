import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { TextBlock } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ArticleItemSkeleton } from 'entities/Article/ui/ArticleItem/ArticleItemSkeleton';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    ArtcleTextBlock, ArticleBlockType, ArticleSchema, ArticleView,
} from '../../model/types/article';
import s from './ArticleItem.module.scss';

interface ArticleItemProps {
    className?: string
    article?: ArticleSchema
    isLoading?:boolean
    view: ArticleView
}

export const ArticleItem = memo((props: ArticleItemProps) => {
    const {
        className, article, view, isLoading,
    } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const onOpenArticle = useCallback(
        // eslint-disable-next-line no-unsafe-optional-chaining
        () => navigate(RoutePath.articles_detail + article?.id),
        [article?.id, navigate],
    );
    const types = (
        <TextBlock text={article?.type.join(', ')} className={s.types} />
    );
    const views = (
        <>
            <TextBlock text={String(article?.views)} className={s.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const text = article?.blocks.find((blocks) => blocks.type === ArticleBlockType.TEXT) as ArtcleTextBlock;

        return (
            <div className={classNames('', {}, [className, s[view]])}>
                <Card className={s.card}>
                    <div className={s.header}>
                        <Avatar size={30} src={article?.user.avatar} />
                        <TextBlock text={article?.user.username} className={s.username} />
                        <TextBlock text={article?.createdAt} className={s.date} />
                    </div>
                    <TextBlock title={article?.title} className={s.title} />
                    {types}
                    <img src={article?.img} alt={article?.title} className={s.img} />
                    {
                        text
                        && (<ArticleTextBlockComponent block={text} className={s.text} />)
                    }

                    <div className={s.footer}>
                        <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
                            {t('Читать далее...')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className, s[view]])}>
            <Card className={s.card} onClick={onOpenArticle}>
                <div className={s.imageWrapper}>
                    <img src={article?.img} className={s.img} alt={article?.title} />
                    <TextBlock text={article?.createdAt} className={s.date} />
                </div>
                <div className={s.infoWrapper}>
                    {types}
                    {views}

                </div>
                <TextBlock text={article?.title} className={s.title} />
            </Card>

        </div>
    );
});
