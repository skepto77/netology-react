import { useState } from 'react';
import { uniqueId } from 'lodash';
import ClockItem from './ClockItem';
import ClockAddForm from './ClockAddForm';
import { Row } from 'react-bootstrap';

const ClocksDashboard = () => {
  const [data, setData] = useState([]);

  const onSubmitHandler = (city) => (e) => {
    e.preventDefault();
    setData([...data, city]);
  };

  const onRemoveHandler = (value) => {
    setData(data.filter((item) => item.value !== value));
  };

  return (
    <>
      <ClockAddForm onSubmitHandler={onSubmitHandler} />

      {data && (
        <Row className='d-flex justify-content-around mb-4'>
          {data.map((item) => (
            <ClockItem
              key={uniqueId('clock_')}
              item={item}
              onRemove={() => onRemoveHandler(item.value)}
            />
          ))}
        </Row>
      )}
    </>
  );
};

export default ClocksDashboard;
