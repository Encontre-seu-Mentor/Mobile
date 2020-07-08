import React from 'react';
import { Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import Colors from '../../styles/Colors';
import {
  Container,
  ButtonMentor,
  ButtonMentorado,
  ButtonLogin,
  ButtonText,
  ContainerImg,
  ContainerCad,
  Title,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.champagne} />
      <Container>
        <ContainerImg>
          <Image source={logoImg} />
        </ContainerImg>

        <ContainerCad>
          <Title>Faça seu cadastro</Title>

          <ButtonMentor
            onPress={() => {
              navigation.navigate('Register');
            }}
          >
            <ButtonText>QUERO SER MENTOR</ButtonText>
          </ButtonMentor>

          <ButtonMentorado
            onPress={() => {
              navigation.navigate('Register');
            }}
          >
            <ButtonText>QUERO SER MENTORADO</ButtonText>
          </ButtonMentorado>

          <Title>Já tem cadastro? Faça seu login</Title>

          <ButtonLogin
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            <ButtonText>ENTRAR</ButtonText>
          </ButtonLogin>
        </ContainerCad>
      </Container>
    </>
  );
};

export default Home;
