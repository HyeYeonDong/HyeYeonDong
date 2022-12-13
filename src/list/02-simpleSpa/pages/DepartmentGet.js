import React from "react";
import { useLocation  } from "react-router-dom";

const DepartmentGet = () => {
    // 자바스크립트에서 location의 역할을 대신해줌.
    const location = useLocation();
    console.group('useLocation() 값 확인')
    console.log(location);
    console.groupEnd();
    return (
        <div>
            
        </div>
    )
}

export default DepartmentGet;