import React, { useEffect, useState } from "react";
import { ADD, HOME } from "../constant";

const CreateTenent = ({ handleShowAdd }) => {
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        setCurrentDate(`${day}/${month}/${year}`);
    }, []);

    return (
        <>
            <div className="add-head flex justify-center mt-16">
                <h3 className="font-semibold text-blue-400 text-xl italic tracking-wider">{HOME.ADD_NEW_TENENT}</h3>
            </div>
            <div className="add-content w-full h-auto mt-5 p-2">
                <div className="flex w-full h-auto p-2 justify-evenly mt-5">
                    <fieldset className="fieldset text-white w-auto">
                        <legend className="fieldset-legend text-sm italic">{ADD.TENENT_NAME}</legend>
                        <input type="text" className="input h-8" placeholder={ADD.TENENT_NAME} style={{ outline: "none" }} />
                    </fieldset>
                    <fieldset className="fieldset text-white w-auto">
                        <legend className="fieldset-legend text-sm italic">{ADD.PHONE}</legend>
                        <input type="text" className="input h-8" placeholder={ADD.PHONE} style={{ outline: "none" }} />
                    </fieldset>
                </div>
                <div className="flex w-full h-auto p-2 justify-evenly mt-5">
                    <fieldset className="fieldset text-white w-auto">
                        <legend className="fieldset-legend text-sm italic">{ADD.ADHAAR_NUM}</legend>
                        <input type="text" className="input h-8" placeholder={ADD.ADHAAR_NUM} style={{ outline: "none" }} />
                    </fieldset>
                    <fieldset className="fieldset text-white w-auto">
                        <legend className="fieldset-legend text-sm italic">{ADD.RENT_DATE}</legend>
                        <input type="text" className="input h-8 text-white" value={currentDate} disabled style={{ outline: "none" }} />
                    </fieldset>
                </div>
                <div className="flex w-full h-auto p-2 justify-evenly mt-5">
                    <fieldset className="fieldset text-white w-auto">
                        <legend className="fieldset-legend text-sm italic">{ADD.RENT_PRICE}</legend>
                        <input type="text" className="input h-8" placeholder={ADD.RENT_PRICE} style={{ outline: "none" }} />
                    </fieldset>
                    <fieldset className="fieldset text-white w-auto">
                        <legend className="fieldset-legend text-sm italic">{ADD.UNIT_PRICE}</legend>
                        <input type="text" className="input h-8 text-white" placeholder={ADD.UNIT_PRICE} style={{ outline: "none" }} />
                    </fieldset>
                </div>
                <div className="flex w-full h-auto p-2 justify-center mt-5">
                    <button className="btn btn-soft btn-success w-36 me-3">{HOME.ADD_BUTTON}</button>
                    <button className="btn btn-soft btn-error w-36" onClick={handleShowAdd}>{HOME.CANCEL_BUTTON}</button>
                </div>
            </div>
        </>
    )
}
export default CreateTenent;