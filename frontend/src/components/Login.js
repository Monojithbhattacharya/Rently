import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { API_URL, HOME, LABEL } from "../constant";
import { useNavigate } from "react-router-dom";
const Login = ({ handleWelcomeNav }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/login`, { username, password })
            if (response.status === 200) {
                navigate(`/home/${username}`, { state: { message: response.data.message, username: response.data.username, userId: response.data.userID } })
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    return (
        <>
            <div className="content-text m-auto w-full lg:w-1/2">
                <div className="flex flex-col">
                    <div className="flex justify-center">
                        <h1 className="login-head-title italic text-blue-400 text-xl font-semibold tracking-widest">{HOME.LOGIN_BUTTON}</h1>
                    </div>
                    <div className="login-component flex justify-center">
                        <div className="w-1/2 mt-4">
                            <label className="floating-label border border-gray-500 rounded">
                                <input type="text"
                                    placeholder={LABEL.USER_NAME}
                                    className="input input-md text-white font-semibold w-full"
                                    style={{ outline: "none" }}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <span className="text-primary font-semibold italic">{LABEL.USER_NAME}</span>
                            </label>
                            <label className="floating-label border border-gray-500 rounded mt-3">
                                <input type="password"
                                    placeholder={LABEL.PASSWORD}
                                    className="input input-md text-white font-semibold w-full"
                                    style={{ outline: "none" }}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span className="text-primary font-semibold italic">{LABEL.PASSWORD}</span>
                            </label>
                            <div className="flex justify-center">
                                <button className="btn btn-soft btn-primary mt-4 lg:w-36 sm:w-35 h-8 me-3" onClick={handleLogin}>{HOME.LOGIN_BUTTON}</button>
                                <button className="btn btn-soft btn-error mt-4 lg:w-36 sm:w-35 h-8" onClick={handleWelcomeNav}>{HOME.CANCEL_BUTTON}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={true} closeOnClick={true} theme="light" transition={Bounce} />
        </>
    )
}

export default Login;