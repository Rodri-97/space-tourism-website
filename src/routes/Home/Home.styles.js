import styled from 'styled-components';
import {
  minimalTabletWidth,
  minimalDesktopWidth,
} from '../../helpers/styleData';

export const StyledHome = styled.main`
  display: grid;

  @media screen and (max-width: ${minimalTabletWidth}px) {
    grid-template-rows: 4fr 3fr;
  }

  @media screen and (min-width: ${minimalDesktopWidth}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const StyledText = styled.section`
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;

  .titles-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .title {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 100px;
      font-weight: 100;
      color: white;
      letter-spacing: 10px;
    }
  }

  .text-container {
    line-height: 30px;
    padding: 0 30px;
  }

  @media screen and (max-width: ${minimalDesktopWidth}px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;

    .text-container,
    .titles-container {
      text-align: center;
    }
  }

  @media screen and (min-width: ${minimalTabletWidth}px) and (max-width: ${minimalDesktopWidth}px) {
    margin: 50px 150px;
  }

  @media screen and (min-width: ${minimalTabletWidth}px) {
    .text-container {
      text-align: left;
    }
  }

  @media screen and (min-width: ${minimalDesktopWidth}px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);

    > * {
      text-align: left;
    }

    .text-container {
      padding: 0 60px 0 0;
    }
  }
`;

export const StyledExplore = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .explore-btn {
    border: none;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    cursor: pointer;
    font-size: 30px;
    font-weight: 100;
    color: rgb(0, 0, 50);

    &:hover {
      box-shadow: 0 0 40px 10px white;
    }
  }
`;
