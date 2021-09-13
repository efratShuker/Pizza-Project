/**
 * a function component which get all the users additions
 */

import React from 'react';
import '../styles/PizzaSliceAdditions.css';


export default function PizzaSliceAdditions(props) {

    const handleChange = (e) => {
        props.changePayment(e.target.checked ? 1 : -1)
        props.pizza[e.target.id][e.target.name] = e.target.checked;
    }

    return (
        <div className="table-responsive justify-content-center">
            <table className="table table-sm table-striped align-center">
                <thead>
                    <tr>
                        <th scope="col" className="table-col" >#</th>
                        {props.additions.map(singleAddition =>
                            <th scope="col" className="table-col" key={singleAddition._id}>
                                {singleAddition.hebrewName}:
                        </th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        Array(8).fill().map((v, idx) =>
                            <tr key={idx}>
                                <th scope="row"><img src="./images/slice.png" alt="pizzaSlice" className="pizza-slice" /></th>
                                {
                                    props.additions.map(singleAddition =>
                                        <td key={singleAddition._id}>
                                            <input
                                                id={idx}
                                                checked={props.pizza[idx][singleAddition.name]}
                                                className="form-control"
                                                type="checkbox"
                                                name={singleAddition.name}
                                                value={singleAddition.name}
                                                onChange={handleChange}
                                            />
                                        </td>)
                                }
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )

}

