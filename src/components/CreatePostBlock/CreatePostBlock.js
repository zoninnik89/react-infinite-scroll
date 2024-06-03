import React, {useState} from 'react';
import useModal from "../CreatePostPopup/useModal";
import CreatePostPopup from '../CreatePostPopup/CreatePostPopup.js';
import './CreatePostBlockStyles.css'

export default function CreatePostBlock() {
    const [isShowingModal, toggleModal] = useModal(null);

    return (
        <div>
            <CreatePostPopup
            show={isShowingModal} 
            onCloseButtonClick={toggleModal} 
            /> 
            <button 
            className='button button-smaller'
            onClick={toggleModal}>
                Create post
            </button>
        </div>
    )
}