import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import './assets/css/menu.css';

import InlineCss from "./pages/InlineCss";
import CssClass from "./pages/CssClass";
import CssModule from "./pages/CssModule";
import Scss from "./pages/Scss";
import ScssModule from "./pages/ScssModule";
import StyledComponent from "./pages/StyledComponent";
import Responsive from "./pages/Responsive";
import News from "./pages/News";


const StyleSheet = () => {
    const myStyle = {
        fontWeight: 'bold',
        color: '#b82514',
        textDecoration: 'none',
        marginRight: '10px',
    }

    return (
        <div>
            <nav>
                <NavLink to="inlineCss" className='normalLink'>InlineCss</NavLink>
                <NavLink to="cssClass" className='normalLink'>CssClass</NavLink>
                <NavLink to="cssModule" className='normalLink'>CssModule</NavLink>
                <NavLink to="scss" className='normalLink'>Scss</NavLink>
                <NavLink to="scssModule" className='normalLink'>ScssModule</NavLink>
                <NavLink to="styleComponent" className='normalLink'>StyledComponent</NavLink>
                <NavLink to="responsive" className='normalLink'>Responsive</NavLink>
                <NavLink to="news" className='normalLink'>News</NavLink>
            </nav>
            <hr />
            <Routes>
                <Route path="/cssClass" element={<CssClass/>}/>
                <Route path="/cssModule" element={<CssModule/>}/>
                <Route path="/inlineCss" element={<InlineCss/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/responsive" element={<Responsive/>}/>
                <Route path="/scss" element={<Scss/>}/>
                <Route path="/scssModule" element={<ScssModule/>}/>
                <Route path="/styleComponent" element={<StyledComponent/>}/>
            </Routes>
        </div>
    )
}

export default StyleSheet;