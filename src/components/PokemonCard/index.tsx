import React from "react";
import { useQuery } from "react-query";

import * as S from "./styles";
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
    <S.Container types={data?.data.types}>
      <div>
        <img
          src={data?.data?.sprites?.front_default}
          alt='Pokemon sprite'
        />
      </div>

      <S.PokemonDataContainer>
        <p>
          <h6>#{data?.data?.id}</h6> {data?.data?.name}
        </p>

        <S.TypesContainer>
          {data?.data.types.map((type) => (
            <S.PokemonType type={type.type.name}>
              {type.type.name}
            </S.PokemonType>
          ))}
        </S.TypesContainer>
      </S.PokemonDataContainer>
    </S.Container>
  );
};

export default PokemonCard;
