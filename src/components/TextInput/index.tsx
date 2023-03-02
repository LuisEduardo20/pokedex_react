import React from "react";
import { Input, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { usePokemon } from "@/hooks/usePokemon";

const styles = {
  marginBottom: 10,
};

const CustomInputGroupWithButton = ({
  placeholder,
  ...props
}: any) => {
  const { setSearchPokemonName } = usePokemon();

  return (
    <InputGroup {...props} inside style={styles}>
      <Input
        placeholder={placeholder}
        onChange={(text) => setSearchPokemonName(text)}
      />
      <InputGroup.Button>
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
