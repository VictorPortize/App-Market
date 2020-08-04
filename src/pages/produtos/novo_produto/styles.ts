import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export const iconSize = height * 0.05;
export const Modal = styled.Modal`
  flex: 1;
`;
export const Shadown = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #00000080;
`;
export const Container = styled.View`
  background-color: white;
  width: 80%;
  border-radius: 10px;
`;

export const bigIconSize = height * 0.1;
export const AvatarContainer = styled.TouchableOpacity`
  width: ${height * 0.2}px;
  align-items: center;
  justify-content: center;
  height: ${height * 0.2}px;
  align-self: center;
  background-color: #fdcff3;
  border-radius: ${height * 0.1}px;
  margin-top: 40px;
`;

export const Avatar = styled.Image`
  width: ${height * 0.2}px;
  height: ${height * 0.2}px;
  border-radius: ${height * 0.1}px;
`;

export const ContainerIcon = styled.View`
  width: ${height * 0.06}px;
  height: ${height * 0.06}px;
  align-items: center;
  justify-content: center;
  border-radius: ${height * 0.5}px;
  background-color: #de89be;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Label = styled.Text`
  font-size: ${height * 0.025}px;
  width: 85%;
  align-self: center;
  margin-top: 15px;
`;

export const Input = styled.TextInput`
  font-size: ${height * 0.025}px;
  width: 85%;
  background-color: #fdcff3;
  color: #40434e;
  padding-left: 15px;
  font-weight: bold;
  align-self: center;
`;

export const ContainerMultiplos = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Multiplo = styled.TouchableOpacity`
  height: ${height * 0.06}px;
  width: 35%;
  background-color: ${(props) => (props.selected ? '#de89be' : '#fdcff3')};
  align-items: center;
  justify-content: center;
`;
export const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: ${height * 0.025}px;
`;
export const ContaineButton = styled.TouchableOpacity`
  width: 85%;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: #de89be;
  height: ${height * 0.08}px;
  margin-bottom: 20px;
`;
export const TextButton = styled.Text`
  font-size: ${height * 0.025}px;
  color: white;
  font-weight: bold;
`;
export const ContainerClose = styled.TouchableOpacity`
  width: ${height * 0.08}px;
  height: ${height * 0.08}px;
  border-color: #de89be;
  background-color: white;
  border-width: 4px;
  border-radius: ${height * 0.04}px;
  position: absolute;
  right: -5%;
  top: -5%;
  align-items: center;
  justify-content: center;
`;
