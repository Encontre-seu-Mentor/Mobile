import styled from 'styled-components/native';
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

export const ContainerCad = styled.View`
  width: 80%;
  margin-top: 50px;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 50px;
  font-size: 18px;
`;
