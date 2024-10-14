import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Virtuoso } from 'react-virtuoso';
import { fetchPosts } from '../../store/postsSlice.js'
import Post from './post.js';

export default function VirtualList() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.posts.posts)

    const handleEndReached = () => {
        if (data) {
          dispatch(fetchPosts())
        } 
    }

    const Footer = () => {
        return (
          <div
            style={{
              padding: '2rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            Loading...
          </div>
        )
      }

    return (
        <>
            <Virtuoso
                style={{ height: 600 }}
                data={data}
                endReached={handleEndReached}
                increaseViewportBy={5}
                itemContent={(index) => {
                    return <div> <Post key={data[index].id} postData={data[index]} /></div>
                }}
                components={{ Footer }}
            /> 
        </>
    )
}