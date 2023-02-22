import { AxiosPromise } from "axios";

import { api } from "./api";
import { blank_api } from "./blank_api";
import { GetAllPokemonsData } from "@/models/pokemons.service";

export const PokemonServices = {
  getPokemons: (): AxiosPromise<GetAllPokemonsData> => {
    return api.get("pokemon");
  },

  getPokemonsByTypes: (type: string): AxiosPromise<unknown> => {
    return api.get(`type/${type}`);
  },

  getPokemonData: (
    idOrName: string | number
  ): AxiosPromise<unknown> => {
    return api.get(`pokemon/${idOrName}`);
  },

  getNextOrPreviousPage: (url: string): AxiosPromise<unknown> => {
    return blank_api.get(url);
  },

  getPokemonDataByUrl: (url: string): AxiosPromise<unknown> => {
    return blank_api.get(url);
  },

  searchPokemon: (pokemonName: string): AxiosPromise<unknown> => {
    return api.get(`pokemon/${pokemonName}`);
  },
};
