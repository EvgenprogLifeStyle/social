import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArtcleTextBlock } from 'entities/Article/model/types/article';
import { TextBlock } from 'shared/ui/Text/Text';
import s from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArtcleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { block, className } = props;

    const { t } = useTranslation();
    return (
        <div className={classNames(s.ArticleTextBlockComponent, {}, [className])}>
            {block.title
                && <TextBlock title={block.title} className={s.title} />}
            {block.paragraphs
                && block.paragraphs.map((text) => <TextBlock key={text} text={text} className={s.paragraphs} />)}
        </div>
    );
});
