import React from "react";

const Loop1 = () => {
    const creatListItems = (count) => {
        let li = [];
        for(let i = 1; i <= count; i++ ){
            //반복으로 처리되는 컴포넌트 요소는 각 항목을 식별하기 위해 고유한 값을 갖는 key 속성을 포함해야 한다 (react 권고사항)
            //key는 화면에 출력되지는 않음
            li.push(<li key={i}>Item {i}</li>)
        }
        return li;
    }
    return (
        <div>
            <h2>Loop1</h2>
            <br />
            <ul>{creatListItems(5)}</ul>
        </div>
    )
}

export default Loop1;