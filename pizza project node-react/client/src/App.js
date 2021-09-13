/**
 * The base function component 
 * that lays all the app components.
 */

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CreatePizza from './components/CreatePizza';


export default function App() {

  const orderInitialValues = {
    userName: "",
    userEmail: "",
    userAddress: "",
    totalPrice: 25,
    orderPizza: []
  }

  const [order, setOrder] = useState(orderInitialValues);
  const [finished, setFinished] = useState(false);

  const changePayment = (amountToAdd) => {
    const newPayment = order.totalPrice + amountToAdd;
    setOrderDetails("totalPrice", newPayment)
  }

  const setOrderDetails = (name, value) => {
    setOrder({
      ...order,
      [name]: value
    })
  }

  return (
    <div className="app">
      {
        finished ?
          <div>
            <h1 className="success-title">
              הזמנתך בוצעה בהצלחה!!
            </h1>
          </div>
          :
          <div className="container-fluid">
            <Header order={order}
              setOrder={setOrder}
              setFinished={setFinished}
              setOrderDetails={setOrderDetails}
              amountToPay={order.totalPrice} />
            <div className="mb-5" />
            <CreatePizza orderPizza={order.orderPizza} changePayment={changePayment} />
          </div>
      }
    </div>
  )
}

