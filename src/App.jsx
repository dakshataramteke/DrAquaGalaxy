// App.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import ProductPage from './Components/Products/ProductPage';
import Footer from './Components/Footer';

import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';

const App = () => {
  return (
    <>
<Navbar/>
<HomePage/>
<ProductPage/>
<AboutUs/>
<Footer/>
  
    </>
  );
};

export default App;