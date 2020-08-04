import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import {Container, Name, iconSize, ContainerIcon} from './styles';
import {Item} from '../../../models/Item';
import useItems from '../../../context/useItens';

const Produto: React.FC<Item> = ({nome, id}) => {
  const {removeItem} = useItems();
  function handleRemoveItem() {
    removeItem(id);
  }

  return (
    <Container>
      <Icon color="#40434E" size={iconSize} name="shopping-bag" />
      <Name>{nome}</Name>
      <ContainerIcon onPress={handleRemoveItem}>
        <Icon color="#40434E" size={iconSize} name="close-a" />
      </ContainerIcon>
    </Container>
  );
};

export default Produto;
