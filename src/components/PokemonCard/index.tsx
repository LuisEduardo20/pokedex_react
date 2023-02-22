import React from "react";
import { useQuery } from "react-query";

import { ApiPokemonData } from "@/models/pokemons.service";
import { PokemonServices } from "@/services/pokemon.services";

type Props = { pokemonData: ApiPokemonData };

const PokemonCard = ({ pokemonData }: Props) => {
  const { data, isLoading, error } = useQuery(
    [`pokemonData-${pokemonData.url}`],
    () => PokemonServices.getPokemonDataByUrl(pokemonData.url)
  );

  // console.log("data?.data:", data?.data);
  // console.log("pokemonData.url:", pokemonData.url);
  // console.log("pokemonData:", pokemonData);

  return (
    <div>
      <div>
        <img src={data?.data?.sprites?.front_default} alt='' />
      </div>

      <h6>{data?.data?.id || ""}</h6>
      <h6>{data?.data?.name || ""}</h6>
    </div>
  );
};

export default PokemonCard;
