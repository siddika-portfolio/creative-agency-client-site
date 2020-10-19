import React, { createContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

import jwt_decode from "jwt-decode";
import AddService from './components/Admin/AddService/AddService';
import OrderList from './components/OrderPage/OrderList/OrderList';
import Order from './components/OrderPage/Order/Order';
import Review from './components/OrderPage/AddReview/AddReview';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import Admin from './components/Admin/Admin';



export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(()=> {
    const userData = () => {
      const token = sessionStorage.getItem('token');
      if(token){
        const decodedToken = jwt_decode(token);
        console.log(decodedToken)
        const {email, name, picture} = decodedToken;
        const loggedInData = {email, name, picture};
        setLoggedInUser(loggedInData);
      }
  }
  userData();
  },[])


  useEffect(()=> {
    loggedInUser.email && fetch('http://localhost:5000/getAdmin?email='+loggedInUser.email,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data[0]);
      const adminData = data[0]
      console.log(adminData)
      setLoggedInUser({...loggedInUser , adminEmail: adminData?.email})
    })
  }, [loggedInUser.email])
 


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App">
        <Router>
          <Switch>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/Order" >
              <Order />
            </PrivateRoute>

            <PrivateRoute path="/OrderList" >
              <OrderList/>
            </PrivateRoute>

            <PrivateRoute  path="/review">
              <Review/>
            </PrivateRoute>

            <PrivateRoute path="/admin">
             { loggedInUser.adminEmail && <Admin />}
            </PrivateRoute>

            <PrivateRoute path="/addService">
             { loggedInUser.adminEmail && <AddService />}
            </PrivateRoute>

            <PrivateRoute path="/makeAdmin">
              { loggedInUser.adminEmail && <MakeAdmin/>}
            </PrivateRoute>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>

      </div>
    </UserContext.Provider>
  );
}

export default App;
