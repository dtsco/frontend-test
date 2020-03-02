import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import Context from "../context";

export default function PrivateRoute({children, ...rest}) {
    const {isLogin} = useContext(Context)
    return (
        <Route
            {...rest}
            render={({location}) =>
                isLogin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}