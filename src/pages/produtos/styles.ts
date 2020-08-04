import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export const iconSize = height * 0.04;
export const Container = styled.View`
  flex: 1;
`;
export const ContainerTitle = styled.View`
  margin-top: 16px;
  margin-bottom: 24px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;
export const ContainerIcon = styled.TouchableOpacity`
  padding: 5px;
`;
export const Title = styled.Text`
  font-size: ${height * 0.03}px;
  font-weight: bold;
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
