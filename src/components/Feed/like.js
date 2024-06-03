import React from 'react';
import './FeedStyles.css'; 

export default function LikeButton(props) {
    const clickHandler = (e) => {
        props.onLikePost(prev => prev+1)
    }

    return (
        <div>
            <button className='button' onClick={clickHandler}>Like</button>
        </div>
    )
}
