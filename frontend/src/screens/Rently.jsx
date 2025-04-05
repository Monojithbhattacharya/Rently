import React from "react";
import { useState } from "react";
import About from "../components/About";
import Login from "../components/Login";
import Signin from "../components/Signin";
import "../Static/Rently.css";
import img from "../images/home.png";
import { APP_DESCRIPTION, APP_NAME, APP_VERSION, BUTTON, HOME } from "../constant";


const Rently = () => {
    const [showLoginButton, setShowLoginButton] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);
    const [showLoginPage, setShowLoginPage] = useState(false);
    const [showSignPage, setShowSignPage] = useState(false);

    const handleLoginNav = () => {
        setShowLoginPage(true);
        setShowSignPage(false);
        setShowWelcome(false);
    }

    const handleWelcomeNav = () => {
        setShowWelcome(true);
        setShowLoginPage(false);
        setShowSignPage(false);
    }

    const handleSignNav = () => {
        setShowSignPage(true);
        setShowLoginPage(false);
        setShowWelcome(false);
    }

    return (
        <>
            <div className="app-content bg-dark min-h-screen w-full h-full">
                <div className="app-header w-auto h-auto flex justify-between p-3">
                    <div className="version font-semibold text-white">{APP_VERSION}</div>
                    <div>
                        <label htmlFor="about-popup" className="btn">{BUTTON.ABOUT}</label>
                        <input type="checkbox" id="about-popup" className="modal-toggle" />
                        <div className="modal" role="dialog">
                            <div className="modal-box">
                                <About />
                            </div>
                            <label className="modal-backdrop" htmlFor="about-popup">{BUTTON.CLOSE}</label>
                        </div>
                        <button className="font-semibold text-base rounded-md w-20 h-10 me-5 bg-transparent">{BUTTON.HELP}</button>
                    </div>
                </div>
                <div className="app-body w-full h-auto flex flex-col-reverse lg:flex-row flex-wrap mt-5 p-2">
                    {showWelcome && <div className="content-text m-auto w-full lg:w-1/2">
                        <div className="w-auto flex flex-col flex-wrap h-auto">
                            <p className="text-white text-justify mx-4 pt-4 px-5 tracking-wide text-2xl">{HOME.WELCOME}<span className="text-blue-300"><b>{APP_NAME}</b></span></p>
                        </div>
                        <div className="w-auto flex flex-col flex-wrap h-auto text-white text-justify mt-3">
                            <p className="w-auto mx-5 px-4">{APP_DESCRIPTION}</p>
                        </div>
                        {showLoginButton ?
                            <>
                                <div className="w-auto mt-4 mx-5 ">
                                    <button className="btn btn-soft btn-primary lg:w-40 md:w-30 sm:w-20 mx-4 mb-4" onClick={handleLoginNav} >{HOME.LOGIN_BUTTON}</button>
                                    <button className="btn btn-soft btn-error lg:w-40 md:w-30 sm:w-20 mx-4 mb-4" onClick={handleSignNav} >{HOME.SIGN_BUTTON}</button>
                                </div>
                            </>
                            :
                            <div className="w-auto mt-4 mx-5 ">
                                <button className="btn btn-soft btn-primary lg:w-40 md:w-30 sm:w-20 mx-4 mb-4" onClick={() => setShowLoginButton(true)}>{HOME.START}</button>
                            </div>
                        }
                    </div>
                    }
                    {showLoginPage && <Login handleWelcomeNav={handleWelcomeNav} />}
                    {showSignPage && <Signin handleWelcomeNav={handleWelcomeNav} />}
                    <div className="content-img w-full h-auto lg:w-1/2 flex justify-center">
                        <img className="w-auto h-auto" src={img} alt="home_img" />
                    </div>
                </div>
            </div>
            <footer className="footer sm:footer-horizontal footer-center  bg-base-300 text-base-content p-4">
                <aside>
                    <p>{HOME.COPYRIGHT}{new Date().getFullYear()}{HOME.OWNER}</p>
                </aside>
            </footer>
        </>
    )
}
export default Rently;