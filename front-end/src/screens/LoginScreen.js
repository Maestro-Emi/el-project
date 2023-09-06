import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

const LoginScreen = ({ location, history }) => {
  // State for email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Redux selector to get user login state
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {/* Display error message if there's an error */}
      {error && <Message variant='danger'>{error}</Message>}
      {/* Display a loader while loading */}
      {loading && <Loader />}
      <Form>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          {/* Input field for email */}
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          {/* Input field for password */}
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* Submit button */}
        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          {/* Link to the registration page */}
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
