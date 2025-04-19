import React, { useEffect, useState } from "react";
import { Bounce, toast, ToastContainer } from 'react-toastify';
import Header from "../components/header";
import { ADD, API_URL, BUTTON, HOME, TENENT } from "../constant";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const TenantDetails = () => {
    const [tenantName, setTenantName] = useState("");
    const [adhaarNum, setAdhaarNum] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [rentPrice, setRentPrice] = useState(0);
    const [unitPrice, setUnitPrice] = useState(0);
    const [paidRent, setPaidRent] = useState(0);
    const [ updatePaid, setUpdatePaid] = useState(0);
    const [rentBalance, setRentBalance] = useState(0);
    const [unitValue, setUnitValue] = useState(0);
    const [CalculatedRent, setCalculatedRent] = useState(0);
    const [loading, setLoading] = useState(false);
    const [CalculateLoading, setCalculateLoading] = useState(false);
    const [showCalculatedRent, setShowCalculatedRent] = useState(false);
    const [showCalculateComponent, setShowCalculateComponent] = useState(false);
    const [showUpdateRentPaidComponent, setShowUpdateRentPaidComponent] = useState(false);
    const [editOption, setEditOption] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const tenantId = location.state?.tenantId;
    console.log(tenantId);

    useEffect(() => {
        let isMounted = true;
        const getTenantDetails = async () => {
            try {
                const response = await axios.get(`${API_URL}/getTenantById`, { params: { tenantId } });
                setLoading(true);
                if (response.status === 200 && isMounted) {
                    setTenantName(response.data.tenantName);
                    setAdhaarNum(response.data.adhaarNum);
                    setPhoneNum(response.data.phoneNum);
                    setRentPrice(response.data.rentPrice);
                    setUnitPrice(response.data.unitPrice);
                    setPaidRent(response.data.rentPaid);
                    setRentBalance(response.data.rentBalance);
                    toast.success(`Tenant ID fetched successfully`);
                }
            } catch (error) {
                if (isMounted) {
                    toast.error(error.response.data.message);
                }
            }
            finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }
        getTenantDetails();
        return () => {
            isMounted = false;
        }
    }, [tenantId]);

    const handleCalculateRent = () => {
        setCalculateLoading(true);
        setTimeout(() => {
            setCalculatedRent(rentPrice + (unitValue * unitPrice));
            setCalculateLoading(false);
            setShowCalculatedRent(true);
        }, 3000);
    }

    const handleUpdateTenant = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${API_URL}/updateTenant`, { tenantName, phoneNum, adhaarNum, rentPrice, unitPrice }, { params: { tenantId } });
            if (response.status === 200) {
                toast.success(response.data.message);
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    const handleDeleteTenant = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.delete(`${API_URL}/deleteTenant`, { params: { tenantId } });
            if (response.status === 200) {
                toast.success(response.data.message);
                setTimeout(() => {
                    navigate(-1);
                }, 2000);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    const handleUpdateCalculatedRent = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${API_URL}/updateRent`, { calculatedRent: CalculatedRent }, { params: { tenantId } });
            if (response.status === 200) {
                toast.success(response.data.message);
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    const handleUpdatePaidRent = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${API_URL}/updatePaidRent`, { paidRent: updatePaid }, { params: { tenantId } });
            if (response.status === 200) {
                toast.success(response.data.message);
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    const handleShowCalculate = () => {
        setShowCalculateComponent(!showCalculateComponent);
        setShowUpdateRentPaidComponent(false);
        setShowCalculatedRent(false);
        setUnitValue(0);
    }

    const handleShowUpdateRentPaid = () => {
        setShowUpdateRentPaidComponent(!showUpdateRentPaidComponent);
        setShowCalculateComponent(false);
    }

    return (
        <>
            {loading ? <div className="home-component min-h-screen w-full h-full bg-dark flex justify-center items-center">
                <span className="loading loading-dots loading-xl"></span>
            </div> :
                <>
                    <div className="home-component min-h-screen w-full h-full bg-dark">
                        <Header tenantId={tenantId} showCalculateComponent={handleShowCalculate} showUpdateRentPaidComponent={handleShowUpdateRentPaid} />
                        <div className="w-full h-auto flex justify-between mt-3 p-1">
                            <h3 className="font-semibold italic text-blue-500 text-xl tracking-widest mx-3">{HOME.TENENT_DETAILS}</h3>
                            <div className="flex w-auto h-auto gap-10 me-5">
                                <button className="btn btn-soft btn-accent w-60 tracking-wider mt-1 h-8" onClick={() => setEditOption(!editOption)} >{HOME.EDIT_TENENT}</button>
                                <button className="btn btn-link text-lg no-underline tracking-wider italic">Reminder!</button>
                            </div>
                        </div>
                        <div className="w-full h-auto mt-3 p-1">
                            <div className="w-full h-auto flex justify-evenly gap-2 p-1">
                                <div>
                                    <label className="label-text text-xs font-semibold italic text-blue-500">{TENENT.TENENT_ID}</label><br />
                                    <input type="text" className="input input-sm" value={tenantId ? tenantId : ""} disabled />
                                </div>
                                <div>
                                    <label className="label-text text-xs font-semibold italic text-blue-500">{TENENT.TENENT_NAME}</label><br />
                                    <input type="text" placeholder={ADD.TENENT_NAME} className="input input-sm" style={{ outline: "none" }} value={tenantName} onChange={(e) => setTenantName(e.target.value)} disabled={!editOption ? true : false} />
                                </div>
                                <div>
                                    <label className="label-text text-xs font-semibold italic text-blue-500">{ADD.ADHAAR_NUM}</label><br />
                                    <input type="text" placeholder={ADD.ADHAAR_NUM} className="input input-sm" style={{ outline: "none" }} value={adhaarNum} onChange={(e) => setAdhaarNum(e.target.value)} disabled={!editOption ? true : false} />
                                </div>
                                <div>
                                    <label className="label-text text-xs font-semibold italic text-blue-500">{ADD.PHONE}</label><br />
                                    <input type="text" placeholder={ADD.PHONE} className="input input-sm" style={{ outline: "none" }} value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} disabled={!editOption ? true : false} />
                                </div>
                            </div>
                            <div className="w-full h-auto flex justify-evenly gap-2 mt-3 p-1">
                                <div>
                                    <label className="label-text text-xs font-semibold italic text-blue-500">{ADD.RENT_PRICE}</label><br />
                                    <input type="text" placeholder={ADD.RENT_PRICE} className="input input-sm" style={{ outline: "none" }} value={rentPrice ? rentPrice : ""} onChange={(e) => setRentPrice(e.target.value)} disabled={!editOption ? true : false} />
                                </div>
                                <div>
                                    <label className="label-text text-xs font-semibold italic text-blue-500">{ADD.UNIT_PRICE}</label><br />
                                    <input type="text" placeholder={ADD.UNIT_PRICE} className="input input-sm" style={{ outline: "none" }} value={unitPrice ? unitPrice : ""} onChange={(e) => setUnitPrice(e.target.value)} disabled={!editOption ? true : false} />
                                </div>
                                <div>
                                    <label className="label-text text-xs font-semibold italic text-blue-500">{TENENT.PAID_RENT}</label><br />
                                    <input type="text" className="input input-sm" style={{ outline: "none" }} value={paidRent ? paidRent : ""} disabled />
                                </div>
                                <div>
                                    <label className="label-text text-xs font-semibold italic text-blue-500">{TENENT.BALANCE}</label><br />
                                    <input type="text" placeholder={TENENT.BALANCE} className="input input-sm" style={{ outline: "none" }} value={rentBalance ? rentBalance : ""} disabled />
                                </div>
                            </div>
                            <div className="w-full h-auto flex justify-center mt-3 p-1">
                                <button className="btn btn-soft btn-accent tracking-wider w-36  h-8" disabled={!editOption ? true : false} onClick={handleUpdateTenant} >{BUTTON.SAVE}</button>
                            </div>
                        </div>
                        {
                            showCalculateComponent ?
                                <div className="w-full h-auto p-2">
                                    <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                                        <legend className="fieldset-legend font-semibold italic text-blue-500 text-xl tracking-widest">Calculate</legend>
                                        {CalculateLoading ? <div className="home-component bg-dark flex justify-center items-center">
                                            <span className="loading loading-dots loading-xl"></span>
                                        </div>
                                            : showCalculatedRent ?
                                                <div className="w-full h-auto p-10">
                                                    <p className="font-semibold italic text-green-400 text-sm tracking-widest">Calculated rent for current month</p>
                                                    <div className="w-full h-auto flex justify-center mt-4 p-2">
                                                        <input type="text" className="input input-sm px-3" style={{ outline: "none" }} value={CalculatedRent} />
                                                    </div>
                                                    <div className="w-full h-auto flex justify-center mt-4 gap-3 p-2">
                                                        <button className="btn btn-soft btn-primary tracking-wider w-25 h-8" onClick={handleUpdateCalculatedRent}>{BUTTON.UPDATE}</button>
                                                        <button className="btn btn-soft btn-error tracking-wider w-25 h-8" onClick={() => setShowCalculatedRent(false)}>{HOME.CANCEL_BUTTON}</button>
                                                    </div>
                                                </div>
                                                :
                                                <div className="w-full h-auto p-10">
                                                    <p className="font-semibold italic text-red-400 text-sm tracking-widest">Rent Calculation = Actual rent + ( Unit value * Unit price )</p>
                                                    <p className="font-semibold italic text-red-400 text-sm tracking-wider mt-3">*Please Enter the Unit Value</p>
                                                    <div className="w-full h-auto flex justify-center mt-4 p-2">
                                                        <input type="text" placeholder={ADD.UNIT_VALUE} className="input input-sm px-3" style={{ outline: "none" }} value={unitValue === 0 ? null : unitValue} onChange={(e) => setUnitValue(e.target.value)} />
                                                    </div>
                                                    <div className="w-full h-auto flex justify-center mt-4 p-2">
                                                        <button className="btn btn-soft btn-primary tracking-wider w-36 h-8" disabled={(!unitValue) ? true : false} onClick={handleCalculateRent}>{TENENT.CALCULATE}</button>
                                                    </div>
                                                </div>
                                        }
                                    </fieldset>
                                </div>
                                : showUpdateRentPaidComponent ?
                                    <div className="w-full h-auto p-2">
                                        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                                            <legend className="fieldset-legend font-semibold italic text-blue-500 text-xl tracking-widest">Update Paid Rent</legend>
                                            {CalculateLoading ? <div className="home-component bg-dark flex justify-center items-center">
                                                <span className="loading loading-dots loading-xl"></span>
                                            </div>
                                                :
                                                <div className="w-full h-auto p-10">
                                                    <p className="font-semibold italic text-green-400 text-sm tracking-widest">By entering the paid amount you can update the tracker for the respective tenant and stay updated</p>
                                                    <div className="w-full h-auto flex justify-center mt-4 p-2">
                                                        <input type="text" placeholder={ADD.RENT_PAID} className="input input-sm px-3" style={{ outline: "none" }} value={updatePaid === 0 ? null : updatePaid} onChange={(e) => setUpdatePaid(e.target.value)} />
                                                    </div>
                                                    <div className="w-full h-auto flex justify-center mt-4 p-2">
                                                        <button className="btn btn-soft btn-primary tracking-wider w-36 h-8" disabled={(!updatePaid) ? true : false} onClick={handleUpdatePaidRent}>{BUTTON.UPDATE}</button>
                                                    </div>
                                                </div>
                                            }
                                        </fieldset>
                                    </div>
                                    :
                                    null
                        }
                        <div className="w-full h-auto flex justify-between p-3">
                            <button className="btn btn-soft btn-warning tracking-wider w-36 mx-1 h-8" onClick={() => navigate(-1)} >{BUTTON.BACK}</button>
                            <button className="btn btn-soft btn-error tracking-wider w-60 me-1 h-8" onClick={handleDeleteTenant}>{BUTTON.DELETE}</button>
                        </div>
                    </div>
                    <ToastContainer position="top-center" autoClose={2000} hideProgressBar={true} closeOnClick={true} theme="light" transition={Bounce} />
                </>
            }
        </>
    )
}

export default TenantDetails;