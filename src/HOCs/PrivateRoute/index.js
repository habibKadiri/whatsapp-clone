import {useStateValue} from "../StateProvider";
import React from "react";
import {Redirect, Route} from "react-router";

const PrivateRoute = ({component: RouteComponent, ...rest}) => {
    const [{user}, dispatch] = useStateValue()
    console.log("user in auth:  ",user);

    return (
        <Route
            {...rest}
            render={routeProps =>
                !!user ? (
                    <RouteComponent {...routeProps}/>
                ) : (
                    <Redirect to={"/"}/>
                )
            }
        />
    )
}
export default PrivateRoute