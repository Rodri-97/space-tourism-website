import styled from 'styled-components';
import { minimalTabletWidth } from '../../helpers/styleData';

const infoGap = 30;

export const StyledCrew = styled.main`
  .person-img {
    width: 250px;
    height: 300px;
    margin-top: 30px;
  }

  @media screen and (max-width: ${minimalTabletWidth}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: ${minimalTabletWidth}px) {
    display: grid;
    justify-items: center;
    grid-template-areas: 'title' 'info' 'image';
    margin-top: 50px;

    .page-title {
      grid-area: title;
      margin-bottom: 30px;
    }

    .person-img {
      grid-area: image;
      width: 350px;
      height: 400px;
    }

    .info-container {
      grid-area: info;
    }
  }
`;

export const InfoContainer = styled.article`
  .bullets {
    display: flex;
    flex-direction: row;
    gap: 10px;
    list-style: none;

    .bullet {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      width: 15px;
      height: 15px;
      cursor: pointer;

      &:hover {
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
  }

  .main-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;

    .role {
      color: rgba(255, 255, 255, 0.5);
    }

    .name {
      font-size: 25px;
    }
  }

  @media screen and (max-width: ${minimalTabletWidth}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${infoGap}px;
    padding: ${infoGap}px 30px;
  }

  @media screen and (min-width: ${minimalTabletWidth}px) {
    display: grid;
    justify-items: center;
    grid-template-areas: 'info' 'bio' 'bullets';
    gap: 10px;
    margin-top: 50px;

    .main-info {
      grid-area: info;
    }

    .bio {
      grid-area: bio;
      font-size: 20px;
      padding: 0 100px;
    }

    .bullets {
      grid-area: bullets;
    }
  }
`;
