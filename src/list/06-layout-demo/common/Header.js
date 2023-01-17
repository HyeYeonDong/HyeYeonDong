import React from "react";
import styled from "styled-components";
import mq from '../MediaQuery';

const HeaderContainer = styled.header`
    .jumbotron {
        padding: 80px;
        text-align: center;
        background-color: #1abc92;
        color: white;
        
        h1 {
            font-size: 46px;
            font-weight: bold;
            margin-bottom: 15px;
        }
        p {
            font-size: 20px;
        }

        ${mq.maxWidth('sm')`
            background-color: red;
            padding: 40px;
            h1 {
                font-size: 32px;
                margin-bottom: 8px;
            }
            p {
                font-size: 12px;
            }
        `}
    }
`

const Header = () => {
    return (
        <HeaderContainer>
            <div className="jumbotron">
                <h1>My Website</h1>
                <p>React.js Layout Template</p>
            </div>
        </HeaderContainer>
    )
}

export default Header;