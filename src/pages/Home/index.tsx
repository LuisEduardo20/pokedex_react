import React, { useState } from "react";
import { useQuery } from "react-query";

import * as S from "./styles";
import { PokemonServices } from "@/services/pokemon.services";
import { Header, PokemonsList } from "@/components";
import { usePokemon } from "@/hooks/usePokemon";

type Props = {};

const Home = (props: Props) => {
  const { setPokemonsList } = usePokemon();

  const [page, setPage] = useState<number>(1);

  const { isLoading, error } = useQuery(
    ["pokemon", page],
    async () => {
      const pageOffset = (page - 1) * 20;

      const { data } =
        await PokemonServices.getPokemonsWithPagination(pageOffset);

      setPokemonsList(data);
    }
  );

  const handleChangePage = async (page: number) => setPage(page);

  return (
    <S.Container>
      <Header />
      <PokemonsList page={page} handleChangePage={handleChangePage} />
    </S.Container>
  );
};

export default Home;
