import styled from 'styled-components';
import { ReactComponent as HamburgerIcon } from '../../assets/shared/icon-hamburger.svg';

export const StyledNavbar = styled.nav`
  border: 3px solid green;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    padding: 10px;

    &:hover {
      color: red;
    }
  }
`;

export const StyledHamburger = styled(HamburgerIcon)`
  cursor: pointer;
`;
