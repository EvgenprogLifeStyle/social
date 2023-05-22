import { Decorator } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    // <div className={`app ${theme}`}>
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            {/* <Story /> */}
            {Story()}
        </div>
    </ThemeProvider>
);

export default ThemeDecorator;
