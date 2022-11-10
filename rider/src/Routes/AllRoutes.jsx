import { Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
function AllRoutes() {
    return (
        <Routes>
            <Route path="/" elements={<SignIn />} />


        </Routes>
    )
}

export default AllRoutes;