import logo from './logo.svg';
import './App.css';

import { db } from "./firebase";
import { uid } from "uid";
import { set, ref, onValue } from 'firebase/database';
import { useState, useEffect } from "react";

function App() {
  const [customer, setCustomer] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [transaction, setTransaction] = useState(null);
  const [rewardPoints, setRewardPoints] = useState(null);

  const handleCustomerChange = (e) => {
    setCustomer(e.target.value);
  }

  const handleTransactionChange = (e) => {
    setTransaction(e.target.value);
  }

  //read
  useEffect(()=> {
    onValue(ref(db), snapshot => {
      setCustomers([]);
      const data = snapshot.val();
      if(data !== null){
        Object.values(data).map((customer) => {
          setCustomers((oldArray) => [...oldArray, customer]);
          console.log(customer);
        });
      }
    })
    console.log(customers);    
  }, []);

  const listItems = customers.map((customer) => {
    return (
      <ul>
        <li>{customer.customer}</li>
        <li>{customer.transaction}</li>
      </ul>
    )
  })

  //write
  const writeToDatabase = () => {
    const uuid = uid()
    set(ref(db, `/${uuid}`), {
      customer,
      transaction,
      rewardPoints,
      uuid
    })

    setCustomer("");
    setTransaction("");

    console.log(customers);
  }
  
  //update
  //delete

  return (
    <div className="App">
      <header>
        Hello!
      </header>
      <input type="text" value={customer} onChange={handleCustomerChange}></input>
      <input type="text" value={transaction} onChange={handleTransactionChange}></input>
      <button onClick={writeToDatabase}>Submit</button>
      <div>
        {listItems}
      </div>  
    </div>
  );
}

export default App;
