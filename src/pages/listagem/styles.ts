import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export const iconSize = height * 0.03;

export const Container = styled.View`
  flex: 1;
`;

export const ContainerTitle = styled.View`
  width: 90%;
  align-self: center;
  margin-top: 30px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ContainerIcon = styled.TouchableOpacity`
  background-color: #fdcff3;
  padding: 10px;
  border-radius: 20px;
`;

export const ContainerTotal = styled.View`
  height: ${height * 0.1}px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  flex-direction: row;
`;

export const TextTotal = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Total = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #de89be;
`;

export const ContainerEmpty = styled.View`
  background-color: rgba(255, 0, 0, 0.2);
  padding: 20px;
  margin-top: 40px;
  align-items: center;
`;

export const EmptyText = styled.Text`
  font-size: ${height * 0.024}px;
  font-weight: bold;
`;
