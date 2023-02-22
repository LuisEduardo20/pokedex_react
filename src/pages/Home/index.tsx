import React, { useState } from "react";
import { useQuery } from "react-query";

import * as S from "./styles";
import Header from "@/components/Header";
import PokemonsList from "@/components/PokemonsList";
import { PokemonServices } from "@/services/pokemon.services";

type Props = {};

const Home = (props: Props) => {
  const [pokemonName, setPokemonName] = useState();

  const { data, isLoading, error } = useQuery(["pokemon"], () =>
    PokemonServices.getPokemons()
  );

  // console.log("isLoading:", isLoading);
  // console.log("data:", data?.data);

  return (
    <S.Container>
      <Header />
      <PokemonsList pokemonsData={data?.data} />
    </S.Container>
  );
};

export default Home;
