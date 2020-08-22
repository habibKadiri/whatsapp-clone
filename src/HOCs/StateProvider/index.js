import React, {createContext, useContext, useEffect, useReducer, useState} from "react";
import {auth} from "../../firebase";

export const StateContext = createContext()
export const StateProvider = ({reducer, initialState, children}) => {

    const [pending, setPending] = useState(true)

    useEffect(() => {
        auth.onAuthStateChanged((userObj) => {
            initialState.user = userObj
            setPending(false)
        })
    }, [initialState.user])

    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {pending ? <>Loading..</> : children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext);