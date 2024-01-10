import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { ArticleItemSkeleton } from 'entities/Article/ui/ArticleItem/ArticleItemSkeleton';
import { Page } from 'shared/ui/Page/Page';
import { TextBlock, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import s from './ArticleList.module.scss';
import { ArticleSchema, ArticleView } from '../../model/types/article';

interface ArticleListProps {
    className?: string
    articles: ArticleSchema[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticleItemSkeleton key={index} className={s.card} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const { t } = useTranslation();
    const {
        className, articles, isLoading, view = ArticleView.SMALL, target,
    } = props;
    const renderArticle = (article: ArticleSchema) => (
        <ArticleItem article={article} isLoading={isLoading} view={view} key={article.id} className={s.card} target={target} />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames('', {}, [className])}>
                <TextBlock text={t('Статьи не найдены')} theme={TextTheme.PRIMARY} size={TextSize.L} />
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className, s[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
