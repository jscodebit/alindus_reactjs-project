import { db } from "../firebase";
import { uid } from "uid";

import { set, ref } from 'firebase/database';
import { useState } from "react";

import moment from 'moment';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddCustomer(){

    const [customer, setCustomer] = useState(null);
    const [transaction, setTransaction] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const handleCustomerChange = (e) => {
        setCustomer(e.target.value);
      }
    
    const handleTransactionChange = (e) => {
        setTransaction(e.target.value);
    }

    const setDate = (date) => {
        console.log("onSelect");
        setStartDate(date);
        setSelectedDate(moment(date).toString());
        console.log("selectedDate: " + selectedDate);
        console.log(typeof selectedDate);
    }
    {}
      //write
    const writeToDatabase = () => {
        const uuid = uid()
        set(ref(db, `/${uuid}`), {
            customer,
            transaction,
            selectedDate,
            uuid
        })
        // console.log(typeof customer,
        //     typeof transaction,
        //     typeof selectedDate,
        //     typeof uuid);
        // console.log(customer,
        //     transaction,
        //     selectedDate,
        //     uuid);

        setCustomer("");
        setTransaction("");
        setStartDate(new Date());
    }

    console.log("DatePicker :");
    console.log(startDate);

    return (
        <>
            <h3>Add Customer</h3>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <input className="col mt-2 mb-2" type="text" placeholder="Enter Name" value={customer} onChange={handleCustomerChange}></input>
                        <input className="col" type="number" placeholder="Enter Amount" value={transaction} onChange={handleTransactionChange}></input>
                        <div className="col mt-2 mb-2">
                            <DatePicker selected={startDate} onSelect={(date) => setDate(date)} />
                        </div>
                        <button onClick={writeToDatabase}>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCustomer;