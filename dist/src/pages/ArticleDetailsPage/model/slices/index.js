import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsPageRecommendationsReducer, } from './articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
export var articleDetailsPageReducer = combineReducers({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});
