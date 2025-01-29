import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailContainerProps {
    className?: string
}

export const DetailContainer = memo(({ className }: DetailContainerProps) => {
    const { t } = useTranslation();

    const { id } = useParams<{ id: string }>();
    return (
        <Card max border="round" className={className} padding="24">

            <ArticleDetails id={id} />
        </Card>
    );
});
