import React, { useState } from "react";
import { Bounce, toast, ToastContainer } from 'react-toastify';
import Header from "../components/header";
import { ADD, BUTTON, HOME, TENENT } from "../constant";
import { useNavigate } from "react-router-dom";

const TenantDetails = ({ username }) => {
    const [unitValue, setUnitValue] = useState(0);
    const [CalculatedRent, setCalculatedRent] = useState(0);
    const [loading, setLoading] = useState(false);
    const [CalculateLoading, setCalculateLoading] = useState(false);
    const [showCalculatedRent, setShowCalculatedRent] = useState(false);
    const [editOption, setEditOption] = useState(false);
    const navigate = useNavigate();
    //handle calculate rent
    const handleCalculateRent = () => {
        setCalculateLoading(true);
        setTimeout(() => {
            setCalculatedRent(1000 + (unitValue * 10));
            setCalculateLoading(false);
            setShowCalculatedRent(true);
        }, 3000);
    }
    return (
        <>
            {loading ? <div className="home-component min-h-screen w-full h-full bg-dark flex justify-center items-center">
                <span className="loading loading-dots loading-xl"></span>
            </div> :
                <>
                    <div className="home-component min-h-screen w-full h-full bg-dark">
                        <Header username={username} />
                        <div className="w-full h-auto flex justify-between mt-3 p-1">
                            <h3 className="font-semibold italic text-blue-500 text-xl tracking-widest mx-3">{HOME.TENENT_DETAILS}</h3>
                            <div className="flex w-auto h-auto gap-10 me-5">
                                <button className="btn btn-soft btn-accent w-60 tracking-wider mt-1 h-8" onClick={() => setEditOption(true)} >{HOME.EDIT_TENENT}</button>
                                <button className="btn btn-link text-lg no-underline tracking-wider italic">Reminder!</button>
                            </div>
                        </div>
                        <div className="w-full h-auto mt-3 p-1">
                            <div className="w-full h-auto flex justify-evenly gap-2 p-1">
                                <input type="text" className="input input-sm" disabled />
                                <input type="text" placeholder={ADD.TENENT_NAME} className="input input-sm" style={{ outline: "none" }} disabled={!editOption ? true : false} />
                                <input type="text" placeholder={ADD.ADHAAR_NUM} className="input input-sm" style={{ outline: "none" }} disabled={!editOption ? true : false} />
                                <input type="text" placeholder={ADD.PHONE} className="input input-sm" style={{ outline: "none" }} disabled={!editOption ? true : false} />
                            </div>
                            <div className="w-full h-auto flex justify-evenly gap-2 mt-3 p-1">
                                <input type="text" placeholder={ADD.RENT_PRICE} className="input input-sm" style={{ outline: "none" }} disabled={!editOption ? true : false} />
                                <input type="text" placeholder={ADD.UNIT_PRICE} className="input input-sm" style={{ outline: "none" }} disabled={!editOption ? true : false} />
                                <input type="text" placeholder={TENENT.PAID_RENT} className="input input-sm" style={{ outline: "none" }} disabled={!editOption ? true : false} />
                                <input type="text" placeholder={TENENT.STATUS} className="input input-sm" style={{ outline: "none" }} disabled />
                            </div>
                            <div className="w-full h-auto flex justify-center mt-3 p-1">
                                <button className="btn btn-soft btn-accent tracking-wider w-36  h-8" disabled={!editOption ? true : false} onClick={() => setEditOption(false)} >{BUTTON.SAVE}</button>
                            </div>
                        </div>
                        <div className="w-full h-auto p-4">
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
                                                <button className="btn btn-soft btn-primary tracking-wider w-25 h-8">{BUTTON.UPDATE}</button>
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
                        <div className="w-full h-auto flex justify-between p-3">
                        <button className="btn btn-soft btn-warning tracking-wider w-36 mx-1 h-8" onClick={() => navigate(-1)} >{BUTTON.BACK}</button>
                        <button className="btn btn-soft btn-error tracking-wider w-60 me-1 h-8" >{BUTTON.DELETE}</button>
                        </div>
                    </div>
                    <ToastContainer position="top-center" autoClose={2000} hideProgressBar={true} closeOnClick={true} theme="light" transition={Bounce} />
                </>
            }
        </>
    )
}

export default TenantDetails;