import React from "react";
import TextInput from "../TextInput";

import * as S from "./styles";

type Props = {};

const Header = (props: Props) => {
  return (
    <S.Container>
      <S.LogoContainer>
        <img src='/public/pokemon-logo.png' alt='Pokemon Logo' />
      </S.LogoContainer>

      <div>
        <TextInput placeholder='Pesquisar pokemon' />
      </div>
    </S.Container>
  );
};

export default Header;
