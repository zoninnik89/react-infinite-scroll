import React, {useState} from 'react';
import LikeButton from './like';
import './FeedStyles.css'; 


export default function Post({postData}) {
    const [post, setPost] = useState(postData)
    const [likes, setLikes] = useState(0)

    return (
        <div className='PostContainer'>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
            <div className='imageContainer'>
                <img src={post.imageSrc } />
            </div>
            <span className='Utils'>
                <h3>{likes}</h3>
                <LikeButton onLikePost={setLikes} />
            </span>
        </div>
    )
}
