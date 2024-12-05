import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationButton } from './NotificationButton';

export default {
<<<<<<< HEAD
    title: 'features/Notification/NotificationButton',
=======
    title: 'shared/NotificationButton',
>>>>>>> origin/master
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
