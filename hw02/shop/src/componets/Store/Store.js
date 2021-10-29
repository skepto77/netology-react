import React, { useState } from 'react';
import IconSwitch from '../IconSwitch/IconSwitch';
import CardsView from '../CardsView/CardsView';
import ListView from '../ListView/ListView';
import { products } from '../../assets/data';

const Store = () => {
  const [view, setView] = useState(true); // true = CardsView
  const icon = view ? 'view_list' : 'view_module';
  return (
    <>
      <IconSwitch icon={icon} onSwitch={() => setView(!view)} />
      {view ? <CardsView products={products} /> : <ListView products={products} />}
    </>
  );
};

export default Store;
