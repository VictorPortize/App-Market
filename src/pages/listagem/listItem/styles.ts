import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export const iconSize = height * 0.025;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-top: 20px;
`;

export const Image = styled.Image`
  height: 100px;
  width: 90%;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

export const ContainerPrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-top: 5px;
  align-items: center;
`;

export const TextPrice = styled.Text`
  font-size: 14px;
`;

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #40434e;
`;

export const ContainerCount = styled(ContainerPrice)``;

export const TextCount = styled(TextPrice)``;

export const Count = styled(Price)`
  font-size: 20px;
`;

export const ContainerTotal = styled.View`
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  margin-top: 5px;
  background-color: #de89be;
  align-items: center;
  padding: 0px 5px;
`;

export const TextTotal = styled.Text`
  color: white;
`;

export const Total = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const heightClose = height * 0.05;
export const ContainerIcon = styled.TouchableOpacity`
  position: absolute;
  background-color: white;
  right: ${heightClose / 4}px;
  top: ${-heightClose / 3}px;
  width: ${heightClose}px;
  height: ${heightClose}px;
  border-radius: ${heightClose / 2}px;
  border-color: #de89be;
  border-width: 2px;
  align-items: center;
  justify-content: center;
`;
