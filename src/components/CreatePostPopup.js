import React, {useState} from 'react';
import './styles.css'; 
import ReactDOM from 'react-dom';
import { SubmitHandler, useForm } from 'react-hook-form'; 
import { numberOfItems } from './feed';

export default function CreatePostPopup({show, onCloseButtonClick, onCreatePost, numberOfItems}) {

    const [isSubmit, setSubmit] = useState(false);

    const { register, handleSubmit } = useForm();

    function onSubmit (data) {
        onCreatePost(posts => [...posts, {
            id: data.id,
            title: data.title,
            text: data.text,
            imgSrc: data.imageSrc,
        }]);
        numberOfItems(prev => prev+1);
        setSubmit(true);
    }

    function handleClose() {
        onCloseButtonClick();
        setSubmit(false);
    }

    if (!show) {
        return null;
    } else {
        if (!isSubmit) {
            return ReactDOM.createPortal(
                <div className="modal-wrapper">
                    <div className="modal">
                        <div className="body">
                            <h2>Popup Form</h2> 
                            <form className="form-container" onSubmit={handleSubmit(onSubmit)}> 
                                <label className="form-label" for="id"> 
                                    Post id: 
                                </label> 
                                <input {...register('id')} className="form-input" type="text" 
                                    placeholder="Enter Post ID" 
                                    id="id" required /> 
                                <label className="form-label" for="title">
                                    Title:
                                </label> 
                                <input {...register('title')} 
                                    className="form-input"
                                    type="text"
                                    placeholder="Enter Your Title"
                                    id="title" 
                                    required /> 
                                <label className="form-label" for="text">
                                    Text:
                                </label> 
                                <input {...register('text')}  
                                    className="form-input"
                                    type="text"
                                    placeholder="Enter Your Text"
                                    id="text" 
                                    required /> 
                                <label className="form-label" for="imageSrc">
                                    Image/Video:
                                </label> 
                                <input {...register('imageSrc')}  
                                    className="form-input"
                                    type="text"
                                    placeholder="Enter Your Text"
                                    id="imageSrc" 
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

}