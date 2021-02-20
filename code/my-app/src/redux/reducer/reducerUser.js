import { SAUVEGARDER } from "../actionType";

export default function reducer(value = { name: '' }, action) {
  switch( action.type ) {
    case SAUVEGARDER:
      return { name: action.payload.name };
    default:
      return value;
  }
}
