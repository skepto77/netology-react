import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRemoveItem } from '../store/listSlice';
import { Card, Button, Spinner } from 'react-bootstrap';

const ListItem = ({ id, name, price }) => {
  const { itemsInLoading } = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const isLoading = itemsInLoading.includes(id);

  return (
    <Card className='mb-2' style={{ width: '28rem', margin: '0 auto' }}>
      <Card.Header as='h5'># {id}</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
        {isLoading ? (
          <Button variant='primary' disabled>
            <Spinner animation='border' size='sm' role='status' />
          </Button>
        ) : (
          <>
            <Link to={`/services/${id}`}>
              <Button variant='primary' className='me-2'>
                Edit
              </Button>
            </Link>

            <Button variant='primary' onClick={() => dispatch(fetchRemoveItem(id))}>
              Delete
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default ListItem;
