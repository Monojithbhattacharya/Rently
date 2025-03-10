import React from "react";
import { Routes, Route } from "react-router-dom";
import { Rently } from "./importComponents";

const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Rently />}></Route>
        </Routes>
    )
}

export default AppRoutes;