import Listing from './components/Listing/Listing';
import data from './assets/etsy';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <Listing items={data} />
    </div>
  );
}

export default App;
