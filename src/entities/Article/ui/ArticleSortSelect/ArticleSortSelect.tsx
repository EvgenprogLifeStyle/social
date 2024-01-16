import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import s from './ArticleSortSelect.module.scss';

interface ArticleSortSelectProps {
    className?: string,
    sort: ArticleSortField,
    order: SortOrder,
    onChangeOrder: (newOrder: SortOrder) => void,
    onChangeSort: (newSort: ArticleSortField) => void

}

export const ArticleSortSelect = memo((props: ArticleSortSelectProps) => {
    const {
        sort, order, onChangeSort, onChangeOrder, className,
    } = props;
    const { t } = useTranslation();

    const OrderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ], [t]);
    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('количеству просмотров'),
        },
    ], [t]);
    /*
    const changeSortHandler = useCallback((newSort:string) => {
        onChangeSort(newSort as ArticleSortField);
    }, [onChangeSort]);

    const changeOrderHandler = useCallback((newOrder:string) => {
        onChangeOrder(newOrder as SortOrder);
    }, [onChangeOrder]);
*/
    return (
        <div className={classNames(s.ArticleSortSelect, {}, [className])}>
            <Select
                label={t('Сортировать ПО:')}
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
            />

            <Select
                label={t('по up/dn:')}
                options={OrderOptions}
                value={order}
                onChange={onChangeOrder}
                className={s.order}
            />
        </div>
    );
});
