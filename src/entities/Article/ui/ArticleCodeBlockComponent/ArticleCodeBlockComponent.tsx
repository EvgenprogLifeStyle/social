import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArtcleCodeBlock } from 'entities/Article/model/types/article';
import { Code } from 'shared/ui/Code/Code';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block:ArtcleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;
    return (
        <div>
            <Code data={block.code} />
        </div>
    );
});
