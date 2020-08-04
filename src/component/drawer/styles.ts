import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export const Container = styled.View``;

export const iconSize = height * 0.025;

export const Image = styled.Image.attrs({
  source: require('../../assets/carrinho.jpg'),
})`
  width: ${height * 0.2}px;
  align-self: center;
  height: ${height * 0.2}px;
  border-radius: ${height * 0.1}px;
  margin-top: 48px;
`;

export const ContainerItem = styled.TouchableOpacity`
  padding: 20px;
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextItem = styled.Text`
  font-size: ${height * 0.024}px;
  font-weight: bold;
`;
