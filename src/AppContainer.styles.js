import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
