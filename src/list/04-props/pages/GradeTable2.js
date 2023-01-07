import React from "react";
import { useParams } from "react-router-dom";
import GradeItem2 from "../components/GradeItem2";
import GradeData2 from "../GradeData2";
import Meta from "../Meta";

const GradeTable2 = () => {
    //url을 통해 전달된 파라미터 추출
    const {level} = useParams();
    //파라미터를 이용하여 json의 key 이름 조합
    const key = `${level}학년`
    //json에서 필요한 데이터 추출
    const currentData = GradeData2[key];
    
    return (
        <div>
            <Meta title={`${key }::: React 연습문제`}/>
            <h2>{key}</h2>
            <table border='1' cellPadding='6'>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>성별</th>
                        <th>국어</th>
                        <th>영어</th>
                        <th>수학</th>
                        <th>과학</th>
                        <th>총점</th>
                        <th>평균</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((v, i) => {
                        return(<GradeItem2
                            key={i}
                            name={v.이름}
                            sex={v.성별}
                            kor={v.국어}
                            eng={v.영어}
                            math={v.수학}
                            sinc={v.과학}
                        />)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default GradeTable2;