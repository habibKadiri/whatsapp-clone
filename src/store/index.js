import {SET_USER} from "./actionTypes";

export const initialState = {
    user: null
}

const reducer = (state, action) => {
    const newState = {...state}
    console.log(action.payload)
    switch (action.type) {
        case SET_USER:
            return {
                ...newState,
                user: action.payload
            };

        default:
            return state
    }
}

export default reducer;