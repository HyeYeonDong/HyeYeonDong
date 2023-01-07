import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Meta from "../Meta";
import GradeTable2 from "./GradeTable2";

const SchoolYear = () => {
    return (
        <div>
            <h2>학년별 시험 점수</h2>
            <br />
            <nav>
                <Link to='1'>1학년</Link>
                <Link to='2'>2학년</Link>
                <Link to='3'>3학년</Link>
                <Link to='4'>4학년</Link>
            </nav>
            <Routes>
                <Route path=":level" element={<GradeTable2/>}/>
            </Routes>
        </div>
    )
}

export default SchoolYear;