import React from 'react';
import {Container, Image, Title} from './styles';
import {Item} from '../../../../models/Item';

interface Props extends Item {
  addItem: (product: Item) => void;
}

const image = {
  uri: 'https://radio93fm.com.br/wp-content/uploads/2019/02/produto.png',
};

const ItemList: React.FC<Props> = ({nome, id, foto, addItem, tipo, preco}) => {
  return (
    <Container onPress={() => addItem({id, nome, tipo, preco})}>
      <Image source={foto ? foto : image} />
      <Title>{nome}</Title>
    </Container>
  );
};

export default ItemList;
