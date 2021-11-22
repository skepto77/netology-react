import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';

const UserList = ({ getUserId }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('data/users.json')
      .then((response) => response.json())
      .then((result) => setUsers([...result]))
      .catch((err) => console.error(err));
  }, []);

  return (
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
  );
};

export default UserList;
