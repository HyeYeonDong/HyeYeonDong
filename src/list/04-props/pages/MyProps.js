import React from "react";
import MyPropsSub from "../components/MyPropsSub";

const MyProps = () => {
    return (
        <div>
            <h2>MyProps</h2>
            <br />
            <MyPropsSub/>
            {/* ''안에 적을 경우는 문자열로 출력됨 */}
            <MyPropsSub name="민호" age='19'/>
            {/* {}안에 적을 경우 정수 및 변수*/}
            <MyPropsSub name="수영" age={20}/>
        </div>
    )
}

export default MyProps;