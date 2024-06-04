import React, {useState} from 'react';
import './CreatePostPopupStyles.css'; 
import ReactDOM from 'react-dom';
import { SubmitHandler, useForm } from 'react-hook-form'; 
import { useDispatch } from 'react-redux';
import { hideCreatePostPopup } from '../../store/createPopupSlice.js'

export default function CreatePostPopup() {

    const [isSubmit, setSubmit] = useState('false');
    const { register, handleSubmit } = useForm();
    
    const dispatch = useDispatch();
    const hidePopup = () => dispatch(hideCreatePostPopup());

    function handleClose() {
        hidePopup();
        setSubmit('false');
        return
    }

    const url = 'https://10.59.62.240:3001/send';

    async function onSubmit (data) {

        const post = JSON.stringify({
            id: data.id,
            title: data.title,
            text: data.text,
            fileName: data.fileSrc[0].name,
        })
        
        try {
            const response = await fetch(url, {
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

        setSubmit('true');
    }


    if (isSubmit == 'false') {
        return ReactDOM.createPortal(
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="body">
                        <h2>Popup Form</h2> 
                        <form className="form-container" onSubmit={handleSubmit(onSubmit)}> 
                            <label className="form-label" htmlFor="id"> 
                                Post id: 
                            </label> 
                            <input {...register('id')} className="form-input" type="text" 
                                placeholder="Enter Post ID" 
                                id="id" required /> 
                            <label className="form-label" htmlFor="title">
                                Title:
                            </label> 
                            <input {...register('title')} 
                                className="form-input"
                                type="text"
                                placeholder="Enter Your Title"
                                id="title" 
                                required /> 
                            <label className="form-label" htmlFor="text">
                                Text:
                            </label> 
                            <input {...register('text')}  
                                className="form-input"
                                type="text"
                                placeholder="Enter Your Text"
                                id="text" 
                                required /> 
                            <label className="form-label" htmlFor="imageSrc">
                                Image/Video:
                            </label> 
                            <input {...register('fileSrc')}  
                                className="form-input"
                                input type="file" 
                                id="fileSrc" 
                                required /> 
                            <button className="button" type="submit"> 
                                Submit 
                            </button> 
                        </form> 
                    </div>
                    <div className="footer">
                        <button onClick={handleClose}>Close Modal</button>
                    </div>
                </div>
            </div>
            , document.body
        );
    } else {
        return (
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="body">
                        <h2>Your post was created</h2> 
                    </div>
                    <div className="footer">
                        <button onClick={handleClose}>Close Modal</button>
                    </div>
                </div>
            </div>
        )
    }
}

