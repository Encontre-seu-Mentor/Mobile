import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ContainerImg,
  ContainerInput,
  ContainerButton,
  ButtonBack,
  ButtonRegister,
  ButtonText,
} from './styles';
import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';

const Login: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerImg>
        <Image source={logoImg} />
      </ContainerImg>

      <ContainerInput>
        <Input name="nome" placeholder="Nome" />
        <Input name="email" placeholder="E-mail" />
        <Input name="password" placeholder="Senha" />
      </ContainerInput>

      <ContainerButton>
        <ButtonBack
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ButtonText>VOLTAR</ButtonText>
        </ButtonBack>

        <ButtonRegister
          onPress={() => {
            console.log('Salvo!!!');
          }}
        >
          <ButtonText>LOGAR</ButtonText>
        </ButtonRegister>
      </ContainerButton>
    </Container>
  );
};

export default Login;
