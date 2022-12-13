import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AboutSub from "./AboutSub";

const About = () => {
    return (
        <div>
            <p>여기는 About.js 페이지 입니다.</p>
            <br/>
            <Link to='aboutSub'><b>[About Sub]</b></Link>


            <Routes>
                <Route exact path='aboutSub' element={<AboutSub/>} />
            </Routes>
        </div>
    )
}

export default About;