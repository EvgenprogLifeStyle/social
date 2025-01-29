import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
export var SuspenseDecorator = function (StoryComponent) { return (_jsx(Suspense, { children: _jsx(StoryComponent, {}, void 0) }, void 0)); };
