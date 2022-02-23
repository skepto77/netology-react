import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import { ListGroup } from 'react-bootstrap';

const UserList = ({ getUserId }) => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('data/users.json')
      .then((response) => response.json())
      .then((result) => {
        setUsers([...result]);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        users.length > 0 && (
          <ListGroup>
            {users.map((user) => (
              <ListGroup.Item
                action
                onClick={() => getUserId(user.id)}
                key={user.id}
              >
                {user.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )
      )}
    </>
  );
};

export default UserList;
