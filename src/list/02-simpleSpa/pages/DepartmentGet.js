import React from "react";
import { useLocation  } from "react-router-dom";

const DepartmentGet = () => {
    // 자바스크립트에서 location의 역할을 대신해줌. 
    // json
    const location = useLocation();
    console.group('useLocation() 값 확인')
    console.log(location);
    console.groupEnd();

    //QueryString을 객체 형태로 변환하기
    const {search} = location;
    console.log(search);
    const query =  new URLSearchParams(search)
    console.group('query string 확인');
    console.log(query);
    console.groupEnd();
    //해당 객체를 가지고 get이라는 메소드를 사용해서 변수의 이름을 파라미터로 설정하면 해당 값을 가져올 수 있다.

    //추출된 변수값과 데이터타입 확인
    //%s -> 문자 포멧 출력 방법
    console.group('파라미터 처리 결과 확인');
    console.debug('요청된 학과 번호 값=%s (%s)' , query.get('id'), typeof query.get('id'));
    console.debug('요청된 메시지 내용=%s (%s)' , query.get('msg'), typeof query.get('msg'));
    console.groupEnd();

    //생서된 객체를  json형태로 변환
    console.group('파라미터 json변환 확인');
    const params = Object.fromEntries(query);
    console.debug(params);
    const {id , msg} = params;
    console.debug('요청된 학과 번호 값=%s (%s)' , id, typeof id);
    console.debug('요청된 메시지 내용=%s (%s)' , msg, typeof msg);
    console.groupEnd();

    const departmentList = {
        item : [
            {id: 101, dname: '컴퓨터공학과', loc: '1호관'},
            {id: 102, dname: '멀티미디어학과', loc: '2호관'},
        ]
    }
    //파라미터와 id가 일치하는 항목 찾기
    let departmentItem = departmentList.item.find((v,i) => v.id === parseInt(id))

    if(!departmentItem){
        return(<h3>존재하지 않는 데이터입니다.</h3>)
    }


    return (
        <div>
            <h2>{departmentItem.dname}</h2>
            <ul>
                <li>학과 번호: {departmentItem.id}</li>
                <li>학과 위치: {departmentItem.loc}</li>
            </ul>
        </div>
    )
}

export default DepartmentGet;