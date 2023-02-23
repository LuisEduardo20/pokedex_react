import React, { useState } from "react";
import { useQuery } from "react-query";

import * as S from "./styles";
import Header from "@/components/Header";
import PokemonsList from "@/components/PokemonsList";
import { PokemonServices } from "@/services/pokemon.services";
import { GetAllPokemonsData } from "@/models/pokemons.service";

type Props = {};

const Home = (props: Props) => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, error } = useQuery(
    ["pokemon", page],
    async () =>
      await PokemonServices.getPokemonsWithPagination((page - 1) * 20)
  );

  const handleChangePage = async (page: number) => {
    try {
      setPage(page);
    } catch (error) {
      console.log("error:", error);
    }
  };

  // console.log("isLoading:", isLoading);
  // console.log("data:", data?.data);

  return (
    <S.Container>
      <Header />
      <PokemonsList
        page={page}
        pokemonsData={data?.data}
        handleChangePage={handleChangePage}
      />
    </S.Container>
  );
};

export default Home;
