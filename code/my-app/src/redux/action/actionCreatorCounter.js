import { AUGMENTER, DIMINUER} from "../actionType";

export function augmenter() {
    // action = {}
    return { type: AUGMENTER }
}

export const diminuer = () => ({type: DIMINUER});