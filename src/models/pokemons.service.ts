export type ApiPokemonData = {
  name: string;
  url: string;
};

export type GetAllPokemonsData = {
  count: number;
  next: string;
  previous: string | null;
  results: ApiPokemonData[];
};
