import React, { useState } from 'react';
import Message from './message'
import './MessagesStreamStyles.css'

export default function Home() {
    const [data, setData] = useState([]);

    function handleOpenConnection() {
        const es = new EventSource('https://10.59.62.240:3001/ssecountdown');
        es.onopen = () => console.log('>>> Connection opened!');
        es.onerror = (e) => console.log('ERROR!', e);
        es.onmessage = (e) => {
        setData(prev => [...prev, JSON.parse(e.data)]);
        };
        return () => es.close();
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
        <div>
            <h2 className='title'>Messages:</h2>
            <button className='button button-smaller' onClick={handleOpenConnection}>Get messages</button>
            <div className='messagesContainer'>
                {data.map(msg => <Message key={msg.id} val={msg.value} />)}
            </div>
        </div>
    );
}

  