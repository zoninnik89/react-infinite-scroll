import React, { useState, useEffect } from 'react';
import Post from './post';
import postsMockData from './mockData.js';
import styles from './styles.css';

const itemHeight = 492; // Adjustable global variable
const windowHeight = 700; // Adjustable global variable
const overscan = 4; // Number of extra items to render before the visible range
const numberOfItems = 30;

const url = 'https://localhost:8000/';
const user = '1';
const endpoint = `${url}${user}`;

export default function Feed() {

  const [data, setData] = useState(postsMockData);

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
  }, []);

  const [scrollTop, setScrollTop] = useState(0);
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  let renderedNodesCount = Math.floor(windowHeight / itemHeight) + 2 * overscan;
  renderedNodesCount = Math.min(numberOfItems - startIndex, renderedNodesCount);

  const posts = data.slice(startIndex, startIndex+renderedNodesCount);

  return (
    <>
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
            {posts.map(item=><Post key={item.id} postData={item} createPost={setData}/>)}
          </div>
        </div>
      </div>
    </>
  );
}
