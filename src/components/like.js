import React from 'react';
import './styles.css'; 

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
