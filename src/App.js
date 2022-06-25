import './App.css';
import React from 'react'
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import Footer from './components/Footer.js';



function App() {
  const productList = [
    {
      price: 99999,
      name: "Macbook Pro",
      quantity: 10,
    },
    {
      price: 89999,
      name: "Macbook Air",
      quantity: 13,
    },

  ]
  
  return (
    <>
    <Navbar/>
    <ProductList productList={productList}/>
    <Footer/>
    </>
  );
}
export default App;
