import React from "react";
/**
* jsx 조건분기 (3) - 조건식과 '||' 연산자 사용 
* {조건 || (조건이 거짓인 경우 출력 할 내용)}
* 조건이 거짓인 경우 출력되는 결과값 없음.
* || 연산자는 한쪽만 참이여도 참
**/
const If3 = () => {
    const articleList = undefined;
    return (
        <div>
            <h2>If3</h2>
            {articleList || <p>조회된 게시글이 없습니다.</p>}
        </div>
    )
}

export default If3;