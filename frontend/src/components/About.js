import React from "react";
import { ABOUT, APP_DESCRIPTION } from "../constant";

const About = () => {

    return (
        <>
            <div className="about-content w-full bg-dark">
                <div className="about-head flex justify-center w-full mb-2">
                    <h3 className="text-white font-bold">About Me</h3>
                </div>
                <div className="about-body w-full text-sm text-justify text-white flex flex-col justify-center">
                    <p>{APP_DESCRIPTION}</p><br />
                    <p>{ABOUT.DESC1}</p><br />
                    <p>{ABOUT.DESC2}</p><br />
                    <p>{ABOUT.DECS3}</p><br />
                    <p>{ABOUT.DECS4}</p>
                </div>
            </div>
        </>
    )
}
export default About;