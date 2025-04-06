import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Bounce, ToastContainer } from 'react-toastify';
import { HOME, TENENT } from "../constant";
import Header from "../components/header";
import CreateTenent from "../components/CreateTenent";

const HomePage = () => {
    const [tenentName, setTenentName] = useState("");
    const [showAddTenent, setShowAddTenent] = useState(false);
    const location = useLocation();
    const userId = location.state?.userId;
    const username = location.state?.username;

    const data = [
        { id: 2000, tenentName: "Monojit", actualRent: 5000, unitPrice: 10, currentMonth: 6500, totalRent: 30000, rentPaid: 10000, rentBalance: 20000 },
        { id: 2001, tenentName: "Subhash", actualRent: 6000, unitPrice: 12, currentMonth: 7000, totalRent: 45000, rentPaid: 40000, rentBalance: 5000 },
    ]

    const handleShowAdd = () => {
        setShowAddTenent(!showAddTenent)
    }
    return (
        <>
            <div className="home-component min-h-screen w-full h-full bg-dark">
                <Header username={username} />
                {showAddTenent ?
                    <CreateTenent handleShowAdd={handleShowAdd} userId={userId} /> :
                    <>
                        <div className="home-content flex justify-between w-auto h-auto p-3 mt-3">
                            <div className="add-tenent lg:w-60 sm:w-35 h-auto lg:mx-5">
                                <button className="btn btn-soft btn-accent lg:w-full" onClick={handleShowAdd}>{HOME.ADD_TENENT}</button>
                            </div>
                            <div className="search-tenent text-white w-auto h-auto lg:me-5">
                                <label className="input" style={{ outline: "none", width: "15rem" }}>
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                                    <input type="search" placeholder={HOME.SEARCH_BY_TENENT_NAME} value={tenentName} onChange={(e) => setTenentName(e.target.value)} />
                                </label>
                                <button className="btn border hover:bg-dark hover:text-white">{HOME.SEARCH_BUTTON}</button>
                            </div>
                        </div>
                        {data.length === 0 ?
                            <div className="home-table w-auto h-auto mt-5 p-3 flex justify-center">
                                <h3 className="text-gray-300 italic tracking-widest lg:text-lg md:text-md sm:text-sm me-4 mt-2">No Tenant Were Added!</h3>
                            </div>
                            :
                            <div className="home-table w-auto h-auto mt-5 p-3">
                                <div className="overflow-x-auto border rounded-box border-base-content/5 bg-base-100">
                                    <table className="table text-white font-semibold m-auto">
                                        <thead>
                                            <tr>
                                                <th><input type="checkbox" className="checkbox checkbox-sm"
                                                /></th>
                                                <th>{TENENT.SERIAL_NO}</th>
                                                <th>{TENENT.TENENT_ID}</th>
                                                <th>{TENENT.TENENT_NAME}</th>
                                                <th>{TENENT.ACTUAL_RENT}</th>
                                                <th>{TENENT.UNITPRICE}</th>
                                                <th>{TENENT.CURRENT_RENT}</th>
                                                <th>{TENENT.TOTAL_RENT}</th>
                                                <th>{TENENT.PAID_RENT}</th>
                                                <th>{TENENT.BALANCE}</th>
                                                <th>{TENENT.STATUS}</th>
                                                <th>{TENENT.CALCULATE}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((elem, index) => (
                                                <tr key={elem.id}>
                                                    <td><input type="checkbox" className="checkbox checkbox-sm" /></td>
                                                    <td>{index + 1}</td>
                                                    <td>{elem.id}</td>
                                                    <td>{elem.tenentName}</td>
                                                    <td>{elem.actualRent}</td>
                                                    <td>{elem.unitPrice}</td>
                                                    <td>{elem.currentMonth}</td>
                                                    <td>{elem.totalRent}</td>
                                                    <td>{elem.rentPaid}</td>
                                                    <td>{elem.rentBalance}</td>
                                                    <td>
                                                        {<div className={`radial-progress ${(Math.round((elem.rentPaid / elem.totalRent) * 100)) === 100 ? "text-success" : (Math.round((elem.rentPaid / elem.totalRent) * 100)) >= 40 ? "text-primary" : "text-error"}`} style={{ "--value": (Math.round((elem.rentPaid / elem.totalRent) * 100)), "--size": "3rem" }} aria-valuenow={(Math.round((elem.rentPaid / elem.totalRent) * 100))} role="progressbar">
                                                            {(Math.round((elem.rentPaid / elem.totalRent) * 100)) + "%"}
                                                        </div>
                                                        }
                                                    </td>
                                                    <td><button className="btn btn-link italic">{TENENT.ACTION}</button></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="export-pdf w-full flex justify-center p-2 mt-3">
                                    <button className="btn btn-outline btn-accent">{HOME.PDF}</button>
                                </div>
                            </div>
                        }
                    </>
                }
            </div>
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={true} closeOnClick={true} theme="light" transition={Bounce} />
        </>
    )
}

export default HomePage;