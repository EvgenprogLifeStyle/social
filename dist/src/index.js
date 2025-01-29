import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { StoreProvider } from '@/app/providers/StoreProvider';
import App from './app/App';
import '@/app/styles/index.scss';
import './shared/config/i18n/i18n';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
var container = document.getElementById('root');
if (!container) {
    throw new Error('Контейнер root не найден. НЕ удалось вмонтировать реакт приложение');
}
var root = createRoot(container);
root.render(_jsx(BrowserRouter, { children: _jsx(StoreProvider, { children: _jsx(ErrorBoundary, { children: _jsx(ThemeProvider, { children: _jsx(App, {}, void 0) }, void 0) }, void 0) }, void 0) }, void 0));
export { Theme } from '@/shared/const/theme';
