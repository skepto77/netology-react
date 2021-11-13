import React, { useState } from 'react';
import { uniqueId, find } from 'lodash';
import { Col, Form, Button, Table } from 'react-bootstrap';

const StepsDashboard = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');

  const sortByDate = (arr) =>
    arr.sort((a, b) => new Date(b.date) - new Date(a.date));

  const removeDataItem = (data, id) => data.filter((item) => item.id !== id);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (find(data, { date: date })) {
      find(data, { date: date }).distance += +distance;
    } else {
      setData(
        sortByDate([...data, { id: uniqueId(), date, distance: +distance }])
      );
    }
    setDate('');
    setDistance('');
  };

  const onEditHandler = (id) => (e) => {
    e.preventDefault();
    const { date, distance } = data.filter((item) => item.id === id)[0];
    setDate(date);
    setDistance(distance);
    setData(removeDataItem(data, id));
  };

  const onRemoveHandler = (id) => (e) => {
    e.preventDefault();
    setData(removeDataItem(data, id));
  };

  return (
    <>
      <Form className='row justify-content-center' onSubmit={onSubmitHandler}>
        <Form.Group className='mb-3 col-xs-12 col-md-5' controlId='formDate'>
          <Form.Label>Дата</Form.Label>
          <Form.Control
            type='date'
            required
            placeholder='Введите дату'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          className='mb-3 col-xs-12 col-md-5'
          controlId='formDistance'
        >
          <Form.Label>Пройдено км.</Form.Label>
          <Form.Control
            type='number'
            required
            placeholder='Введите дистанцию в км'
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </Form.Group>

        <Col className='mb-3 col-xs-12 col-md-2 align-self-end'>
          <Button variant='primary' type='submit'>
            Сохранить
          </Button>
        </Col>
      </Form>

      {data.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Дата</th>
              <th>Дистанция</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={uniqueId('item_')}>
                  <td>{item.date}</td>
                  <td>{item.distance}</td>
                  <td>
                    <Button
                      variant='warning'
                      onClick={onEditHandler(item.id)}
                      className='me-1'
                    >
                      <i className='bi bi-pencil'></i>
                    </Button>
                    <Button variant='danger' onClick={onRemoveHandler(item.id)}>
                      <i className='bi bi-x-lg'></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default StepsDashboard;
