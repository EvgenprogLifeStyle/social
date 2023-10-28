import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleItemSkeleton } from 'entities/Article/ui/ArticleItem/ArticleItemSkeleton';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import s from './ArticleList.module.scss';
import { ArticleSchema, ArticleView } from '../../model/types/article';

interface ArticleListProps {
    className?: string
    articles: ArticleSchema[]
    isLoading?: boolean
    view?: ArticleView
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticleItemSkeleton key={index} className={s.card} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className, articles, isLoading, view = ArticleView.SMALL,
    } = props;
    const renderArticle = (article: ArticleSchema) => (
        <ArticleItem article={article} isLoading={isLoading} view={view} key={article.id} className={s.card} />
    );

    return (
        <div className={classNames('', {}, [className, s[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
