import styled from 'styled-components';
import { minimalDesktopWidth } from '../../helpers/styleData';

export const StyledDestination = styled.main`
  display: flex;
  color: white;

  border: 3px solid green;

  @media screen and (max-width: ${minimalDesktopWidth}px) {
    flex-direction: column;
  }

  @media screen and (min-width: ${minimalDesktopWidth}px) {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.article`
  border: 3px solid red;
`;

export const InfoContainer = styled.article`
  border: 3px solid red;

  .destinations-list {
    .destination {
      cursor: pointer;
      border: 2px solid transparent;

      &:hover {
        border-bottom-color: white;
      }
    }
  }

  .stats {
    span {
      margin-right: 10px;
    }
  }
`;
