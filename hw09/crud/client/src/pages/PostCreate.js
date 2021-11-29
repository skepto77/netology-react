import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../hoc/PostProvider';
import { Row, Col, Form, Button } from 'react-bootstrap';

function PostCreate() {
  const { addPost, getPosts } = useContext(PostContext);
  const [post, setPost] = useState('');

  const navigate = useNavigate();

  const goHome = () => navigate('/', { replace: true });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addPost(post);
    getPosts();
    goHome();
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Row className='d-flex justify-content-center mb-4'>
        <Col className='col-sm-12 col-md-12 mb-4'>
          <Form.Group controlId='formNote'>
            <Form.Control
              as='textarea'
              style={{ height: '100px' }}
              required
              placeholder='Enter post...'
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col className='col-sm-12 col-md-12 justify-content-end'>
          <Button variant='primary' type='submit' className='me-1'>
            Save
          </Button>
          <Button variant='primary' type='submit' onClick={() => goHome()}>
            Cancel
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreate;
