import { configureStore } from "@reduxjs/toolkit";
import createPostPopupReducer from './createPopupSlice';

export default configureStore({
    reducer: {
        createPostPopup: createPostPopupReducer,
    }
})