import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Alert, Spinner } from 'react-bootstrap';
import ListAddItemForm from '../components/ListAddItemForm';
import ListFilterForm from '../components/ListFilterForm';
import ListItem from '../components/ListItem';

import { fetchItems } from '../store/listSlice';

const List = () => {
  const dispatch = useDispatch();
  const { items, filter, status, error } = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  const itemsFiltred = filter === '' ? items : items.filter((item) => item.name.includes(filter));

  return (
    <>
      <ListFilterForm />
      <ListAddItemForm />
      {error && (
        <Alert variant='danger' className='mb-4' style={{ width: 'fit-content', margin: '0 auto' }}>
          {error}
        </Alert>
      )}
      {status === 'loading' ? (
        <Spinner animation='border' role='status' style={{ margin: '0 auto', display: 'block' }}>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      ) : (
        itemsFiltred.map((item) => <ListItem key={item.id} {...item} />)
      )}
    </>
  );
};

export default List;
