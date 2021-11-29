/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../hoc/PostProvider';
import { useParams } from 'react-router-dom';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

function Post() {
  const { id } = useParams();
  const { post, getPost, getPosts, editPost, removePost } =
    useContext(PostContext);
  const [postEdited, setPostEdited] = useState('');
  const [viewMode, setViewMode] = useState('view');

  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/', { replace: true });

  useEffect(() => {
    getPost(id);
  }, [id]);

  useEffect(() => {
    if (viewMode === 'view') {
      getPost(id);
    } else {
      setPostEdited(post.content);
    }
  }, [viewMode]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    editPost({ id: post.id, content: postEdited });
    setViewMode('view');
  };

  const onRemoveHandler = (id) => {
    removePost(id);
    getPosts();
    goHome();
  };

  return (
    <>
      {viewMode === 'view' ? (
        <Card>
          <Card.Body>
            <Card.Title>{post.content}</Card.Title>
            <Card.Footer>
              <Button
                variant='primary'
                onClick={() => setViewMode('edit')}
                className='me-1'
              >
                Edit
              </Button>
              <Button
                variant='primary'
                onClick={() => onRemoveHandler(post.id)}
              >
                Delete
              </Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      ) : (
        <Form onSubmit={onSubmitHandler}>
          <Row className='d-flex justify-content-center mb-4'>
            <Col className='col-sm-12 col-md-12 mb-4'>
              <Form.Group controlId='formPost'>
                <Form.Control
                  as='textarea'
                  style={{ height: '100px' }}
                  required
                  placeholder='Enter post...'
                  value={postEdited}
                  onChange={(e) => setPostEdited(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col className='col-sm-12 col-md-12 justify-content-end'>
              <Button variant='primary' type='submit' className='me-1'>
                Save
              </Button>
              <Button
                variant='primary'
                type='submit'
                onClick={() => setViewMode('view')}
              >
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </>
  );
}

export default Post;
