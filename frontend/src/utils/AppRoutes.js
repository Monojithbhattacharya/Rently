import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, Rently } from "./importComponents";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Rently />} />
            <Route path="/home/:username" element={<HomePage />} />
        </Routes>
    )
}

export default AppRoutes;