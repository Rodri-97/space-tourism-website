import styled from 'styled-components';
import {
  minimalTabletWidth,
  minimalDesktopWidth,
} from '../../helpers/styleData';

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

    .terminology {
      color: rgba(255, 255, 255, 0.5);
    }

    .technology-name {
      color: rgba(255, 255, 255, 0.8);
      font-size: 25px;
      padding-top: 10px;
    }

    .description {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }

  @media screen and (max-width: ${minimalTabletWidth}px) {
    .text-content {
      .description {
        padding-left: 50px;
        padding-right: 50px;
      }
    }
  }

  @media screen and (min-width: ${minimalTabletWidth}px) {
    display: grid;

    .text-content {
      grid-area: text;
      margin-top: 70px;
    }

    .sliders {
      grid-area: sliders;
    }

    .img-container {
      grid-area: image;
    }
  }

  @media screen and (min-width: ${minimalTabletWidth}px) and (max-width: ${minimalDesktopWidth}px) {
    grid-template-areas: 'text' 'sliders' 'image';

    .text-content {
      .description {
        padding-left: 100px;
        padding-right: 100px;
      }
    }
  }

  @media screen and (max-width: ${minimalDesktopWidth}px) {
    .text-content {
      text-align: center;
    }

    .sliders {
      flex-direction: row;
      justify-content: center;
    }
  }

  @media screen and (min-width: ${minimalDesktopWidth}px) {
    grid-template-areas: 'sliders text image';
    padding-top: 70px;

    .sliders {
      flex-direction: column;
      justify-content: center;
    }

    .text-content {
      padding-left: 50px;

      .technology-name {
        font-size: 40px;
      }

      .description {
        padding-right: 100px;
      }
    }
  }
`;
