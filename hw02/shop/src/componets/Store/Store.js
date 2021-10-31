import React, { useState } from 'react';
import IconSwitch from '../IconSwitch/IconSwitch';
import CardsView from '../CardsView/CardsView';
import ListView from '../ListView/ListView';
import { products } from '../../assets/data';

const Store = () => {
  const [viewMode, setViewMode] = useState('view_module');
  const changeViewMode = (viewMode) => (viewMode === 'view_module' ? 'view_list' : 'view_module');
  return (
    <>
      <IconSwitch icon={viewMode} onSwitch={() => setViewMode(changeViewMode(viewMode))} />
      {viewMode === 'view_module' ? <CardsView products={products} /> : <ListView products={products} />}
    </>
  );
};

export default Store;
