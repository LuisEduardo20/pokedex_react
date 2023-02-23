import styled from "styled-components";

import { PokemonTypes } from "@/models/pokemons.data";

export const Container = styled.div<{ types?: PokemonTypes[] }>`
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background: ${({ types, theme }) =>
    types &&
    (types.length > 1
      ? `linear-gradient(0deg, ${
          theme.colors.pokemons.types[
            types[0].type
              .name as keyof typeof theme.colors.pokemons.types
          ]
        }A6, ${
          theme.colors.pokemons.types[
            types[1].type
              .name as keyof typeof theme.colors.pokemons.types
          ]
        }A6)`
      : `${
          theme.colors.pokemons.types[
            types[0].type
              .name as keyof typeof theme.colors.pokemons.types
          ]
        }A6`)};
`;

export const PokemonDataContainer = styled.section`
  width: 90%;

  p {
    font-size: 1rem;
    color: white;
    text-transform: capitalize;

    display: flex;
    flex-direction: column;
    align-items: center;

    h6 {
      font-size: 1.5rem;
    }
  }
`;

export const TypesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;

  span {
    color: ${({ theme }) => theme.colors.white.white};
  }
`;

export const PokemonType = styled.span<{ type: string }>`
  width: 80px;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 5px;

  text-transform: capitalize;
  text-align: center;
  color: #525252;
  background-color: ${({ type, theme }) =>
    theme.colors.pokemons.types[
      type as keyof typeof theme.colors.pokemons.types
    ]};
`;
