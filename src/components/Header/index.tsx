import React from "react";
import { SelectPicker } from "rsuite";
import TextInput from "../TextInput";

import * as S from "./styles";

type Props = {};

const data = [
  { label: "Fogo", value: "fire" },
  { label: "Água", value: "water" },
  { label: "Elétrico", value: "eletric" },
  { label: "Grama", value: "grass" },
  { label: "Gelo", value: "ice" },
  { label: "Lutador", value: "fighting" },
  { label: "Veneno", value: "poison" },
  { label: "Terra", value: "ground" },
  { label: "Voador", value: "flying" },
  { label: "Psíquico", value: "psychic" },
  { label: "Inseto", value: "bug" },
  { label: "Pedra", value: "rock" },
  { label: "Fantasma", value: "ghost" },
  { label: "Dragão", value: "dragon" },
  { label: "Aço", value: "steel" },
  { label: "Fada", value: "fairy" },
].map(({ label, value }) => ({ label, value }));

const Header = (props: Props) => {
  return (
    <S.Container>
      <S.LogoContainer>
        <img src='/public/pokemon-logo.png' alt='Pokemon Logo' />
      </S.LogoContainer>

      <div style={{ display: "flex", gap: "2rem" }}>
        <TextInput placeholder='Nome pokemon' />
        <SelectPicker
          data={data}
          searchable={false}
          style={{ width: "100%", height: "100%" }}
          placeholder='Tipo'
        />
      </div>
    </S.Container>
  );
};

export default Header;
