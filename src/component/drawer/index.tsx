import React from 'react';

import {Container, Image, ContainerItem, TextItem, iconSize} from './styles';
import Icons from 'react-native-vector-icons/Entypo';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

const Drawer: React.FC<DrawerContentComponentProps> = ({navigation}) => {
  function handleChangeScreenToProduct() {
    navigation.navigate('Produtos');
  }

  function handleChangeScreenToList() {
    navigation.navigate('Listagem');
  }

  return (
    <Container>
      <Image />
      <ContainerItem onPress={handleChangeScreenToProduct}>
        <TextItem>Produtos</TextItem>
        <Icons name="shopping-bag" size={iconSize} />
      </ContainerItem>
      <ContainerItem onPress={handleChangeScreenToList}>
        <TextItem>Carrinho</TextItem>
        <Icons name="shopping-cart" size={iconSize} />
      </ContainerItem>
    </Container>
  );
};

export default Drawer;
