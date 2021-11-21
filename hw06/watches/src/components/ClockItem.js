import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Card, CloseButton } from 'react-bootstrap';

const ClockItem = ({ item, onRemove }) => {
  const [date, setDate] = useState(new Date());

  const refreshClock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <Card style={{ width: '18rem' }} className='mb-4'>
      <Card.Body>
        <Card.Title>{item.value}</Card.Title>
        <Card.Text>
          {moment(date)
            .utcOffset(item.offset * 60)
            .format('HH:mm:ss')}
          {console.log(`tick ${item.value}`)}
        </Card.Text>
        <CloseButton
          aria-label='Delete'
          onClick={() => onRemove(item.value)}
          style={{
            border: '1px solid #ccc',
            padding: '14px',
            borderRadius: '28px',
          }}
        />
      </Card.Body>
    </Card>
  );
};

export default ClockItem;
