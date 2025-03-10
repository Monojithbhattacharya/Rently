import React from "react";
import About from "../components/About";
import "../Static/Rently.css";
import img from "../images/home.png";
import { APP_DESCRIPTION, APP_NAME, BUTTON, HOME } from "../constant";


const Rently = () => {
    return (
        <>
            <div className="app-content bg-dark min-h-screen w-full h-full">
                <div className="app-header w-auto h-auto flex justify-end p-3">
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
                <div className="app-body w-full h-auto flex flex-col-reverse lg:flex-row flex-wrap mt-5 p-2">
                    <div className="content-text m-auto w-full lg:w-1/2">
                        <div className="w-auto flex flex-col flex-wrap h-auto">
                            <p className="text-white text-justify mx-4 pt-4 px-5 tracking-wide text-2xl">{HOME.WELCOME}<span className="text-blue-300"><b>{APP_NAME}</b></span></p>
                        </div>
                        <div className="w-auto flex flex-col flex-wrap h-auto text-white text-justify mt-3">
                            <p className="w-auto mx-5 px-4">{APP_DESCRIPTION}</p>
                        </div>
                        <div className="w-auto mt-4 mx-5 ">
                            <button className="btn btn-soft btn-primary w-40 mx-4 mb-4">{HOME.START}</button>
                        </div>
                    </div>
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