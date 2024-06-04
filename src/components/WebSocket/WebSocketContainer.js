import React, {useState} from 'react';
import './WebSocketContainerStyles.css';
import useWebSocket from 'react-use-websocket';
import MessageWS from './MessageWS.js';

let id = 0;

export default function WebSocketContainer() {

    const [data, setData] = useState([]);
    const [message, setMessage] = useState(null);

    const { sendMessage, lastMessage } = useWebSocket('ws://10.59.62.240:3002/', {
        onOpen: () => console.log('WebSocket connection opened!'),
        onClose: () => console.log('WebSocket connection closed!'),
        onError: (event) => console.error('WebSocket error:', event),
        onMessage: (event) => setData(prev => [...prev, JSON.parse(event.data)]),
      });

    const handleMessageSend = () => {

        if (message) {
            sendMessage(JSON.stringify({
            messageId: id, 
            value: message
            }));
            setMessage(null)
            id += 1; 
        } else {
            console.log("No message!")
        }
    }

    const handeTypeMessage = ({target}) => {
        setMessage(target.value)
    }

    return (
        <div>
            <h2 className='title'>Socket messages:</h2>
            <div className='WebSocketContainer'>
                {data.map(msg => <MessageWS key={msg.messageId} val={msg.value} />)}
            </div>
            <input className='WSform-input' type="text" onChange={handeTypeMessage} placeholder="Enter Your Text" id="text" />
            <button className='buttonClose' onClick={handleMessageSend}>Send message</button>
        </div>
    )
}