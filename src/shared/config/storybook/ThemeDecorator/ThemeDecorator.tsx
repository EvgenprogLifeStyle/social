import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    // <div className={`app ${theme}`}>
    <div className={`app ${theme}`}>
        {/* <Story /> */}
        {Story()}
    </div>
);

export default ThemeDecorator;
