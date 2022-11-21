import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset};
    html,body{
        font-size:10px;
        font-family: -apple-system, 'Noto Sans KR', sans-serif;
        background-color: ${(props) => props.theme.color.gray100};
    }
    a{
        text-decoration: none;
        color:#1d1d1d;
    }
    li{
        list-style: none;
    }
`;
