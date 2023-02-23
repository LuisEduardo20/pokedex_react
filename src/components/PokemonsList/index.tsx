import React, { useState } from "react";
import { Pagination } from "rsuite";

import * as S from "./styles";
import { GetAllPokemonsData } from "@/models/pokemons.service";
import PokemonCard from "../PokemonCard";

type Props = {
  pokemonsData?: GetAllPokemonsData;
  page: number;
  handleChangePage: (page: number) => void;
};

const PokemonsList = ({
  pokemonsData,
  page,
  handleChangePage,
}: Props) => {
  // const [activePage, setActivePage] = useState(1);

  // console.log("pokemonsData:", pokemonsData);

  return (
    <S.Container>
      <S.ListContainer>
        {pokemonsData?.results?.map((pokemonInfo, index) => (
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
        total={pokemonsData?.count || 0}
        limit={20}
        activePage={page}
        onChangePage={(newPage) => handleChangePage(newPage)}
      />
    </S.Container>
  );
};

export default PokemonsList;
