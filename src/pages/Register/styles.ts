import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  flex: 1;
  margin: 0 30px;
  align-items: center;
  justify-content: center;
  background: ${Colors.champagne};
`;

export const ContainerImg = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 24px;
`;

export const ContainerInput = styled.View`
  flex: 2;
  width: 100%;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonDefault = styled(RectButton)`
  width: 50%;
  height: 60px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

export const ButtonBack = styled(ButtonDefault)`
  background: ${Colors.twinkleBlue};
`;

export const ButtonRegister = styled(ButtonDefault)`
  width: 50%;
  height: 60px;
  border-radius: 50px;
  background: ${Colors.primary};
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

export const ButtonText = styled.Text``;
