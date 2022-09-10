import { createGlobalStyle } from 'styled-components';
import { minimalTabletWidth } from './helpers/styleData';

const iconMargin = 20;

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Bellefair', serif;
        color: rgba(255, 255, 255, 0.7);
    }

    html, body {
        min-height: 100%;
    }

    .logo {
        margin-left: ${iconMargin}px;
    }

    .hamburger-icon, .close-icon {
        margin-right: ${iconMargin}px;
    }

    @media screen and (max-width: ${minimalTabletWidth}px) {
        * {
            font-size: 15px;
        }
    }

    @media screen and (min-width: ${minimalTabletWidth}px) {
        * {
            font-size: 20px;
        }
    }
`;
