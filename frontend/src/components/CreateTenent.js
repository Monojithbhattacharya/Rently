import React, { useEffect, useState } from "react";
import { ADD, API_URL, HOME } from "../constant";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";

const CreateTenent = ({ handleShowAdd, userId }) => {
    const [currentDate, setCurrentDate] = useState("");
    const [tenantName, setTenantName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [adhaarNum, setAdhaarNum] = useState("");
    const [rentPrice, setRentPrice] = useState(0);
    const [unitPrice, setUnitPrice] = useState(0);
    useEffect(() => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        setCurrentDate(`${day}/${month}/${year}`);
    }, []);

    const handleAddTenant = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/add`, {tenantName, phoneNum, adhaarNum, rentingDate: currentDate, rentPrice, unitPrice, userId });
            if(response.status === 201){
                toast.success(response.data.message , response.data.tenantID)
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    return (
        <>
            <div className="add-head flex justify-center mt-16">
                <h3 className="font-semibold text-blue-400 text-xl italic tracking-wider">{HOME.ADD_NEW_TENENT}</h3>
            </div>
            <div className="add-content w-full h-auto mt-5 p-2">
                <div className="flex w-full h-auto p-2 justify-evenly mt-5">
                    <fieldset className="fieldset text-white w-auto">
                        <legend className="fieldset-legend text-sm italic">{ADD.TENENT_NAME}</legend>
                        <input type="text" className="input h-8" placeholder={ADD.TENENT_NAME} value={tenantName} onChange={(e) => setTenantName(e.target.value)} style={{ outline: "none" }} />
                    </fieldset>
                    <fieldset className="fieldset text-white w-auto">
                        <legend className="fieldset-legend text-sm italic">{ADD.PHONE}</legend>
                        <input type="text" className="input h-8" placeholder={ADD.PHONE} value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} style={{ outline: "none" }} />
                    </fieldset>
                </div>
                <div className="flex w-full h-auto p-2 justify-evenly mt-5">
                    <fieldset className="fieldset text-white w-auto">
                        <legend className="fieldset-legend text-sm italic">{ADD.ADHAAR_NUM}</legend>
                        <input type="text" className="input h-8" placeholder={ADD.ADHAAR_NUM} value={adhaarNum} onChange={(e) => setAdhaarNum(e.target.value)} style={{ outline: "none" }} />
                    </fieldset>
                    <fieldset className="fieldset text-white w-auto">
                        <legend className="fieldset-legend text-sm italic">{ADD.RENT_DATE}</legend>
                        <input type="text" className="input h-8 text-white" value={currentDate} disabled style={{ outline: "none" }} />
                    </fieldset>
                </div>
                <div className="flex w-full h-auto p-2 justify-evenly mt-5">
                    <fieldset className="fieldset text-white w-auto">
                        <legend className="fieldset-legend text-sm italic">{ADD.RENT_PRICE}</legend>
                        <input type="text" className="input h-8" placeholder={ADD.RENT_PRICE} value={rentPrice !==0 ? rentPrice : null} onChange={(e) => setRentPrice(e.target.value)} style={{ outline: "none" }} />
                    </fieldset>
                    <fieldset className="fieldset text-white w-auto">
                        <legend className="fieldset-legend text-sm italic">{ADD.UNIT_PRICE}</legend>
                        <input type="text" className="input h-8 text-white" placeholder={ADD.UNIT_PRICE} value={unitPrice !==0 ? unitPrice : null} onChange={(e) => setUnitPrice(e.target.value)} style={{ outline: "none" }} />
                    </fieldset>
                </div>
                <div className="flex w-full h-auto p-2 justify-center mt-5">
                    <button className="btn btn-soft btn-success w-36 me-3" disabled={!tenantName || !phoneNum || !adhaarNum || !rentPrice || !unitPrice} onClick={handleAddTenant}>{HOME.ADD_BUTTON}</button>
                    <button className="btn btn-soft btn-error w-36" onClick={handleShowAdd}>{HOME.CANCEL_BUTTON}</button>
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={true} closeOnClick={true} theme="light" transition={Bounce} />
        </>
    )
}
export default CreateTenent;