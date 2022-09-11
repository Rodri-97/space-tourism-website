import styled from 'styled-components';
import { minimalDesktopWidth } from '../../helpers/styleData';

export const StyledTechnology = styled.main`
  .page-title {
    text-align: center;
    padding: 20px 0;
  }
`;

export const StyledContent = styled.article`
  .img-container {
    .technology-img {
      width: 100%;
    }
  }

  .sliders {
    display: flex;
    gap: 10px;
    list-style: none;
    padding: 30px 0;

    .slider {
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      color: white;
      width: 50px;
      height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:hover {
        border-color: white;
        box-shadow: 0 0 5px 5px white;
      }
    }
  }

  .text-content {
    display: flex;
    flex-direction: column;
    text-align: center;

    .terminology {
      color: rgba(255, 255, 255, 0.5);
    }

    .technology-name {
      color: rgba(255, 255, 255, 0.8);
      font-size: 25px;
      padding-top: 10px;
    }

    .description {
      padding: 20px 50px;
    }
  }

  @media screen and (max-width: ${minimalDesktopWidth}px) {
    .sliders {
      flex-direction: row;
      justify-content: center;
    }
  }

  @media screen and (min-width: ${minimalDesktopWidth}px) {
    .sliders {
      flex-direction: column;
    }
  }
`;
