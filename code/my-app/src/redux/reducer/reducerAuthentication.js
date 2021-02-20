import { LOGIN } from "../actionType";

const name = localStorage.getItem('name')
const initState = name ? { isLogged: true, name: name} : { isLogged: false }

export default function reducer(state = initState, action){
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('name', 'James')
      return { isLogged: true, name: 'James' };
    case LOGIN:
      localStorage.removeItem('name')
      return { isLogged: false };
    default:
      return state;
  }
}
