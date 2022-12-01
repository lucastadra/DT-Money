import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --shape: #FFFFFF;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --blue: #5429CC;
        --light-blue: #6933FF;

        --red: #E52E4D;

        --green: #33CC95;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) { /* Telas até 1080px */
            font-size: 93.75%; /* 16px * 0,9375 = 15px */
        }

        @media (max-width: 720px) { /* Telas até 720px */
            font-size: 87.5%; /* 16px * 0,9375 = 14px */
        }
    }

    /* REM Sizing => 1rem = 16px */
    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
