import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, editSetItem, changeStatus } from '../store/listSlice';
import { Card, Button } from 'react-bootstrap';

const ListItem = ({ id, name, price }) => {
  const dispatch = useDispatch();

  return (
    <Card className='mb-2'>
      <Card.Header as='h5'># {id}</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button
          variant='primary'
          className='me-2'
          onClick={() => {
            dispatch(editSetItem({ id }));
            dispatch(changeStatus('editing'));
          }}
        >
          Edit
        </Button>
        <Button variant='primary' onClick={() => dispatch(removeItem({ id }))}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ListItem;
