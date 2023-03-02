import { AxiosPromise } from "axios";

import { api } from "./api";
import { blank_api } from "./blank_api";
import { GetAllPokemonsData } from "@/models/pokemons.service";
import { PokemonData } from "@/models/pokemons.data";

export const PokemonServices = {
  getPokemonsWithPagination: (
    offset: number
  ): AxiosPromise<GetAllPokemonsData> => {
    return api.get(`pokemon?limit=20&offset=${offset}`);
  },

  getPokemonsByTypes: (type: string): AxiosPromise<unknown> => {
    return api.get(`type/${type}`);
  },

  getPokemonData: (
    idOrName: string | number
  ): AxiosPromise<unknown> => {
    return api.get(`pokemon/${idOrName}`);
  },

  getNextOrPreviousPage: (
    url: string
  ): AxiosPromise<GetAllPokemonsData> => {
    return blank_api.get(url);
  },

  getPokemonDataByUrl: (url: string): AxiosPromise<PokemonData> => {
    return blank_api.get(url);
  },

  searchPokemon: (): AxiosPromise<any> => {
    return api.get(`pokemon`, {
      params: {
        offset: 0,
        limit: 5000,
      },
    });
  },
};
