import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Hotel from "../Components/Hotel";
function AllRoutes() {
    return (
        <Routes>
            <Route path="/login" elements={<Login />} />
            <Route path="/" elements={<Home />}></Route>
            <Route path="/hotel" elements={<Hotel />} />

        </Routes>
    )
}

export default AllRoutes;