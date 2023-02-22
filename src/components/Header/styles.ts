import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const LogoContainer = styled.div`
  height: 40%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
