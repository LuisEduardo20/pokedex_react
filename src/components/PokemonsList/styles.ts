import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListContainer = styled.ul`
  width: 90%;
  margin-bottom: 2rem;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-content: center;
  place-items: center;
  grid-gap: 2.5rem;
`;
