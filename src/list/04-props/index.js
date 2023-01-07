import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import MyProps from "./pages/MyProps";
import MyPropTypes from "./pages/MyPropTypes";
import MyChildren from "./pages/MyChildren";
import GradeTable from "./pages/GradeTable";
import SchoolYear from "./pages/SchoolYear";

const Props = () => {
    return (
        <div>
            <h1>04-Props</h1>
            <nav>
                <Link to='myprops'>MyProps</Link>&nbsp;|&nbsp;&nbsp;
                <Link to='myproptypes'>MyPropTypes</Link>&nbsp;|&nbsp;&nbsp;
                <Link to='mychildren'>MyChildren</Link>&nbsp;|&nbsp;&nbsp;
                <Link to='grade_table'>GradeTable</Link>&nbsp;|&nbsp;&nbsp;
                <Link to='school_year/1'>School Year Table</Link>
            </nav>
            <hr />
            <Routes>
                <Route path="/myprops" element={<MyProps/>}/>
                <Route path="/mypropTypes" element={<MyPropTypes/>}/>
                <Route path="/mychildren" element={<MyChildren/>}/>
                <Route path="/grade_table" element={<GradeTable/>}/>
                <Route path="/school_year/*" element={<SchoolYear/>}/>
            </Routes>
        </div>
    ) 
}

export default Props;