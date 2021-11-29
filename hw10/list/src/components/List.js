import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';

const List = () => {
  const { items, filter } = useSelector((state) => state.list);
  const [itemsFiltred, setItemsFiltred] = useState(items);

  useEffect(() => {
    filter !== ''
      ? setItemsFiltred(items.filter((item) => item.name.includes(filter)))
      : setItemsFiltred(items);
  }, [items, filter]);

  return (
    <>
      {itemsFiltred.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </>
  );
};

export default List;
