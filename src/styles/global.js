import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Ruda:wght@400;500;700&display=swap');

    *{
        box-sizing: border-box;
        font-family: 'Ruda', sans-serif;
        padding: 0;
        margin: 0;
    }

    body {
        background-color: #000;
        color: #fff
    }

    a{
        text-decoration: none;
        color: #f7d354;
        transition: 0.5s;

        :hover{
            color: #b8930c
        }
    }
    

`;

export default Global;