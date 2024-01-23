import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { TextBlock, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { useGetArticleRecomendationsListQuery } from '../api/articleRecomendationsApi';

interface ArticleRecommendationsListProps {
    className?: string
}

export const ArticleRecomendationsList = memo(({ className }: ArticleRecommendationsListProps) => {
    const { t } = useTranslation();
    const { data: articles, isLoading, error } = useGetArticleRecomendationsListQuery(3);

    if (isLoading || error) return null;

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <TextBlock size={TextSize.L} title={t('Рекомендуем')} />
            <ArticleList
                articles={articles}
                // isLoading={fasle}
                target="_blank"
            />
        </VStack>
    );
});
