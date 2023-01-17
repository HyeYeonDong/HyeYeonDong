import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './common/Header';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Main from './pages/Main/index';
import GlobalStyles from './GlobalStyles';
import Meta from './Meta';
import Side from "./pages/Main/Side";

const Layout = () => {
    return (
        <div>
            <Meta/>
            <GlobalStyles/>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path="/home" exact={true} element={<Main/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default Layout;