import React, {useState} from 'react';
import './styles.css'; 
import ReactDOM from 'react-dom';

export default function CreatePostPopup({show, onCloseButtonClick, onCreatePost}) {

    const [isSubmit, setSubmit] = useState(false);

    function handleCreatePost(event) {
        event.preventDefault();
        const content = new FormData(event.currentTarget);
        console.log(content);
        onCreatePost(posts => [...posts, {
            id: content.postId,
            title: content.postTitle,
            text: content.postText,
            imgSrc: content.imageSrc,
        }]);
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
                            <form className="form-container" onSubmit={handleCreatePost}> 
                                <label className="form-label" for="id"> 
                                    Post id: 
                                </label> 
                                <input className="form-input" type="text" 
                                    placeholder="Enter Post ID" 
                                    id="id" name="postId" required /> 
                                <label className="form-label" for="title">
                                    Title:
                                </label> 
                                <input className="form-input"
                                    type="text"
                                    placeholder="Enter Your Title"
                                    id="title" 
                                    name="postTitle" required /> 
                                <label className="form-label" for="text">
                                    Text:
                                </label> 
                                <input className="form-input"
                                    type="text"
                                    placeholder="Enter Your Text"
                                    id="text" 
                                    name="postText" required /> 
                                <label className="form-label" for="imageSrc">
                                    Image/Video:
                                </label> 
                                <input className="form-input"
                                    type="text"
                                    placeholder="Enter Your Text"
                                    id="imageSrc" 
                                    name="imageSrc" required /> 
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