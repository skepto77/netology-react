import { useState, useEffect } from 'react';
import { uniqueId } from 'lodash';
import ClockItem from './ClockItem';
import { Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';

const ClocksDashboard = () => {
  const [cities, setCities] = useState([]);
  const [data, setData] = useState([]);
  const [city, setCity] = useState({});
  const [timezone, setTimezone] = useState('');

  useEffect(() => {
    fetch('assets/cities.json')
      .then((response) => response.json())
      .then((result) =>
        setCities([
          ...result.sort((c1, c2) => c1.value.localeCompare(c2.value)),
        ])
      );
  }, []);

  const onChangeHandler = (value) => {
    const city = cities.find((c) => c.value === value);
    setCity(city ? city : {});
    setTimezone(city ? city.text : '');
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setData([...data, city]);
  };

  const onRemoveHandler = (value) => {
    setData(data.filter((item) => item.value !== value));
  };

  return (
    <>
      <Form onSubmit={onSubmitHandler}>
        <Row className='g-2 mb-4'>
          <Col md>
            <FloatingLabel controlId='floatingSelectGrid' label='City'>
              <Form.Select
                onChange={(e) => onChangeHandler(e.target.value)}
                value={city.value}
              >
                <option hidden>Select a city from this select menu</option>
                {cities.map((city) => (
                  <option
                    key={uniqueId('city_')}
                    value={city.value}
                  >{`${city.value}`}</option>
                ))}
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId='floatingInputGrid' label='Timezone'>
              <Form.Control type='text' value={timezone} readOnly />
            </FloatingLabel>
          </Col>
          <Col md='auto' className='align-self-center'>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>

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
