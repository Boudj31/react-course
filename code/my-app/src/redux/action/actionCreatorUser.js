import { SAUVEGARDER } from "../actionType";

export function sauvegarder(name) {
  return {
    type: SAUVEGARDER,
    payload: { name } // { name } = { name: name }
  }
}
