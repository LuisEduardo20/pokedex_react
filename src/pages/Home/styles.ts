import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white.white};
  /* background-color: red; */
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 30% 1fr;
`;
