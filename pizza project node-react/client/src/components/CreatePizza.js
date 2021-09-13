/**
 * function component which create and treat all pizz's in order.
 */


import React, { useState } from 'react';
import { useEffect } from 'react';
import { getAdditions } from '../services/additions.service';
import '../styles/CreatePizza.css'
import SinglePizza from './SinglePizza';



export default function CreatePizza(props) {

    const [configAdditions, setConfigAdditions] = useState(false);
    const [pizzaCounter, setPizzaCounter] = useState(1);
    const [additions, setAdditions] = useState(1);

    const CreateSlice = () => {
        const singleSliceAdditions = {};
        for (let i = 0; i < additions.length; i++) {
            singleSliceAdditions[additions[i].name] = false;
        }
        return singleSliceAdditions;
    }

    const createPizza = () => {
        const pizza = [];
        for (let i = 0; i < 8; i++) {
            pizza.push(CreateSlice());
        }
        return pizza;
    }

    useEffect(() => {
        getAdditions()
            .then(additions => setAdditions(additions))
    }, [])

    const handleChange = (e) => {
        if (e.target.value > 0) {
            const add = (e.target.value - pizzaCounter) * 25
            setPizzaCounter(e.target.value);
            props.changePayment(add);
        }
    }

    const handleSubmit = (e) => {
        if (pizzaCounter > 0) {
            setConfigAdditions(true);
            for (let i = 0; i < pizzaCounter; i++) {
                props.orderPizza.push(createPizza());
            }
        }
    }

    return (
        <div className="card">
            {
                configAdditions ?
                    <div>
                        <h3 className="mb-5">יש ללחוץ על הפיצות על מנת לבחור תוספות למשולשים!</h3>
                        {
                            Array(Number(pizzaCounter)).fill().map((v, i) =>
                                <SinglePizza 
                                pizza={props.orderPizza[i]} 
                                changePayment={props.changePayment} 
                                additions={additions} key={i} />)
                        }
                    </div>
                    :
                    <div>
                        <label className="mt-2" htmlFor="pizzaCounter">הכנס מספר פיצות:</label>
                        <input
                            name="pizzaCounter"
                            type="number"
                            value={pizzaCounter}
                            onChange={handleChange}
                            className="form-control"
                            id="pizza-count-input" />
                        <button type="submit" className="btn btn-danger mt-2" onClick={handleSubmit}>
                            אישור</button>
                    </div>
            }

        </div>
    )


}