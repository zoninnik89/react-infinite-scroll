import Feed from './components/Feed/feed';
import MessagesStream from './components/Messages/messagesStream';
import './components/styles.css'; 
import CreatePostBlock from './components/CreatePostBlock/CreatePostBlock';

function App() {
  return (
    <div className='wrapper'>
        <CreatePostBlock />
        <div className='Layout'>
          <Feed className='Feed' />
        </div>
        <MessagesStream className='Right_part' />
    </div>
  );
}

export default App;
