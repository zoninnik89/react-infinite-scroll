import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let coursor = 0;
let limit = 5;

const fetchUrl = `https://10.59.62.240:3001/infscrolldata?coursor=${coursor}&limit=${limit}`;
const sendUrl = 'https://10.59.62.240:3001/send';

export const fetchPosts = createAsyncThunk(
    
    'posts/fetchPosts',

    async function() {
        try {
            const response = await fetch(fetchUrl);

            if (response.ok) { 
                console.log(response)
                const data = await response.json()
                return data

            } else {
                console.error(response.statusText)
            }
        } catch (error) {
        console.error(error)
        }
    }
);


const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading';
                state.error = null
        })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.posts.push(...action.payload);
        })
            .addCase(fetchPosts.rejected, (state, action) => {

        });
    },
});

export default postsSlice.reducer;