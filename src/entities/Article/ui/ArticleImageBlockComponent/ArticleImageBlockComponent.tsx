import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArtcleImageBlock } from 'entities/Article/model/types/article';
import { TextAlign, TextBlock, TextSize } from 'shared/ui/Text/Text';
import s from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArtcleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { block, className } = props;
    return (
        <div className={classNames(s.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt={block.title} />
            {block.title
            && <TextBlock title={block.title} size={TextSize.M} align={TextAlign.CENTER} />}
        </div>
    );
});
