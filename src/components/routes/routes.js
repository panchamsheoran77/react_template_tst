import React, { useEffect, useState } from 'react'; 
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import Home from '../../Pages/Home/Home';
 
 
// import ClipLoader from "react-spinners/ClipLoader";
// import { Redirect } from "react-router-dom"
// import { useSelector } from 'react-redux'
 
 
// import { useDispatch } from 'react-redux';
// import{useHistory, useLocation} from 'react-router';
 
 
const routerSwitch = (authStatus, isUserLoggedIn, isAdminLoggedIn,isStoreLoggedIn)=>


{
  return(
      <>
        <Route exact path="/" component={Home} />  

      </>
  )
}
 
const PrivateRoute = ({component: Component, authStatus, ...rest}) => {
  
 
  return (
      // restricted = false meaning public route
      // restricted = true meaning restricted route
      <Route {...rest} render={props => (
        authStatus ?
            <Component {...props} />
        : <Redirect to="/" />
    )} />
  );
};


const Routes = props => { 
    return  ( 
            routerSwitch()  
    );
};
 



export default  Routes ;