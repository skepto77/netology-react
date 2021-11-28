/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { PostContext } from '../hoc/PostProvider';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function PostsList() {
  const { postsList, getPosts } = useContext(PostContext);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    postsList.length > 0 &&
    postsList.map((item, i) => (
      <Link to={`/posts/${item.id}`} key={i}>
        <Card className='mb-3'>
          <Card.Body>
            <Card.Title>{item.content}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    ))
  );
}

export default PostsList;
