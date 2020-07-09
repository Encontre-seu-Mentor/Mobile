import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)<{ cor: string }>`
  width: 100%;
  height: 60px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background: ${props => props.cor};
`;

export const ButtonText = styled.Text`
  font-size: 16px;
`;

export const ContainerCad = styled.View`
  width: 80%;
  margin-top: 50px;
  align-items: center;
`;
