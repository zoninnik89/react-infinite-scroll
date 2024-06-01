import React, { useState, useEffect } from 'react';
import Post from './post';
import postsMockData from './mockData.js';
import './styles.css'; 

import useModal from "./useModal";
import CreatePostPopup from './CreatePostPopup';

const itemHeight = 492; // Adjustable global variable
const windowHeight = 650; // Adjustable global variable
const overscan = 4; // Number of extra items to render before the visible range
let coursor = 0

const url = 'https://10.59.62.240:3001/infscrolldata?coursor=0&limit=10';

export default function Feed() {

  const [data, setData] = useState(null);
  const [numberOfItems, setNumberOfItems] = useState(10);
  debugger
  useEffect(() => {
    debugger
    const getPosts = async () => {
      try {
        const response = await fetch(url)
        if (response.ok) {
          const jsonResponse = await response.json()
          setData(jsonResponse)
          console.log(data)
        } else {
          console.error(response.statusText)
        }
      } catch (error) {
        console.error(error)
      }
    }
    getPosts();

  }, []);

  const [scrollTop, setScrollTop] = useState(0);
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  let renderedNodesCount = Math.floor(windowHeight / itemHeight) + 2 * overscan;
  renderedNodesCount = Math.min(numberOfItems - startIndex, renderedNodesCount);
  console.log(`start index is ${startIndex}, nodes count is ${renderedNodesCount}`);
  const posts = data === null ? [] : data.slice(startIndex, startIndex+renderedNodesCount);
  console.log(`Posts are ${posts}`)

  const [isShowingModal, toggleModal] = useModal(null);

  if (data === null) {
    return "Loading..."
  } else {
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
}