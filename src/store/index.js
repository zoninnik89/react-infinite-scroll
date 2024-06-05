import { configureStore } from "@reduxjs/toolkit";
import createPostPopupReducer from './createPopupSlice';
import postsSliceReducer from './postsSlice';

export default configureStore({
    reducer: {
        createPostPopup: createPostPopupReducer,
        posts: postsSliceReducer,
    }
})