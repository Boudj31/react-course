import { AUGMENTER, DIMINUER} from "../actionType";

// 2 paramètre : state global et l'action qui à été declenché
const reducer = (state =  0, action) => {
    switch (action.type) {
        case AUGMENTER:
            return  state + 1;
        case DIMINUER:
            return state - 1;
        default:
            return state;
    }
}

export default reducer;