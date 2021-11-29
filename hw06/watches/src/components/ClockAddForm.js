import React, { useState, useEffect } from 'react';
import { uniqueId } from 'lodash';
import { Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';

const ClockAddForm = ({ onSubmitHandler }) => {
  const [city, setCity] = useState({});
  const [timezone, setTimezone] = useState('');
  const [cities, setCities] = useState([]);

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

  return (
    <Form onSubmit={onSubmitHandler(city)}>
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
  );
};
export default ClockAddForm;
