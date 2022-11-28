import { db } from "../firebase";
import { uid } from "uid";

import { set, ref } from 'firebase/database';
import { useState } from "react";

function AddCustomer(){

    const [customer, setCustomer] = useState(null);
    const [transaction, setTransaction] = useState(null);
    const [rewardPoints, setRewardPoints] = useState(null);

    const handleCustomerChange = (e) => {
        setCustomer(e.target.value);
      }
    
    const handleTransactionChange = (e) => {
        setTransaction(e.target.value);
    }

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
    }

    return (
        <>
            <h3>Add Customer</h3>
            <input type="text" placeholder="Enter Name" value={customer} onChange={handleCustomerChange}></input>
            <input type="number" placeholder="Enter Amount" value={transaction} onChange={handleTransactionChange}></input>
            <button onClick={writeToDatabase}>Submit</button>
        </>
    )
}

export default AddCustomer;