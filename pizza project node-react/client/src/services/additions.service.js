import {PIZZA_SERVER_URL} from './globals';


//return all addition from server
export function getAdditions(){
    return fetch(`${PIZZA_SERVER_URL}/api/addition`)
    .then(res => res.json())
    .then(result => result)
}

