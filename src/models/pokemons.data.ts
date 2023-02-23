export type PokemonAbility = {
  name: string;
  url: string;
};

export type PokemonAbilities = {
  ability: PokemonAbility[];
  is_hidden: boolean;
  slot: number;
};

export type GameIndices = {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
};

export type Move = {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  };
};

export interface PokemonForm extends PokemonAbility {}

export type Stats = {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
};

export type PokemonTypes = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PokemonSprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

export type PokemonData = {
  abilities: PokemonAbilities[];
  base_experience: number;
  forms: PokemonForm[];
  game_indices: GameIndices[];
  height: number;
  held_items: unknown[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: unknown[];
  species: {
    name: string;
    url: string;
  };
  sprites: PokemonSprites;
  stats: Stats[];
  types: PokemonTypes[];
  weight: number;
};
