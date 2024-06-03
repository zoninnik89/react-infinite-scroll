import React, { useState, useEffect } from 'react';
import Post from './post.js';
import './FeedStyles.css'; 

import { Virtuoso } from 'react-virtuoso'

let coursor = 0

const url = 'https://10.59.62.240:3001/infscrolldata?coursor=0&limit=10';

export default function Feed() {

  const [data, setData] = useState([]);
    
  const getPosts = async () => {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const jsonResponse = await response.json()
        
        setData((data) => [...data, ...jsonResponse])

      } else {
        console.error(response.statusText)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const timeout = getPosts()
    return () => clearTimeout(timeout)
  }, [])

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
      <div className='Feed'>
        <Virtuoso
          style={{ height: 600 }}
          data={data}
          endReached={getPosts}
          increaseViewportBy={10}
          itemContent={(index) => {
            return <div> <Post key={data[index].id} postData={data[index]} /></div>
          }}
          components={{ Footer }}
        /> 
      </div>
    </>
  );
}
