/**
 * a function custom hook
 * supports controlled forms (with state)
 * and also treat and handle errors at filling time
 * @param {initialFormValues : for init form state,
 *         initialErrorsValues : for init errors state,
 *         handleFormSubmit : to handle each form behaviour,
 *         handleErrors : specific functions to handle each field errors}
 * @returns {handleSubmit : return stronger function,
 *           updateState : return the function to connect the form on the event onChange,
 *           formValues : the current form values,
 *           errorValues : the current errors values} 
 */


import { useState } from "react";


export default function useFormState(initialFormValues, initialErrorsValues, handleFormSubmit, handleErrors) {

    //initial the states of the form values and the error values
    const [formValues, setFormValues] = useState(initialFormValues);
    const [errorValues, setErrorValues] = useState(initialErrorsValues)

    //update the state on change and check validation
    const updateState = (event, productImgSrc) => {
        if (productImgSrc) {
            setFormValues({
                ...formValues,
                [event.target.name]: productImgSrc
            })
        }
        else {
            setFormValues({
                ...formValues,
                [event.target.name]: event.target.value
            });
        }

        const errorMessage = handleErrors[event.target.name](event.target.value); //get the error message from the validation functions
        setErrorValues({
            ...errorValues,
            [event.target.name]: errorMessage
        })

    }

    const isErrorsInForm = () => {
        let fieldError = false;

        for (let key of Object.keys(formValues)) {
            //check that all the inputs are full.
            if (formValues[key] === "") {
                setErrorValues((ev) => ({
                    ...ev,
                    [key]: "זהו שדה חובה!"
                }))
                fieldError = true;

            }
            //check if there isn't any error in the full fields.
            if (errorValues[key] !== "") {
                fieldError = true;
            }
        }
        return fieldError;
    }

    //handle submit event, use the function from the parameters in order to handle the spacific function for each form
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isErrorsInForm()) {
            handleFormSubmit();
        }

    }

    return [handleSubmit, updateState, formValues, errorValues];
}