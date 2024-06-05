import React, { useEffect } from 'react';
import './FeedStyles.css'; 
import { fetchPosts } from '../../store/postsSlice.js'
import { useDispatch, useSelector } from 'react-redux';
import VirtualList from './virtualList';

export default function Feed() {

  const dispatch = useDispatch();
  const data = useSelector(state => state.posts.posts)

  useEffect(() => {
    dispatch(fetchPosts());

  }, [dispatch]);


  return (
    <>
      <div className='Feed'>
        <VirtualList />
      </div>
    </>
  );
}
