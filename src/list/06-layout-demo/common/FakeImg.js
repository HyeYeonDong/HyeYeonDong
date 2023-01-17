import React from "react";
import styled from "styled-components";

const FakeImgContainer = styled.div`
    background-color: #aaa;
    width: auto;
    padding: 20px;
    margin: 10px auto;
    height: ${props => `${props.height}px`};
`
// props가 여러개일 경우 jsx 문법에 의거해 {}로 감싸줘야 한다.
const FakeImg = ({height, children}) => {
    return (
        <FakeImgContainer height={height}>
            {children}
        </FakeImgContainer>
    )
}

export default FakeImg;