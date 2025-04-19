import React from "react";
import { useNavigate } from "react-router-dom";
import { APP_NAME, APP_VERSION_SMALL, HOME } from "../constant";

const Header = ({ username, tenantId , showCalculateComponent, showUpdateRentPaidComponent}) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="app-header w-auto h-auto flex justify-between p-3">
                <div className="app-name flex">
                    <h3 className="text-blue-400 text-2xl font-semibold tracking-wider italic lg:mx-2">{APP_NAME}<sub className="text-white text-sm mx-2">{APP_VERSION_SMALL}</sub></h3>
                </div>
                <div className="logout lg:me-3 flex">
                    {username ?
                        <h3 className="text-white italic lg:text-lg md:text-md sm:text-sm me-4 mt-2">{HOME.WELCOME_USER} {username}</h3>
                        : tenantId ?
                            <div className="me-4">
                                <button className="btn btn-ghost font-semibold italic" style={{color: "#305DD2"}} onClick={() => showCalculateComponent()}>Calculate Rent</button>
                                <button className="btn btn-ghost font-semibold italic" style={{color: "#305DD2"}} onClick={() => showUpdateRentPaidComponent()}>Update Rent Paid</button>
                            </div>
                            :
                            null
                    }
                    <button className="btn btn-soft btn-warning h-8 mt-1" onClick={() => navigate("/")}>{HOME.LOGOUT_BUTTON}</button>
                </div>
            </div>
        </>
    )
}

export default Header;