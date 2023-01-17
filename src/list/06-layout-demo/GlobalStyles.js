import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        font-family: 'Noto Sans KR';
    }
    body {
        padding: 10px 20px;
        margin: 0;
    }
`

export default GlobalStyles;