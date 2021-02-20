import { LOGIN, LOGOUT } from "../actionType";

export function logIn() {
  return {
    type: LOGIN
  }
}

export function logOut() {
  return {
    type: LOGOUT
  }
}
