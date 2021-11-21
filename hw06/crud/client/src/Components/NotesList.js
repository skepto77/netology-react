import React, { useState, useEffect } from 'react';
import NoteItem from './NoteItem';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const NotesList = () => {
  const [data, setData] = useState([]);
  const [note, setNote] = useState('');

  const getUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:7777/notes`);
      const notes = await response.json();
      setData(notes);
      console.log('update');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUpdate();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ content: note }),
    };
    try {
      await fetch(`http://localhost:7777/notes`, requestOptions);
      await getUpdate();
    } catch (error) {
      console.error(error);
    }
    setNote('');
  };

  const onRemoveHandler = async (id) => {
    try {
      await fetch(`http://localhost:7777/notes/${id}`, { method: 'DELETE' });
      await getUpdate();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Row className='d-flex flex-row justify-content-center mb-4'>
        <Col className='col-auto'>
          <h1>Notes</h1>
        </Col>
        <Col className='col-auto align-self-center'>
          <Button variant='success' onClick={() => getUpdate()}>
            Update
          </Button>
        </Col>
      </Row>
      {data && (
        <Row className='d-flex justify-content-around mb-4'>
          {data.map((note) => (
            <NoteItem
              note={note}
              onRemove={() => onRemoveHandler(note.id)}
              key={note.id}
            />
          ))}
        </Row>
      )}
      <Form onSubmit={onSubmitHandler}>
        <Row className='d-flex justify-content-center mb-4'>
          <Col className='col-sm-12 col-md-12 mb-4'>
            <Form.Group controlId='formNote'>
              <Form.Label>Add new note</Form.Label>
              <Form.Control
                as='textarea'
                style={{ height: '100px' }}
                required
                placeholder='Enter note...'
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col className='col-sm-12 col-md-12 align-self-center'>
            <Button variant='primary' type='submit'>
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default NotesList;
