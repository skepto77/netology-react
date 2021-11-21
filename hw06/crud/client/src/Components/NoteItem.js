import React from 'react';
import { Card, CloseButton } from 'react-bootstrap';

const NoteItem = ({ note, onRemove }) => {
  const { id, content } = note;
  return (
    <Card className='mb-4' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text>{content}</Card.Text>
        <CloseButton
          aria-label='Delete'
          onClick={() => onRemove(id)}
          style={{
            border: '1px solid #ccc',
            padding: '14px',
            borderRadius: '28px',
            position: 'absolute',
            top: '10px',
            right: '10px',
          }}
        />
      </Card.Body>
    </Card>
  );
};

export default NoteItem;
