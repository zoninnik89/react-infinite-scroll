import React, { useState, useEffect } from 'react';
import Post from './post';
import postsMockData from './mockData.js';
import './styles.css'; 

import useModal from "./useModal";
import CreatePostPopup from './CreatePostPopup';

import * as ReactDOM from 'react-dom'
import { Virtuoso } from 'react-virtuoso'

let coursor = 0

const url = 'https://10.59.62.240:3001/infscrolldata?coursor=0&limit=10';

export default function Feed() {

  const [data, setData] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(data.length !== 0 ? data.length : 0);

  const [isShowingModal, toggleModal] = useModal(null);
    
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
      <CreatePostPopup
        show={isShowingModal} 
        onCloseButtonClick={toggleModal} 
        onCreatePost={setData}
        numberOfItems={setNumberOfItems}
      /> 
      <button 
        className='button button-smaller'
        onClick={toggleModal}>
          Create post
      </button>
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
