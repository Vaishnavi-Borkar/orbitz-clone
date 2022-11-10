import { Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
function AllRoutes() {
    return (
        <Routes>
            <Route exact path="/SignIn" elements={<SignIn />} />


        </Routes>
    )
}

export default AllRoutes;