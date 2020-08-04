import styled from 'styled-components/native';
import {Dimensions, Animated} from 'react-native';

const {height} = Dimensions.get('window');

const heightClose = height * 0.04;
export const iconSize = height * 0.025;

export const Container = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  margin-top: 15px;
  z-index: 2;
`;

export const Image = styled.Image`
  width: 90%;
  height: 80px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Modal = styled.Modal``;
export const ContainerModal = styled.View`
  height : 100%
  width : 100%;
  background-color : #00000070;
  align-items : center;
  justify-content : center
`;

export const ContainerNewItem = styled.View`
  width: 80%;
  background-color: white;
  padding: 20px 0px;
  border-radius: 15px;
`;

export const ProductName = styled.Text`
  font-size: ${height * 0.025}px;
  font-weight: bold;
  text-align: center;
  padding: 0px 20px;
`;

export const Label = styled.Text`
  padding: 15px;
  font-size: ${height * 0.022}px;
`;

export const Input = styled.TextInput`
  font-size: ${height * 0.023}px;
  padding-left: 15px;
  width: 90%;
  align-self: center;
  border-color: #c297b8;
  border-width: 1px;
`;
export const ContainerButton = styled.TouchableOpacity`
  width: 90%;
  align-self: center;
  height: 48px;
  background-color: #c297b8;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;
export const TextButton = styled.Text`
  font-size: ${height * 0.025}px;
  font-weight: bold;
  color: white;
`;
export const ContainerClose = styled.TouchableOpacity`
  background-color: white;
  border-width: 2px;
  border-color: #c297b8;
  position: absolute;
  width: ${heightClose}px;
  height: ${heightClose}px;
  right: -${heightClose / 4}px;
  top: -${heightClose / 2}px;
  border-radius: ${heightClose / 2}px;
  align-items: center;
  justify-content: center;
`;
