import styled, {createGlobalStyle} from 'styled-components';
import image from './../images/image.jpg'

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${image});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center
    }
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;