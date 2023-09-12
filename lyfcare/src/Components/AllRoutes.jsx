import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./ADDCitites/Products";
import Home from "../Pages/Home";
import Nailpolish from "./Nail/Nailpolish";
import SignupCard from "../Pages/SignUP";
import SimpleCard from "../Pages/Login";
// import LoginSignUp from "./Auth/LoginSingUp";
// import Register from "./Auth/Register";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Products />}/>
      <Route path="/nail" element={<Nailpolish />}/>
      <Route path="/login" element={<SimpleCard/>} />
      <Route path="/register" element={<SignupCard />}/> 
    </Routes>
  );
};

export default AllRoutes;
