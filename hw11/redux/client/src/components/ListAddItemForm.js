import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAddItem, fetchItems } from '../store/listSlice';
import { Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';

const ListAddItemForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAddItem({ name, price, content: '' }));
    setName('');
    setPrice('');
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Row className='g-2 mb-4'>
        <Col md>
          <FloatingLabel controlId='floatingInputGrid' label='name'>
            <Form.Control type='text' value={name} onChange={(e) => setName(e.target.value)} />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId='floatingInputGrid' label='price'>
            <Form.Control type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
          </FloatingLabel>
        </Col>
        <Col md='auto' className='align-self-center me-2'>
          <Button className='me-2' variant='primary' type='submit'>
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default ListAddItemForm;
