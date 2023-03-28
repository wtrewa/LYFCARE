import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Ragister from "../Pages/Ragister";

function AllRoutes() {
    
    return (
        <Routes>
            <Route path={"/"} element={<Dashboard/>} />
            <Route path={"/login"} element={<Login/>} />
            <Route path={"/ragister"} element={<Ragister/>} />
        </Routes>
    )
}

export default AllRoutes