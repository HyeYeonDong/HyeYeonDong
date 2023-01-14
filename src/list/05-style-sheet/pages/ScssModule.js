import React from "react";
// 모듈css사용시에는 앞에 객체 이름을 붙여줘야한다.
import myScssMod from '../assets/scss/style.module.scss';

const ScssModule = () => {
    return (
        <div>
            <h2>ScssModule</h2>
            <div className={myScssMod.myScss}>
                {/* 객체이름.className  */}
                {/* join 은 배열에 있는 원소들을 하나의 값으로 만들어준다*/}
                {/* join() 사이에 띄어쓰기 및 쉼표를 넣으주면 배열 사이사이에 들어가서 반환*/}
                {/* ex join('-') = a-b-c-d */}
                <div className={[myScssMod.myScssBox, myScssMod.red].join(' ')}/>
                <div className={[myScssMod.myScssBox, myScssMod.green].join(' ')}/>
                <div className={[myScssMod.myScssBox, myScssMod.blue].join(' ')}/>
                <div className={[myScssMod.myScssBox, myScssMod.orange].join(' ')}/>
                <div className={[myScssMod.myScssBox, myScssMod.yellow].join(' ')}/>
                <div className={[myScssMod.myScssBox, myScssMod.pink].join(' ')}/>                
            </div>
        </div>
    )
}

export default ScssModule;