import React from 'react';
import { Image, StatusBar } from 'react-native';
import logoImg from '../../assets/logo.png';
import Colors from '../../styles/Colors';
import { Container, ContainerImg, ContainerCad, Title } from './styles';
import Button from '../../components/Button';

const Home: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.champagne} />
      <Container>
        <ContainerImg>
          <Image source={logoImg} />
        </ContainerImg>

        <ContainerCad>
          <Title>Faça seu cadastro</Title>

          <Button onPres="Register" cor={Colors.lightYellow}>
            QUERO SER MENTOR
          </Button>
          <Button onPres="Register" cor={Colors.secondary}>
            QUERO SER MENTORADO
          </Button>

          <Title>Já tem cadastro? Faça seu login</Title>
          <Button onPres="Login" cor={Colors.primary}>
            LOGAR
          </Button>
        </ContainerCad>
      </Container>
    </>
  );
};

export default Home;
