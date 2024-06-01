import React from 'react';
import './styles.css'; 
import ReactDOM from 'react-dom';

export default function CreatePostPopup({show, onCloseButtonClick, onCreatePost}) {

    function handleCreatePost(event) {
        event.preventDefault()
        onCreatePost(posts => [...posts, event.target.value])
    }

    if (!show) {
        return null;
    }

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
                        placeholder="Enter Your Username" 
                        id="name" name="name" required /> 
                    <label className="form-label" for="email">
                        Title:
                    </label> 
                    <input className="form-input"
                        type="text"
                        placeholder="Enter Your Tet"
                        id="postText" 
                        name="postText" required /> 
                    <input className="form-input"
                        type="text"
                        placeholder="Enter Your Tet"
                        id="postText" 
                        name="postText" required /> 
                    <button className="button" type="submit"> 
                        Submit 
                    </button> 
                    </form> 
                </div>
                <div className="footer">
                    <button onClick={onCloseButtonClick}>Close Modal</button>
                </div>
            </div>
        </div>
        , document.body
    );
};
