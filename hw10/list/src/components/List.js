import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';

const List = () => {
  const { items, filter } = useSelector((state) => state.list);

  const itemsFiltred = filter === '' ? items : items.filter((item) => item.name.includes(filter));

  return (
    <>
      {itemsFiltred.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </>
  );
};

export default List;
