import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

const normalArg = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Vasya' },
    },

};
export const Normal = Template.bind({});
Normal.args = { ...normalArg };

export const Loading = Template.bind({});
Loading.args = {
    ...normalArg,
    isLoading: true,
};

export const NormalRedesign = Template.bind({});
NormalRedesign.args = { ...normalArg };

NormalRedesign.decorators = [FeaturesFlagsDecorator({ isAppRedesigned: true })];
