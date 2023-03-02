import React from "react";

import { LoadingProvider } from "./useLoading";
import { PokemonProvider } from "./usePokemon";

export interface IHookProps {
  children: React.ReactNode;
}

//? Agrupador de providers dos hooks personalizados

export const AppProvider: React.FC<IHookProps> = ({ children }) => {
  return (
    <LoadingProvider>
      <PokemonProvider>{children}</PokemonProvider>
    </LoadingProvider>
  );
};
