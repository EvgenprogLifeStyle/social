import { Decorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

const RouteDecorator: Decorator = (Story) => (
    <BrowserRouter><Story /></BrowserRouter>

);

export default RouteDecorator;
