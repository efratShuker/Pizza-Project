import { PIZZA_SERVER_URL, HEADERS } from './globals';

//send new order to server in order to create it.
export function createOrder(orderDetails) {
    return fetch(`${PIZZA_SERVER_URL}/api/order`,
        {
            headers: HEADERS,
            method: "POST",
            body: JSON.stringify(orderDetails)
        })
        .then(res => res)

}