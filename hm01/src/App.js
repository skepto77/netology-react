import React from 'react';
import ShopItemFunc from './components/ShopItemFunc/ShopItemFunc';
import ShopItemClass from './components/ShopItemClass/ShopItemClass';
import { item } from './assets/data';
import './App.css';

const App = () => {
  return (
    <>
      <div className='container'>
        <div className='background-element'></div>
        <div className='highlight-window'>
          <div className='highlight-overlay'></div>
        </div>
        <div className='window'>
          <ShopItemFunc item={item} />
        </div>
      </div>

      <div className='container'>
        <div className='background-element'></div>
        <div className='highlight-window'>
          <div className='highlight-overlay'></div>
        </div>
        <div className='window'>
          <ShopItemClass item={item} />
        </div>
      </div>
    </>
  );
};

export default App;
