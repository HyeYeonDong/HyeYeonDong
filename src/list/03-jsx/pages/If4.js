import React from "react";
/**
* jsx 조건분기 (4) - 삼항 연산자를 사용한 조건 분기
* {조건 ? (조건이 참인 경우 출력 할 내용) : (그렇지 않은 경우 출력할 내용)}
* 조건이 거짓인 경우를 사용하고 싶지 않다면 null을 입력.
* || 연산자는 한쪽만 참이여도 참
**/
const If4 = () => {
    const isLogin = true;

    return (
        <div>
            <h2>IF4</h2>
            <small>변수 isLogin이 true 이면 로그아웃 버튼이 false 이면 로그인 버튼이 노출</small>
            <br />
            <br />
            {
                isLogin === true ?
                <button type="button">로그아웃</button> :
                <button type="button">로그인</button>
            }
        </div>
    )
}

export default If4;