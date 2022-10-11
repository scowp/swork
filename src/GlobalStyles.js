import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap');

    body {
        font-family: 'Poppins', sans-serif;
        background-color: white;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }
    a:link, a:visited {
    text-decoration: none;
    }
    a:active {
    text-decoration: none
    }
    .container {
        max-width: 80%;
        margin: 0 auto;
    }
    input[type=text], input[type=email], input[type=password]{
        all: unset;
        width: 500px;
        height: 30px;
        padding: 5px 10px;
        border-radius: 8px;
        border: solid 1px rgba(0,0,0,0.5);
    }

    .btn {
        cursor: pointer;
        background-color: #0568FD;
        color: white;
        border: solid 2px #0568FD;
        width: 170px;
        height: 40px;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 500;
        transition: background-color 0.2s;
        margin-right: 20px;
    }

    .btn:hover {
        background-color: #134da5;
        border: solid 2px #134da5;
    }
    
`;
 
export default GlobalStyle;