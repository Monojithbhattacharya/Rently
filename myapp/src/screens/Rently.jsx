import React from "react";
import "../Static/Rently.css";
import img from "../images/home.png";

const Rently = () => {
    return (
        <>
            <div className="app-content bg-dark min-h-screen min-w-screen w-100 h-100">
                <div className="app-header w-auto h-auto flex justify-end p-3">
                    <button className="font-semibold text-base rounded-md w-20 h-10 me-3 bg-transparent">About</button>
                    <button className="font-semibold text-base rounded-md w-20 h-10 me-5 bg-transparent">Help</button>
                </div>
                <div className="app-body w-auto h-auto flex flex-wrap mt-5 p-2">
                    <div className="content-text w-50">
                        <div className="w-auto flex flex-col flex-wrap mt-5 h-auto">
                            <p className="text-white text-justify mt-4 mx-4 pt-4 px-5 tracking-wide text-2xl">Welcome to <span className="text-blue-300"><b>RENTLY</b></span></p>
                        </div>
                        <div className="w-auto flex flex-col flex-wrap h-auto text-white text-justify mt-3">
                            <p className="w-auto mx-5 px-4">Rently is a powerful web app designed to help you track your rent payments, calculate dues, and stay organized with ease. Whether you’re a tenant or a landlord, Rently simplifies rent management, ensuring you never miss a payment or forget important details. Stay in control of your finances and manage your rentals seamlessly—all in one place.</p>
                        </div>
                        <div className="w-auto mt-4 mx-5 m-auto">
                            <button className="btn btn-soft btn-primary w-40 mx-4">Get Started</button>
                        </div>
                    </div>
                    <div className="content-img w-50 grid justify-center">
                        <img className="w-100 h-auto" src={img} alt="home_img" />
                    </div>
                </div>
            </div>
            <footer className="footer sm:footer-horizontal footer-center  bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by MB</p>
                </aside>
            </footer>
        </>
    )
}
export default Rently;