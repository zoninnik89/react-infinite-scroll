import React from 'react';
import './styles.css'; 

export default function Like(props) {
    const clickHandler = (e) => {
        props.onLikePost(prev => prev+1)
    }

    return (
        <div>
            <button className='LikeButton' onClick={clickHandler}>Like</button>
        </div>
    )
}
