import styled from 'styled-components';
import { minimalDesktopWidth, minimalTabletWidth } from './helpers/styleData';

const leftSpaceDesktop = 100;

export const StyledApp = styled.div`
  min-height: 100vh;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  main {
    min-height: 100vh;

    .page-title {
      font-weight: 100;
      letter-spacing: 2px;
      font-size: 15px;

      span {
        color: rgba(255, 255, 255, 0.5);
        font-weight: bold;
      }
    }
  }

  @media screen and (min-width: ${minimalTabletWidth}px) {
    main {
      .page-title {
        position: absolute;
        left: 30px;
      }
    }
  }

  @media screen and (min-width: ${minimalDesktopWidth}px) {
    main {
      padding-left: ${leftSpaceDesktop}px;

      .page-title {
        font-size: 20px;
        left: ${leftSpaceDesktop}px;

        span {
          font-size: 20px;
        }
      }
    }
  }
`;
