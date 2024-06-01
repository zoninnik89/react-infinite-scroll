import React, {useState} from 'react';
import Like from './like';
import './styles.css'; 

export default function Post({postData, createPost}) {
    const [post, setPost] = useState(postData)

    const [likes, setLikes] = useState(0)

    const handleCreatePost = (event) => {
        createPost(posts => ({...posts, event.target.value}))
    }

    const handleOpenCreatePopup = () => {
        <CreatePostPopup />
    }

    return (
        <div className='PostContainer'>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
            <div className='imageContainer'>
                <img src={post.imageSrc } />
            </div>
            <span className='Likes'>
                <h3>{likes}</h3>
                <Like onLikePost={setLikes} />
                <CreatePost onCreatePost={handleOpenCreatePopup} />
            </span>
        </div>
    )
}
