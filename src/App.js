import logo from './logo.svg';
import './App.css';

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.mini.css";

import { db } from "./firebase";
import { uid } from "uid";
import { set, ref, onValue } from 'firebase/database';
import { useState, useEffect } from "react";

import AddCustomer from "./components/add-customer.component";
import Customers from "./components/customers.component";

function App() {
  const [customer, setCustomer] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [transaction, setTransaction] = useState(null);
  const [rewardPoints, setRewardPoints] = useState(null);
  
  //update
  //delete

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark p-2">
        <Link to={"/"} className="navbar-brand">
          Reward Program 
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/customers"} className="nav-link">
            Customers
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route exact path="/customers" element={<Customers/>} />
          <Route exact path="/add" element={<AddCustomer/>} />
          {/* <Route path="/customer/:id" component={Customer} /> */}
        </Routes>
      </div>
    </div>
    // <div className="App">
    //   <header>
    //     Hello!
    //   </header>
    //   
    //   <div>
    //     {listItems}
    //   </div>  
    // </div>
  );
}

export default App;
