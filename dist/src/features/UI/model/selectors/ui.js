import { createSelector } from '@reduxjs/toolkit';
export var getUIScroll = function (state) { return state.ui.scroll; };
export var getUIScrollByPath = createSelector(getUIScroll, function (state, path) { return path; }, function (scroll, path) { return scroll[path] || 0; });
