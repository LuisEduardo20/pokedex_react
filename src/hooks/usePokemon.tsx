import { GetAllPokemonsData } from "@/models/pokemons.service";
import React, { useState, useContext, createContext } from "react";

type PokemonContextProps = {
  children: React.ReactNode;
};

type PokemonProps = {
  pokemonsList: GetAllPokemonsData;
  setPokemonsList: React.Dispatch<
    React.SetStateAction<GetAllPokemonsData>
  >;
  searchPokemonName: string;
  setSearchPokemonName: React.Dispatch<React.SetStateAction<string>>;
};

const PokemonContext = createContext({} as PokemonProps);

export const PokemonProvider = ({
  children,
}: PokemonContextProps) => {
  const [searchPokemonName, setSearchPokemonName] =
    useState<string>("");
  const [pokemonsList, setPokemonsList] =
    useState<GetAllPokemonsData>({} as GetAllPokemonsData);

  return (
    <PokemonContext.Provider
      value={{
        pokemonsList,
        searchPokemonName,
        setPokemonsList,
        setSearchPokemonName,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error(
      "PokemonContext must be used with PokemonProvider"
    );
  }

  return context;
};
