import React from "react";
/**
* jsx 조건분기 (2) - 조건식과 '&&' 연산자 사용 
* {조건 && (조건이 참인 경우 출력 할 내용)}
* 조건이 거짓인 경우 출력되는 결과값 없음.
* & 연산자는 양쪽 조건이 모두 참일경우 참
**/
const If2 = () => {
    const login = true;

    return (
        <div>
            <h2>If2</h2>
            {login === true && <p>로그인 되셨습니다.</p>}
            {/* 같은 말 */}
            {/* {login && <p>로그인 되셨습니다.</p>}/ */}
            
        </div>
    )
}

export default If2;