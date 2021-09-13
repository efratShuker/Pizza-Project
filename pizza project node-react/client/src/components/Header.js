/**
 * a function component which lays the hesder
 */

import React from 'react';
import FinishOrder from './FinishOrder';
import UserDetails from './UserDetails';
import '../styles/Header.css';


export default function Header(props) {
    return (
        <>
            <div className="row header">
                <div className="col-1">
                    <img className="logo" src="./images/logo2.jpg" alt="logo" />
                </div>
                <div className="col-4 title">
                    <h1>הפיצה הכי טעימה בעיר!!</h1>
                </div>
                <div className="col-4" />
                <div className="col-1 payment-text">
                    <h4>לתשלום:</h4>
                </div>
                <div className="col-1">
                    <div className="payment-amount" >{props.amountToPay} ש"ח</div>
                </div>
                <div className="col-1">
                    <FinishOrder {...props} component={UserDetails} />
                </div>
            </div>
            <div className="row header-bottom" />
        </>
    )
}