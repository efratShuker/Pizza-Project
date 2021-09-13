/**
 * a function component whiche retrive the user detaails and treat the communication with server
 */

import React from 'react';
import { createOrder } from '../services/order.service';
import useFormState from '../utils/form-hook';
import { isValidName, isValidEmail, isValidAddress } from '../utils/form-validation';


export default function UserDetails(props) {

    const initialFormValues = {
        name: "",
        email: "",
        address: ""
    }

    const initialErrorsValues = {
        name: "",
        email: "",
        address: ""
    }

    //object with all the validation functions
    const handleDetailsErrors = {
        name: isValidName,
        email: isValidEmail,
        address: isValidAddress
    }


    //handle the sumbition event (this function will be sent to the custom hook in order to get stronger function)
    const handleDetailsSubmit = () => {
        props.order.userName = formValues.name
        props.order.userEmail = formValues.email
        props.order.userAddress = formValues.address
        createOrder(props.order)
            .then(res => res.json())
            .then(response => {
                console.log(response);
                props.handleClose();
                props.setFinished(true);
                props.setOrder({});
            })
            .catch(err => alert("some error occured!"))
    }

    //call the function useFormState (custom hook) and get the return values
    const [handleSubmit, updateState, formValues, errorValues] = useFormState(initialFormValues,
        initialErrorsValues, handleDetailsSubmit, handleDetailsErrors);

    return (
        <>

            <form onSubmit={handleSubmit} noValidate className="form-group">
                <fieldset>

                    <label className="mt-2">שם:</label>
                    <input name="name"
                        type="string"
                        value={formValues.name}
                        onChange={(event) => { updateState(event, undefined) }}
                        className="form-control" />

                    <span className="error-message">{errorValues.name}</span>

                    <label className="mt-2">כתובת אימייל:</label>
                    <input name="email"
                        type="email"
                        value={formValues.email}
                        onChange={(event) => { updateState(event, undefined) }}
                        className="form-control" />

                    <span className="error-message">{errorValues.email}</span>

                    <label className="mt-2">כתובת:</label>
                    <input name="address"
                        type="string"
                        value={formValues.address}
                        onChange={(event) => { updateState(event, undefined) }}
                        className="form-control" />

                    <span className="error-message">{errorValues.address}</span>

                    <button type="submit" className="btn btn-danger mt-5 mr-1 " style={{ float: "left" }} onClick={handleSubmit}>
                        אישור
                 </button>
                </fieldset>
            </form>
        </>

    )

}