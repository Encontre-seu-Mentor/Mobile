import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${Colors.champagne};
`;

export const ContainerImg = styled.View`
  align-items: center;
`;

export const ButtonMentor = styled(RectButton)`
  width: 100%;
  height: 60px;
  border-radius: 50px;
  background: ${Colors.lightYellow};
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonMentorado = styled(RectButton)`
  width: 100%;
  height: 60px;
  border-radius: 50px;
  background: ${Colors.secondary};
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonLogin = styled(RectButton)`
  width: 100%;
  height: 60px;
  border-radius: 50px;
  background: ${Colors.primary};
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text``;

export const ContainerCad = styled.View`
  width: 80%;
  margin-top: 50px;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 50px;
  font-size: 18px;
`;
