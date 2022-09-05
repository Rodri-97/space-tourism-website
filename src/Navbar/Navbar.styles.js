import styled from 'styled-components';
import Navbar from './Navbar';

export const StyledNavbar = styled(Navbar)`
  a {
    text-decoration: none;
    border: 3px solid red;

    &:hover {
      color: red;
    }
  }
`;
