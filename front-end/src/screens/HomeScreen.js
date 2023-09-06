import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Products';
import Message from '../components/Message';
import Loader from '../components/Loader';

const HomeScreen = ({ match }) => {
  // Extract keyword and page number from the URL.
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  // Get dispatch function from Redux.(mail man)
  const dispatch = useDispatch();

  products = ["LALALA"]

  return (
    <>
      
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>

      <h1>Latest Products</h1>

      {/* Display loader while loading, error message if there's an error */}
      
        <Loader />
    
      (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} nd>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )
    </>
  );
};

export default HomeScreen;
