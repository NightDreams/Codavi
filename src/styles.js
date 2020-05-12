import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap');
    {}
    body {
        box-sizing: border-box;
        margin: 0;
        font-family: Arial, serif;
    }
    
    *, *:before *:after {
        box-sizing:inherit;
    }
    ul, li, h1, h2, h3, p, button {
        margin: 0;
        padding:0;
    }
    ul {list-style: none;
    }
    button { 
        background: transparent;
        border: 0;
        outline: 0;
    }
`