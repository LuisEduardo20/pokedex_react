import React from "react";
import { Pagination } from "rsuite";

import * as S from "./styles";
import PokemonCard from "../PokemonCard";
import { usePokemon } from "@/hooks/usePokemon";

type Props = {
  page: number;
  handleChangePage: (page: number) => void;
};

const PokemonsList = ({ page, handleChangePage }: Props) => {
  const { pokemonsList } = usePokemon();

  return (
    <S.Container>
      <S.ListContainer>
        {pokemonsList?.results?.map((pokemonInfo, index) => (
          <PokemonCard
            pokemonData={pokemonInfo}
            key={`pokemon-${index}`}
          />
        ))}
      </S.ListContainer>

      <Pagination
        prev
        last
        next
        first
        ellipsis
        maxButtons={10}
        size='lg'
        total={pokemonsList?.count || 0}
        limit={20}
        activePage={page}
        onChangePage={(newPage) => handleChangePage(newPage)}
      />
    </S.Container>
  );
};

export default PokemonsList;
