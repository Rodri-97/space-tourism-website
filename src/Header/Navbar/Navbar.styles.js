import styled from 'styled-components';
import Navbar from './Navbar';

export const StyledNavbar = styled(Navbar)`
  a {
    text-decoration: none;

    &:hover {
      color: red;
    }
  }
`;
