import React, { useState, useEffect } from 'react';
import Message from './message'
import './MessagesStreamStyles.css'

export default function MessageStream() {
    const [data, setData] = useState([]);
    const [eventSource, setEventSource] = useState();

    function handleOpenConnection() {
        if (!eventSource) {
            setEventSource(new EventSource('https://10.59.62.240:3001/ssecountdown'))
        } else {
            console.log(eventSource);
        }
    }
    
    useEffect(() => {
        if (eventSource)  {
            eventSource.addEventListener('open', () => {
            console.log('SSE opened!');
          });
      
            eventSource.addEventListener('message', (e) => {
            console.log(e.data);;
            setData(prev => [...prev, JSON.parse(e.data)]);
          });
      
          eventSource.addEventListener('error', (e) => {
            console.error('Error: ',  e);
          });
      
          return () => {
            eventSource.close();
          };
        }
    }, [eventSource]);

    function handleCloseConnection() {
        eventSource.close();
        setEventSource(null);
    }

    return (
        <div>
            <h2 className='title'>Messages:</h2>
            <button className='button button-smaller' onClick={handleOpenConnection}>Get messages</button>
            <button className='buttonClose' onClick={handleCloseConnection}>Close stream</button>
            <div className='messagesContainer'>
                {data.map(msg => <Message key={msg.id} val={msg.value} />)}
            </div>
        </div>
    );
}

  