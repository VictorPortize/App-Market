import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export const iconSize = height * 0.04;
export const Container = styled.View`
  width: 90%;
  border-width: 1px;
  padding: 10px 20px;
  align-self: center;
  align-items: center;
  flex-direction: row;
  background-color: #fdcff320;
  border-color: #c297b8;
  margin-top: 16px;
`;

export const Name = styled.Text`
  font-size: ${height * 0.024}px;
  flex: 1;
  padding-left: 15px;
`;

export const ContainerIcon = styled.TouchableOpacity``;
