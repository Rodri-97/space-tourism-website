import styled from 'styled-components';
import { minimalDesktopWidth } from './helpers/styleData';

export const StyledApp = styled.div`
  min-height: 100vh;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media screen and (min-width: ${minimalDesktopWidth}px) {
    main {
      padding-left: 100px;
    }
  }
`;
