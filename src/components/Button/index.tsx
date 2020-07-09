import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  cor: string;
  onPres: string;
}

const Button: React.FC<ButtonProps> = ({ children, cor, onPres, ...rest }) => {
  const navigation = useNavigation();
  return (
    <Container
      {...rest}
      cor={cor}
      onPress={() => {
        navigation.navigate(onPres);
      }}
    >
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
