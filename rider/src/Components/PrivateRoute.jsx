import { children, useContext } from "react";
import { AppContext } from "../Context/AuthContext";

import { Navigate } from "react-router-dom";

function PrivateRoute() {
    const { authState } = useContext(AppContext);
    if (!authState.isAuth) {
        return <Navigate to="/login" />
    }
    return children;
}

export default PrivateRoute;
