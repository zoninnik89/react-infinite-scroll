import React, { useState, useEffect } from 'react';
import Post from './post';
import postsMockData from './mockData.js';
import './styles.css'; 

import useModal from "./useModal";
import CreatePostPopup from './CreatePostPopup';

const itemHeight = 492; // Adjustable global variable
const windowHeight = 650; // Adjustable global variable
const overscan = 4; // Number of extra items to render before the visible range

const url = 'https://localhost:8000/';
const user = '1';
const endpoint = `${url}${user}`;

export default function Feed() {

  const [data, setData] = useState(postsMockData);
  const [numberOfItems, setNumberOfItems] = useState(data.length);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(endpoint)
        if (response.ok) {
          const jsonResponse = await response.json()
          setData(jsonResponse)
        } else {
          console.error(response.statusText)
        }
      } catch (error) {
        console.error(error)
      }
    }
    getPosts();
    console.log(data);
  }, [data]);

  const [scrollTop, setScrollTop] = useState(0);
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  let renderedNodesCount = Math.floor(windowHeight / itemHeight) + 2 * overscan;
  renderedNodesCount = Math.min(numberOfItems - startIndex, renderedNodesCount);

  const posts = data.slice(startIndex, startIndex+renderedNodesCount);


  const [isShowingModal, toggleModal] = useModal(null);

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
      <div className='Feed'
        style={{ height: `${windowHeight}px` }}
        onScroll={(e) => {
          setScrollTop(e.currentTarget.scrollTop);
        }}
      >
        <div
          style={{
            height: `${numberOfItems * itemHeight}px`,
          }}
        >
          <div
            style={{
              transform: `translateY(${startIndex * itemHeight}px)`,
            }}
          >
            {posts.map(item=><Post key={item.id} postData={item} />)}
          </div>
        </div>
      </div>
    </>
  );
}
