import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const createPost = createAsyncThunk( 
    
    'createPostPopup/createPost',
    
    async function (data, {getState}) {
        const sendUrl = 'https://10.59.62.240:3001/send';
        console.log('start!')

        const post = JSON.stringify({
            id: data.id,
            title: data.title,
            text: data.text,
            fileName: data.fileSrc[0].name,
        })
        
        try {
            const response = await fetch(sendUrl, {
                method: 'POST',
                body: post,
                headers: {
                    'Content-type': 'application/json',
                }
            })

            if (response.ok) {
                const jsonResponse = await response.json();
            } else {
                console.error(response.statusText)
            }

        } catch (error) {
            console.log(error);
        }

        const file = data.fileSrc[0];
        const chunkSize = 1024*1024;

        if (file) {
            const totalChunks = Math.ceil(file.size/chunkSize);

            const sendChunk = async (start, end) =>{
                const blobSlice = file.slice(start, end);
                console.log(blobSlice)

                try {
                    const response = await fetch(`https://10.59.62.240:3001/file?name=${file.name}`, {
                        method: 'POST',
                        body: blobSlice,
                        headers: {
                            'Content-type': 'application/octet-stream'
                        }
                    })
        
                    if (response.ok) {
                        const jsonResponse = await response.json();
                    } else {
                        console.error(response.statusText)
                    }
        
                } catch (error) {
                    console.log(error);
                }
            }

            for(let i=0; i<totalChunks; i++) {
                    const start = i*chunkSize;
                    const end = (i + 1) * chunkSize;
                    await sendChunk(start, end);
                }
        }
        
    },
    {
        condition: ({getState}) => {

            const {createPostPopup} = getState();
            console.log(createPostPopup.status);
    
            if (createPostPopup.status === 'cancelled') {
                return false
            } else if (createPostPopup.status === 'paused') {
                while(createPostPopup.status === 'paused'){
                    continue
                }
            }
        }
    }
)

const createPostPopupSlice = createSlice({
    name: 'createPostPopup',
    initialState: {
        showCreatePostPopup: 'false',
        status: 'init',
        error: null,
    },
    reducers: {
        displayCreatePostPopup(state, action) {
            state.showCreatePostPopup = 'true';
        },
        hideCreatePostPopup(state, action) {
            state.showCreatePostPopup = 'false';
            state.status = 'init';
        },
        pauseUpload(state, action) {
            state.status = 'paused';
        },
        resumeUpload(state, action) {
            state.status = 'uploading';
        },
        cancelUpload(state, action) {
            state.status = 'cancelled';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPost.pending, (state, action) => {
                state.status = 'uploading';
                state.error = null
        })
            .addCase(createPost.fulfilled, (state, action) => {
                state.status = 'posted';

        })
            .addCase(createPost.rejected, (state, action) => {
                state.status = 'init';
                state.error = 'upload failed';
        });
    }
});

export const {displayCreatePostPopup, hideCreatePostPopup, pauseUpload, resumeUpload, cancelUpload} = createPostPopupSlice.actions;
export default createPostPopupSlice.reducer;