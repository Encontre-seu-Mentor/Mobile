import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInput } from './styles';

import Colors from '../../styles/Colors';

interface InputProps extends TextInputProps {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  return (
    <Container>
      <TextInput placeholderTextColor={Colors.silver} {...rest} />
    </Container>
  );
};

export default Input;
