import styled from 'styled-components';
import {
  minimalDesktopWidth,
  minimalTabletWidth,
} from '../../helpers/styleData';

const infoPadding = 30;

export const StyledDestination = styled.main`
  color: white;
  padding: 0 30px;

  @media screen and (max-width: ${minimalDesktopWidth}px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  @media screen and (min-width: ${minimalTabletWidth}px) {
    padding: 50px 150px 0 150px;
  }

  @media screen and (min-width: ${minimalDesktopWidth}px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
  }
`;

export const ImageContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 300px;

  .destination-image {
    padding: 30px;
  }

  @media screen and (min-width: ${minimalDesktopWidth}px) {
    width: 450px;

    .destination-image {
      padding: 60px;
    }
  }
`;

export const InfoContainer = styled.article`
  .destinations-list {
    display: flex;
    flex-direction: row;
    list-style: none;

    .destination-element {
      cursor: pointer;
      border-bottom: 3px solid transparent;
      padding-bottom: 10px;
      margin-right: 20px;

      &:hover {
        border-bottom-color: rgba(255, 255, 255, 0.7);
      }
    }
  }

  .main-info {
    display: grid;
    grid-template-rows: repeat(2, 1fr);

    .selected-destination {
      font-size: 50px;
      font-weight: 100;
      padding: ${infoPadding}px 0;
    }

    .description {
      padding-bottom: ${infoPadding}px;
    }
  }

  .hr {
    border-color: rgba(125, 125, 125, 0.5);
  }

  .stats {
    padding: ${infoPadding}px 0;
    display: flex;

    .stat-container {
      display: flex;
      flex-direction: column;

      .stat {
        font-size: 30px;
      }
    }
  }

  @media screen and (max-width: ${minimalDesktopWidth}px) {
    .destinations-list {
      justify-content: center;
    }

    .stats {
      flex-direction: column;
      gap: ${infoPadding}px;
    }
  }

  @media screen and (min-width: ${minimalDesktopWidth}px) {
    padding-left: 30px;
    padding-top: 70px;

    .stats {
      flex-direction: row;
      gap: 50px;
    }
  }
`;
