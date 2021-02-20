import { AUGMENTER, DIMINUER } from "../actionType";

const reducer = (state = 10, action) => {
  switch (action.type) {
    case AUGMENTER:
      return state + 1;
    case DIMINUER:
      return state - 1;
    default:
      return state;
  }
}

export default reducer;
