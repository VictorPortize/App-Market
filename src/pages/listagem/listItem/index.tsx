import React from 'react';

import {
  Container,
  Image,
  Title,
  ContainerPrice,
  Price,
  TextPrice,
  ContainerCount,
  TextCount,
  Count,
  ContainerTotal,
  TextTotal,
  Total,
  ContainerIcon,
  iconSize,
} from './styles';
import {Item} from '../../../models/Item';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/FontAwesome';
import useItems from '../../../context/useItens';

const image = {
  uri: 'https://radio93fm.com.br/wp-content/uploads/2019/02/produto.png',
};

const ListItem: React.FC<Item> = ({
  foto,
  quantidade,
  tipo,
  preco,
  nome,
  id,
}) => {
  const {remoteFromCart} = useItems();

  function removeItem() {
    remoteFromCart(id);
  }

  return (
    <Container>
      <Image source={foto ? foto : image} />
      <Title>{nome}</Title>
      <ContainerCount>
        <TextCount>Quantidade:</TextCount>
        <Count>
          {quantidade}
          {tipo.toLocaleLowerCase()}
        </Count>
      </ContainerCount>
      <ContainerPrice>
        <TextPrice>Preço:</TextPrice>
        <Price>R$:{preco}</Price>
      </ContainerPrice>
      <ContainerTotal>
        <TextTotal>Total:</TextTotal>
        <Total>
          R$:{' '}
          {currencyFormatter.format(Number(preco) * (quantidade || 1), {
            decimal: '.',
            format: '%s',
            thousand: ',',
            precision: 2,
            symbol: '',
          })}
        </Total>
      </ContainerTotal>
      <ContainerIcon onPress={removeItem}>
        <Icon name="close" color="#DE89BE" size={iconSize} />
      </ContainerIcon>
    </Container>
  );
};

export default ListItem;
