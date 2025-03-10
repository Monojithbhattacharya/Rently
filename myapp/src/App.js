import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../src/utils/AppRoutes"
import "../src/App.css";

function App() {
    return (
        <>
        <Router>
            <AppRoutes />
        </Router>
        </>
    );
}

export default App;
