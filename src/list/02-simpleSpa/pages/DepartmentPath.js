import React from "react";
import { useParams } from "react-router-dom";

const DepartmentPath = () => {
    const params = useParams();
    console.group('useParams()의 리턴값 확인')
    console.debug(params);
    console.groupEnd();

    const departmentList = {
        item: [
            {id: 201, dname: '전자공학과', loc: '3호관'},
            {id: 202, dname: '기계공학과', loc: '4호관'}
        ]
    }

    let departmentItem = departmentList.item.find((v,i) => v.id === parseInt(params.id))
    
    if(!departmentItem) {
        return(<h2>존재하지 않는 데이터에 대한 요청입니다.</h2>)
    }
    return (
        <div>
            <h2>{departmentItem.dname}</h2>
            <ul>
                <li>학과 번호 : {departmentItem.id}</li>
                <li>학과 위치 : {departmentItem.loc}</li>
            </ul>
        </div>
    )
}

export default DepartmentPath;