import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import DepartmentGet from "./pages/DepartmentGet";
import DepartmentPath from "./pages/DepartmentPath";
// import Error from "../../Error";

const SimpleSpa = () => {
    return (
        <div>
            <h2>02 Simple-spa</h2>
            <br/>
            <nav>
                <Link to='/simpleSpa'><b>[HOME]</b></Link>
                <Link to='/simpleSpa/about'><b>[ABOUT]</b></Link>
                <Link to='/simpleSpa/departmentGet?id=101&msg=hello'><b>[컴퓨터공학과]</b></Link>
                <Link to='/simpleSpa/departmentGet?id=102&msg=world'><b>[멀티미디어공학과]</b></Link>
                <Link to='/simpleSpa/departmentPath/201/hello'><b>[전자공학과]</b></Link>
                <Link to='/simpleSpa/departmentPath/202/world'><b>[기계공학과]</b></Link>
            </nav>

            {/* 하위라우터의 경우 상위 경로 제외한 경로를 입력. */}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about/*" element={<About/>} />
                <Route path='/departmentGet' element={<DepartmentGet/>}/>
                <Route path='/departmentPath/:id/:msg' element={<DepartmentPath/>}/>
                {/* 에러 라우터는 항상 마지막에 위치해야함 */}
                {/* <Route path="/*" element={<Error/>} /> */}
            </Routes>
        </div>
    )
}

export default SimpleSpa;