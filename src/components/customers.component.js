import { db } from "../firebase";
import { ref, onValue } from 'firebase/database';
import { useState, useEffect } from "react";

function Customers(){
    const [customers, setCustomers] = useState([]);

    //read
    useEffect(()=> {
    onValue(ref(db), snapshot => {
        setCustomers([]);
        const data = snapshot.val();
        if(data !== null){
        Object.values(data).map((customer) => {
            setCustomers((oldArray) => [...oldArray, customer]);
        });
        }
    })
    console.log(customers);    
    }, []);

    const listItems = customers.map((customer) => {
        return (
            <>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    {customer.customer}
                    <span>$ {customer.transaction}</span>
                </li>
            </>
        )
      })

    return (
        <>
            <h3>Customers List</h3>
            <div className="row">
                <div className="col-3">
                    <ul className="list-group list-group-flush">
                        {listItems}
                    </ul>
                </div>
            </div>  
        </>
    )
}

export default Customers;