import {SET_USER} from "../actionTypes";

export const setUser = (userObj) => {
    return {
        type: SET_USER,
        payload: userObj
    }
}
