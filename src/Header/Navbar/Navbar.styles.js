import styled from 'styled-components';
import { ReactComponent as HamburgerIcon } from '../../assets/shared/icon-hamburger.svg';
import { ReactComponent as CloseIcon } from '../../assets/shared/icon-close.svg';
import {
  minimalDesktopWidth,
  minimalTabletWidth,
} from '../../helpers/screenSizes';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;

  nav {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.04);
  }
`;

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;

  @media screen and (min-width: ${minimalDesktopWidth}px) {
    padding: 0 100px 0 60px;
  }
`;

export const StyledHamburger = styled(HamburgerIcon)`
  cursor: pointer;
`;

export const StyledMobileNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 100;
  padding-top: ${(props) => props.headerheight}px;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  right: 0;
  position: absolute;
  margin-top: ${(props) => props.headerheight / 1.5}px;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  margin: 10px;
  padding: 20px;
  font-size: 20px;
  border-radius: 20px;

  span {
    display: none;
  }

  @media screen and (max-width: ${minimalTabletWidth}px) {
    &:hover {
      background: white;
      color: black;
    }
  }

  @media screen and (min-width: ${minimalTabletWidth}px) {
    height: 100%;
    padding: 0;
    margin: 20px;
    border-radius: 0;

    &:hover {
      border-bottom-color: white;
    }
  }

  @media screen and (min-width: ${minimalDesktopWidth}px) {
    span {
      display: block;
      font-weight: bold;
      margin-right: 10px;
    }
  }
`;
