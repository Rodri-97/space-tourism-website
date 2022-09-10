import styled from 'styled-components';
import {
  minimalDesktopWidth,
  minimalTabletWidth,
} from '../../helpers/styleData';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;

  .icon {
    width: 35px;
    height: 35px;
    cursor: pointer;
  }

  .hamburger-icon {
    background: url('./assets/shared/icon-hamburger.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const StyledNavbar = styled.nav`
  display: flex;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.04);

  @media screen and (max-width: ${minimalTabletWidth}px) {
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    z-index: 100;
    padding-top: ${(props) => props.headerheight}px;
  }

  @media screen and (min-width: ${minimalTabletWidth}px) {
    align-items: center;
    height: 100%;
  }

  @media screen and (min-width: ${minimalDesktopWidth}px) {
    padding: 0 100px 0 60px;
  }

  .close-icon {
    background: url('./assets/shared/icon-close.svg');
    background-repeat: no-repeat;
    background-position: center;
    right: 0;
    top: -40px;
    position: absolute;
    margin-top: ${(props) => props.headerheight / 1.5}px;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid transparent;

  span {
    display: none;
  }

  @media screen and (max-width: ${minimalTabletWidth}px) {
    border-radius: 20px;
    margin: 10px;
    padding: 20px;
    font-size: 20px;

    &:hover {
      background: white;
      color: black;
    }
  }

  @media screen and (min-width: ${minimalTabletWidth}px) {
    height: 100%;
    margin: 20px;
    font-size: 15px;

    &:hover {
      border-bottom-color: rgba(255, 255, 255, 0.4);
    }
  }

  @media screen and (min-width: ${minimalDesktopWidth}px) {
    span {
      display: block;
      font-weight: bold;
      margin-right: 10px;
      color: white;
    }
  }
`;
