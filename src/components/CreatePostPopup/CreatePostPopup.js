import React from 'react';
import './CreatePostPopupStyles.css'; 
import ReactDOM from 'react-dom';
import { SubmitHandler, useForm } from 'react-hook-form'; 
import { useDispatch, useSelector } from 'react-redux';
import { hideCreatePostPopup, createPost, pauseUpload, resumeUpload, cancelUpload} from '../../store/createPopupSlice.js'

export default function CreatePostPopup() {

    const status = useSelector(state => state.createPostPopup.status)

    const { register, handleSubmit } = useForm();
    
    const dispatch = useDispatch();

    const hidePopup = () => dispatch(hideCreatePostPopup());
    const handlePause = () => dispatch(pauseUpload());
    const handleCancel = () => dispatch(cancelUpload());
    const handleResume = () => dispatch(resumeUpload());

    function onSubmit (data) {
        dispatch(createPost(data));
        console.log(status);
    }

    function handleClose() {
        hidePopup();
        return
    }

    if (status === 'init') {
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
    } else if (status === 'uploading') {
        return (
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="body">
                        <h2>Uploading... Don't close the popup</h2>
                        <button onClick={handlePause}>Pause upload</button>
                        <button onClick={handleCancel}>Cancel Modal</button> 
                    </div>
                    <div className="footer">
                        <button onClick={handleClose}>Close Modal</button>
                    </div>
                </div>
            </div>
        )
    } else if (status === 'cancelled') {
        return (
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="body">
                        <h2>Your upload was cancelled</h2>
                    </div>
                    <div className="footer">
                        <button onClick={handleClose}>Close Modal</button>
                    </div>
                </div>
            </div>
        )
    } else if (status === 'paused') {
        return (
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="body">
                        <h2>Your posting paused</h2> 
                        <button onClick={handleResume}>Resume upload</button>
                    </div>
                    <div className="footer">
                    <button onClick={handleClose}>Close Modal</button>
                    </div>
                </div>
            </div>
        )
    } else if (status === 'posted') {
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

