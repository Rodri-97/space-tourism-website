import styled from 'styled-components';
import { ReactComponent as HamburgerIcon } from '../../assets/shared/icon-hamburger.svg';
import { ReactComponent as CloseIcon } from '../../assets/shared/icon-close.svg';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  border: 3px solid green;

  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    padding: 10px;

    border: 3px solid blue;

    &:hover {
      color: red;
    }
  }
`;

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
`;

export const StyledHamburger = styled(HamburgerIcon)`
  cursor: pointer;
`;

export const StyledMobileNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 100;

  padding-top: 85px;

  border: 3px solid orange;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  right: 0;
  position: absolute;
`;

export const StyledLink = styled(Link)`
  color: white;

  span {
    font-weight: bold;
  }
`;
