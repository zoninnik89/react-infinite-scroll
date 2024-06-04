import React from 'react';
import CreatePostPopup from '../CreatePostPopup/CreatePostPopup.js';
import './CreatePostBlockStyles.css'
import { useDispatch, useSelector } from 'react-redux';
import { displayCreatePostPopup } from '../../store/createPopupSlice.js'

export default function CreatePostBlock() {
    const dispatch = useDispatch();
    const displayPopup = () => dispatch(displayCreatePostPopup());
    const displayPopUp = useSelector(state => state.createPostPopup.showCreatePostPopup)
    
    if (displayPopUp == 'true') {
        return (
            <div>
                <CreatePostPopup /> 
                <button 
                className='button button-smaller'
                onClick={displayPopup}>
                    Create post
                </button>
            </div>
        )
    } else {
        return (
            <div>
                <button 
                className='button button-smaller'
                onClick={displayPopup}>
                    Create post
                </button>
            </div>
        )
    }
}