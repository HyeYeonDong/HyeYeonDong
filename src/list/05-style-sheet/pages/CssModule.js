import React from "react";
import myStyles from '../assets/css/mystyle.module.css';

const CssModule = () => {
    return (
        <div>
            <h3>CssModule</h3>
            <h3>변수에 저장된 CSS 클래스</h3>
            <div className={myStyles.myCssBox}/>
            <br />
            <div>독립 클래스</div>
            <div className="myBorderBox"></div>
            {/* :global을 적었을 경우 아래처럼 class를 변수로 사용할 수 없음 */}
            {/* <div className={myStyles.myBorderBox}></div> */}
        </div>
    )
}

export default CssModule;