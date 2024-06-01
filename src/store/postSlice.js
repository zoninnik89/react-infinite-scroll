import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        reducers: {
            createPost(state, action) {
                state.posts.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    text: action.payload.title,
                    imgScr: action.payload.imgScr,
                    likes: 0
                })
            },
            removePost(state, action) {},
            editPost(state, action) {}
        }
    }
})

export const {} = postSlice.actions