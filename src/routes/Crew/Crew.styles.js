import styled from 'styled-components';
import {
  minimalDesktopWidth,
  minimalTabletWidth,
} from '../../helpers/styleData';

const infoGap = 30;

export const StyledCrew = styled.main`
  @media screen and (max-width: ${minimalTabletWidth}px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .person-img {
      width: 250px;
      height: 300px;
      margin-top: 30px;
    }
  }

  @media screen and (min-width: ${minimalTabletWidth}px) {
    display: grid;
    justify-items: center;
    margin-top: 50px;

    .person-img {
      grid-area: image;
      width: 350px;
      height: 400px;
    }

    .info-container {
      grid-area: info;
    }
  }

  @media screen and (min-width: ${minimalTabletWidth}px) and (max-width: ${minimalDesktopWidth}px) {
    grid-template-areas: 'title' 'info' 'image';

    .page-title {
      grid-area: title;
      margin-bottom: 30px;
    }

    .person-img {
      margin-top: 50px;
    }
  }

  @media screen and (min-width: ${minimalDesktopWidth}px) {
    grid-template-areas: 'info image';
    grid-template-columns: repeat(2, 1fr);

    .person-img {
      margin-top: 150px;
      height: 500px;
      width: 400px;
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

    .role {
      color: rgba(255, 255, 255, 0.5);
    }

    .name {
      color: white;
    }
  }

  @media screen and (max-width: ${minimalTabletWidth}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${infoGap}px;
    padding: ${infoGap}px 30px;

    .main-info {
      .name {
        font-size: 25px;
      }
    }
  }

  @media screen and (min-width: ${minimalTabletWidth}px) {
    display: grid;
    grid-template-areas: 'info' 'bio' 'bullets';
    gap: 10px;
    margin-top: 50px;

    .main-info {
      grid-area: info;
    }

    .bio {
      grid-area: bio;
      font-size: 20px;
    }

    .bullets {
      grid-area: bullets;
    }
  }

  @media screen and (min-width: ${minimalTabletWidth}px) and (max-width: ${minimalDesktopWidth}px) {
    justify-items: center;

    .bio {
      padding: 0 100px;
    }
  }

  @media screen and (max-width: ${minimalDesktopWidth}px) {
    .main-info {
      text-align: center;
    }
  }

  @media screen and (min-width: ${minimalDesktopWidth}px) {
    justify-items: left;
    grid-template-rows: repeat(3, 1fr);

    .bullets {
      align-items: start;
    }

    .main-info {
      justify-content: end;

      .role {
        font-size: 25px;
      }

      .name {
        font-size: 40px;
      }
    }

    .bio {
      padding-right: 50px;
    }
  }
`;
