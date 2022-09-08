import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: ${(props) => props.headerheight}px;

  .logo {
    background: url('./assets/shared/logo.svg');
    background-repeat: no-repeat;
    background-position: center;
    width: 50px;
  }
`;
