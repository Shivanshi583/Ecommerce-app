import React from 'react';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Products from './Components/Products';
import Product from './Components/Product';
import About from './Components/About';
import Contact from './Components/Contact';
 import Cart from './Components/Cart';
import Checkout from './Components/Checkout';


function App() {
  return (
    <>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home />} exact />
  <Route path="/products" element={<Products />}  />
  <Route path="/product/:id" element={<Product/>}  />
  <Route path="/about" element={<About/>}  />
  <Route path="/contact" element={<Contact />}  />
   <Route path="/Cart" element={<Cart/>}  /> 
   <Route path="/checkout" element={<Checkout/>}  /> 

  

  </Routes>
  
    </>
    
  );
}

export default App;
