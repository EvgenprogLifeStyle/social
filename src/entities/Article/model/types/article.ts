export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT'
}

export interface ArtcleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArtcleCodeBlock extends ArtcleBlockBase {
    type: ArticleBlockType.CODE
    code: string
}

export interface ArtcleImageBlock extends ArtcleBlockBase {
    type: ArticleBlockType.IMAGE
    src: string,
    title: string
}

export interface ArtcleTextBlock extends ArtcleBlockBase {
    type: ArticleBlockType.TEXT
    paragraphs: string[]
    title?: string
}

export type ArticleBlock = ArtcleCodeBlock | ArtcleTextBlock | ArtcleImageBlock

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export interface ArticleSchema {
    id: string,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleType[],
    blocks: ArticleBlock[]
}
