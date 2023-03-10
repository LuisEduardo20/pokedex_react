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

  return (
    <S.Container types={data?.data.types}>
      <div>
        <img
          src={data?.data?.sprites?.front_default || ""}
          alt='Pokemon sprite'
        />
      </div>

      <S.PokemonDataContainer>
        <p>
          #{data?.data?.id} <h6>{data?.data?.name}</h6>
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
