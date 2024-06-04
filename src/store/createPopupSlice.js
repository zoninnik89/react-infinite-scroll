import { createSlice } from "@reduxjs/toolkit";

const createPostPopupSlice = createSlice({
    name: 'createPostPopup',
    initialState: {
        showCreatePostPopup: 'false',
    },
    reducers: {
        displayCreatePostPopup(state, action) {
            console.log(state.showCreatePostPopup)
            state.showCreatePostPopup = 'true'
        },
        hideCreatePostPopup(state, action) {
            console.log(state.showCreatePostPopup)
            state.showCreatePostPopup = 'false'
        }
    }
})

export const {displayCreatePostPopup, hideCreatePostPopup} = createPostPopupSlice.actions;
export default createPostPopupSlice.reducer;