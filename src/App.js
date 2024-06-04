import Feed from './components/Feed/feed';
import MessagesStream from './components/Messages/messagesStream';
import './components/styles.css'; 
import CreatePostBlock from './components/CreatePostBlock/CreatePostBlock';
import WebSocketContainer from './components/WebSocket/WebSocketContainer';

function App() {
  return (
    <div className='wrapper'>
        <CreatePostBlock />
        <div className='Layout'>
          <Feed className='Feed' />
        </div>
        <MessagesStream />
        <WebSocketContainer />
    </div>
  );
}

export default App;
