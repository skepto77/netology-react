/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { fetchItem, fetchSaveItem } from '../store/listSlice';

const ItemEdit = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const { itemEdit, status, error, redirectToList } = useSelector((state) => state.list);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const goToServices = () => navigate('/services', { replace: true });

  useEffect(() => {
    dispatch(fetchItem(id));
  }, [id]);

  useEffect(() => {
    itemEdit.name && setName(itemEdit.name);
    itemEdit.price && setPrice(itemEdit.price);
    itemEdit.content && setContent(itemEdit.content);
  }, [itemEdit]);

  useEffect(() => {
    redirectToList && goToServices();
  }, [redirectToList]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(fetchSaveItem({ id, name, price, content }));
    setTimeout(() => setIsLoading(false), 3100);
  };

  return (
    <div style={{ width: '28rem', margin: '0 auto' }}>
      {error && (
        <Alert variant='danger' className='mb-4' style={{ width: 'fit-content', margin: '0 auto' }}>
          {error}
        </Alert>
      )}
      {status === 'loading' ? (
        <Spinner animation='border' role='status' style={{ margin: '0 auto', display: 'block' }} />
      ) : (
        <Form onSubmit={onSubmitHandler}>
          <Row className='d-flex justify-content-center mb-4'>
            <Col className='col-sm-12 col-md-12 mb-4'>
              <Form.Group controlId='formName'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  value={name}
                  disabled={isLoading || error}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='formCost'>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  required
                  value={price}
                  disabled={isLoading || error}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='formDescription'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  value={content}
                  disabled={isLoading || error}
                  onChange={(e) => setContent(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col className='col-sm-12 col-md-12 justify-content-end'>
              <Button
                variant='primary'
                type='submit'
                onClick={() => goToServices()}
                className='me-2'
              >
                Cancel
              </Button>
              <Button
                variant='primary'
                type='submit'
                disabled={isLoading || error}
                className='me-1'
              >
                {!isLoading ? 'Save' : <Spinner animation='border' size='sm' role='status' />}
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </div>
  );
};

export default ItemEdit;
