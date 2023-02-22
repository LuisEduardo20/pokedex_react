import React from "react";
import { Input, InputGroup, Grid, Row, Col } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";

const styles = {
  marginBottom: 10,
};

const CustomInputGroupWidthButton = ({
  placeholder,
  ...props
}: any) => (
  <InputGroup {...props} inside style={styles}>
    <Input placeholder={placeholder} />
    <InputGroup.Button>
      <SearchIcon />
    </InputGroup.Button>
  </InputGroup>
);

type Props = {
  placeholder: string;
};

const TextInput = ({ placeholder }: Props) => {
  return (
    <CustomInputGroupWidthButton
      size='lg'
      placeholder={placeholder}
    />
  );
};

export default TextInput;
