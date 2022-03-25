import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import Footer from './components/footer/footer';
import Header from './components/header/header';
import LeftNav from './components/leftnav/lefnav'; 
import Routes from './components/routes/routes';
 



 

function App(props) {
 
  
  return (
     
          <>
            <Header/>    
            <LeftNav/>     
            <Routes/> 
            <Footer/>
          </> 
  );
}

export default App;
