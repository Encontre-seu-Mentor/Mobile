import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  border-color: ${Colors.primary};
  border-width: 2px;
  border-radius: 14px;
  margin-bottom: 8px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${Colors.primary};
`;
