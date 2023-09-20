import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch/UseAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';
import { TextAlign, TextBlock, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';

import EyrIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailSlice';
import s from './ArticleDetails.module.scss';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';

interface ArticleDetailsProps {
    className?: string
    id?: string
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};
export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback(
        (block: ArticleBlock) => {
            switch (block.type) {
            case ArticleBlockType.TEXT:
                return <ArticleTextBlockComponent key={block.id} block={block} className={s.block} />;
            case ArticleBlockType.IMAGE:
                return <ArticleImageBlockComponent key={block.id} block={block} className={s.block} />;
            case ArticleBlockType.CODE:
                return <ArticleCodeBlockComponent key={block.id} block={block} className={s.block} />;
            default:
                return null;
            }
        },
        [],
    );

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={s.avatar} width={200} height={200} border="50%" />
                <Skeleton className={s.title} width={300} height={32} />
                <Skeleton className={s.skeleton} width={600} height={24} />
                <Skeleton className={s.skeleton} width="100%" height={200} />
                <Skeleton className={s.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <TextBlock align={TextAlign.CENTER} title={t('Произошла ошибка при загрузке статьи.')} />
        );
    } else {
        content = (
            <>
                <div className={s.articleWrapper}>
                    <Avatar src={article?.img} size={200} className={s.avatar} />
                </div>
                <TextBlock className={s.title} title={article?.title} text={article?.subtitle} size={TextSize.L} />
                <div className={s.articleInfo}>
                    <Icon Svg={EyrIcon} className={s.icon} />
                    <TextBlock text={String(article?.views)} />
                </div>
                <div className={s.articleInfo}>
                    <Icon Svg={CalendarIcon} className={s.icon} />
                    <TextBlock text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(s.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
