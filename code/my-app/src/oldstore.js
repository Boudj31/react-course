import {createStore} from "redux";

//actions types

const AUGMENTER = 'augmenter';
const DIMINUER = 'diminuer';

//actions creator

export function actionCreatorAugmenter() {
    // action = {}
    return { type: AUGMENTER }
}

export const actionCreatorDiminuer = () => ({type: DIMINUER});

//reducer

// 2 paramètre : state global et l'action qui à été declaenché
const reducer = (state = {counter: 0}, action) => {
    switch (action.type) {
        case AUGMENTER:
            return {counter: state.counter + 1};
        case DIMINUER:
            return { counter: state.counter - 1};
        default:
            return state;
    }
}

//store
export default createStore(reducer)