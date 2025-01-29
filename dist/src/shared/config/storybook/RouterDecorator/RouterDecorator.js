import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter } from 'react-router-dom';
export var RouterDecorator = function (StoryComponent) { return (_jsx(BrowserRouter, { children: _jsx(StoryComponent, {}, void 0) }, void 0)); };
