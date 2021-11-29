import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editItem, changeStatus } from '../store/listSlice';
import { Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';

const ListEditItemForm = () => {
  const dispatch = useDispatch();
  const itemEdit = useSelector((state) => state.list.itemEdit);
  // console.log(itemEdit);
  const [name, setName] = useState(itemEdit[0].name);
  const [price, setPrice] = useState(itemEdit[0].price);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(editItem({ id: itemEdit[0].id, name, price }));
    setName('');
    setPrice('');
    dispatch(changeStatus('addition'));
  };

  useEffect(() => {
    setName(itemEdit[0].name);
    setPrice(itemEdit[0].price);
  }, [itemEdit]);

  const onCancel = (e) => {
    dispatch(changeStatus('addition'));
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Row className='g-2 mb-4'>
        <Col md>
          <FloatingLabel controlId='floatingInputGrid' label='name'>
            <Form.Control
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId='floatingInputGrid' label='price'>
            <Form.Control
              type='number'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FloatingLabel>
        </Col>
        <Col md='auto' className='align-self-center me-2'>
          <Button className='me-2' variant='primary' type='submit'>
            Submit
          </Button>
          <Button variant='primary' onClick={onCancel}>
            Cancel
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default ListEditItemForm;
