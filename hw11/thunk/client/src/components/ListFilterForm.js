import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import { filterItems } from '../store/listSlice';
import { Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';

const ListFilterForm = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    dispatch(filterItems(e.target.value));
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 1000);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  const onCancel = (e) => {
    setSearchTerm('');
    dispatch(filterItems(''));
  };

  return (
    <Form>
      <Row className='g-2 mb-4'>
        <Col md>
          <FloatingLabel controlId='floatingInputGrid' label='search'>
            <Form.Control
              type='text'
              // value={searchTerm}
              onChange={debouncedResults}
            />
          </FloatingLabel>
        </Col>
        <Col md='auto' className='align-self-center me-2'>
          <Button
            variant='primary'
            onClick={onCancel}
            disabled={searchTerm === ''}
          >
            Cancel
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default ListFilterForm;
