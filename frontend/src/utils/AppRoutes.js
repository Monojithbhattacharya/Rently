import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, Rently, TenantDetails } from "./importComponents";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Rently />} />
            <Route path="home" element={<HomePage />} />
            <Route path="tenant" element={<TenantDetails />} />
        </Routes>
    )
}
export default AppRoutes;