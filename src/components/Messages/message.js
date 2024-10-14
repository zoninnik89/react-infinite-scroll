import React from 'react';
import './MessagesStreamStyles.css'; 

export default function Message(props) {

    return (
        <div>
            <p>{props.val}</p>
        </div>
    )
    
}