import styled from 'styled-components/native';
import {Dimensions, Animated} from 'react-native';

const {height} = Dimensions.get('window');

export const iconSize = height * 0.05;
export const bottomSize = height * 0.45;

export const Modal = styled.View`
  position: absolute;
  background-color: #00000050;
  width: 100%;
  height: 100%;
`;
export const Container = styled(Animated.View)`
  background-color: white;
  height: ${bottomSize}px;
  width: 100%;
  position: absolute;
  bottom: 0;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-width: 1px;
  elevation: 5;
`;

export const ContainerTitle = styled.View`
  align-self: center;
  padding: 10px 40px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ContainerItems = styled.View``;

export const Item = styled.View`
  width: 100px;
  height: 100px;
  margin: 20px;
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
