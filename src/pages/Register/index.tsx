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

const Register: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerImg>
        <Image source={logoImg} />
      </ContainerImg>

      <ContainerInput>
        <Input name="nome" placeholder="Nome" />
        <Input name="email" placeholder="E-mail" />
        <Input name="telefone" placeholder="Telefone" />
        <Input name="password" placeholder="Senha" />
        <Input name="confirmPassword" placeholder="Confirme a senha" />
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
          <ButtonText>CADASTRAR</ButtonText>
        </ButtonRegister>
      </ContainerButton>
    </Container>
  );
};

export default Register;
