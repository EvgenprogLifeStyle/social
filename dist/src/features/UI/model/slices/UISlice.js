import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    scroll: {},
};
export var uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        setScrollPosition: function (state, _a) {
            var payload = _a.payload;
            state.scroll[payload.path] = payload.position;
        },
    },
});
// Action creators are generated for each case reducer function
export var uiActions = uiSlice.actions;
export var uiReducer = uiSlice.reducer;
