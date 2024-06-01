import Feed from './components/feed';
import './components/styles.css'; 

function App() {
  return (
    <>
      <div className='Layout'>
        <div className='Left_part'></div>
        <Feed className='Feed' />
        <div className='Right_part'></div>
      </div>
    </>
  );
}

export default App;
