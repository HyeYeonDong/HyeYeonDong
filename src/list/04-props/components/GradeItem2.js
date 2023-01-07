import React from "react";
import PropTypes from 'prop-types';

const GradeItem2 = ({name, sex, kor, eng, math, sinc}) => {
    //parseInt -> 문자열 인자를 파싱하여 특정진수를 정수로 반환한다
    const sum = parseInt(kor+eng+math+sinc)
    const avg = parseInt(sum/4);
    
    return (
        <tr align='center'>
            <td><strong>{name}</strong></td>
            <td><strong>{sex}</strong></td>
            <td>{kor}</td>
            <td>{eng}</td>
            <td>{math}</td>
            <td>{sinc}</td>
            <td><strong>{sum}</strong></td>
            <td><strong>{avg}</strong></td>
        </tr>
    )
}

GradeItem2.propTypes = {
    name: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired
}
GradeItem2.defaultProps = {
    kor: 0,
    eng: 0,
    math: 0,
    sinc: 0
}
export default GradeItem2;