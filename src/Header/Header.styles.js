import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: ${(props) => props.headerheight}px;

  svg {
    top: 20px;
    margin: 20px;
  }
`;
