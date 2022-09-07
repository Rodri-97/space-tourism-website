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
`;

export const StyledNavbar = styled.nav`
  display: flex;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.04);

  @media screen and (max-width: ${minimalTabletWidth}px) {
    flex-direction: column;
    min-height: 100%;
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
`;

export const StyledHamburger = styled(HamburgerIcon)`
  cursor: pointer;
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
  border: 3px solid transparent;
  font-size: 20px;

  span {
    display: none;
  }

  @media screen and (max-width: ${minimalTabletWidth}px) {
    border-radius: 20px;
    margin: 10px;
    padding: 20px;

    &:hover {
      background: white;
      color: black;
    }
  }

  @media screen and (min-width: ${minimalTabletWidth}px) {
    height: 100%;
    margin: 20px;

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
