import React from "react";
import { Input, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { usePokemon } from "@/hooks/usePokemon";
import { PokemonServices } from "@/services/pokemon.services";

const styles = {
  marginBottom: 10,
};

const CustomInputGroupWithButton = ({
  placeholder,
  ...props
}: any) => {
  const { searchPokemonName, setSearchPokemonName, setPokemonsList } =
    usePokemon();

  //TODO Fix search pokemon name pagination
  const handleSearchPokemon = async () => {
    if (searchPokemonName.length > 0) {
      const { data } = await PokemonServices.searchPokemon();

      const filteredPokemons = data?.results?.filter((pokemon: any) =>
        pokemon.name.includes(searchPokemonName)
      );

      setPokemonsList((oldValue) => ({
        ...oldValue,
        count: filteredPokemons.length,
        results: filteredPokemons.splice(0, 20),
      }));
    }
  };

  return (
    <InputGroup {...props} inside style={styles}>
      <Input
        placeholder={placeholder}
        onChange={(text) => setSearchPokemonName(text)}
      />

      <InputGroup.Button onClick={handleSearchPokemon}>
        <SearchIcon />
      </InputGroup.Button>
    </InputGroup>
  );
};

type Props = {
  placeholder: string;
};

const TextInput = ({ placeholder }: Props) => {
  return (
    <CustomInputGroupWithButton size='lg' placeholder={placeholder} />
  );
};

export default TextInput;
