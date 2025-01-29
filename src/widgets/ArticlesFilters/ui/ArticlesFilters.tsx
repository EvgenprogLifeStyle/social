import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './ArticlesFilters.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { VStack } from '@/shared/ui/redesigned/Stack';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ArticlesFiltersProps {
    className?: string
    sort: ArticleSortField;
    order: SortOrder;
    type: ArticleType;
    search: string
    onChangeSearch: (value: string) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        className, sort, search, type, order, onChangeSort, onChangeOrder, onChangeType, onChangeSearch,
    } = props;
    const { t } = useTranslation();

    return (
        <Card
            className={classNames(s.ArticlesFilters, {}, [className])}
            padding="24"
        >
            <VStack gap="32">
                <Input
                    onChange={onChangeSearch}
                    value={search}
                    size="s"
                    placeholder={t('Поиск')}
                    addonLeft={<Icon Svg={SearchIcon} />}
                />
                <ArticleTypeTabs
                    value={type}
                    onChangeType={onChangeType}
                    // className={cls.tabs}
                />
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />

            </VStack>
        </Card>
    );
});
