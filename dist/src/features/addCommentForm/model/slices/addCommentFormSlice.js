import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    text: '',
};
export var addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState: initialState,
    reducers: {
        setText: function (state, action) {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsername.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(loginByUsername.fulfilled, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(loginByUsername.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});
// Action creators are generated for each case reducer function
export var addCommentFormActions = addCommentFormSlice.actions;
export var addCommentFormReducer = addCommentFormSlice.reducer;
