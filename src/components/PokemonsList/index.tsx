import { GetAllPokemonsData } from "@/models/pokemons.service";
import React, { useState } from "react";
import { Pagination } from "rsuite";
import PokemonCard from "../PokemonCard";

type Props = {
  pokemonsData?: GetAllPokemonsData;
};

const PokemonsList = ({ pokemonsData }: Props) => {
  const [activePage, setActivePage] = useState(1);

  // console.log("pokemonsData:", pokemonsData);

  return (
    <div>
      <div>
        <ul>
          {pokemonsData?.results?.map((pokemonInfo, index) => (
            <PokemonCard
              pokemonData={pokemonInfo}
              key={`pokemon-${index}`}
            />
          ))}
        </ul>
      </div>

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
        activePage={activePage}
        onChangePage={setActivePage}
      />
    </div>
  );
};

export default PokemonsList;
