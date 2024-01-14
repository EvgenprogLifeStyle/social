import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { ArticleItemSkeleton } from 'entities/Article/ui/ArticleItem/ArticleItemSkeleton';
import { PAGE_ID } from 'shared/ui/Page/Page';
import { TextBlock, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
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
        <ArticleItem
            article={article}
            isLoading={isLoading}
            view={view}
            key={article.id}
            className={s.card}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames('', {}, [className])}>
                <TextBlock text={t('Статьи не найдены')} theme={TextTheme.PRIMARY} size={TextSize.L} />
            </div>
        );
    }
    const isBig = view === ArticleView.BIG;
    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRenderer = ({
        index, isScrolling, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(index + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleItem
                    article={articles[i]}
                    isLoading={isLoading}
                    view={view}
                    key={articles[i].id}
                    className={s.card}
                    target={target}

                />,
            );
        }
        return (
            <div key={key} style={style} className={s.row}>
                {items}
            </div>

        );
    };

    return (
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                height, width, registerChild, onChildScroll, isScrolling, scrollTop,
            }) => (
                <div
                    ref={registerChild}
                    className={classNames('', {}, [className, s[view]])}
                >
                    <List
                        height={height ?? 700}
                        rowCount={rowCount}
                        rowHeight={isBig ? 700 : 330}
                        rowRenderer={rowRenderer}
                        width={width ? width - 80 : 700}
                        autoHeight
                        onScroll={onChildScroll}
                        isScrolling={isScrolling}
                        scrollTop={scrollTop}
                    />
                    {isLoading && getSkeletons(view)}
                </div>

            )}
        </WindowScroller>
    );
});
/* <div className={classNames('', {}, [className, s[view]])}>
{articles.length > 0
    ? articles.map(renderArticle)
    : null}
{isLoading && getSkeletons(view)}
</div> */
