import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap'; 
import Header from './components/Header'; 
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


const App = () => {
  return (
    <Router >
      <Header />
      <main className='py-3'>
        <Container>

          <Routes>
          <Route path='/' element={<HomeScreen />}/> {/* exact means that the path must be exactly '/' */}
          <Route path='/product/:id' element={<ProductScreen />}/>{/* :id is a placeholder for the product id when clicked*/}
          </Routes>

        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
