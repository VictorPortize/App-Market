import React, {useState} from 'react';

import {
  Container,
  ContainerTitle,
  Title,
  iconSize,
  ContainerIcon,
  ContainerTotal,
  TextTotal,
  Total,
  ContainerEmpty,
  EmptyText,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListItem from './listItem';
import BottomSheet from './BottomSheet';
import {FlatList} from 'react-native-gesture-handler';
import useItens from '../../context/useItens';
import currencyFormatter from 'currency-formatter';

const Listagem: React.FC = () => {
  const [openBottom, setOpenBottom] = useState(false);
  const {cart, addToCart} = useItens();

  function addProductToCart(id: number) {
    addToCart(id);
  }

  function openBottomSheet() {
    setOpenBottom(true);
  }
  function closeBottomSheet() {
    setOpenBottom(false);
  }

  function handleCartPrice() {
    let preco = 0;
    cart.forEach((item) => {
      preco += item.preco * item.quantidade;
    });
    return currencyFormatter.format(preco, {
      decimal: '.',
      format: '%s',
      thousand: ',',
      precision: 2,
      symbol: '',
    });
  }

  return (
    <>
      <Container>
        <ContainerTitle>
          <Title>Listagem dos produtos:</Title>
          <ContainerIcon onPress={openBottomSheet}>
            <Icon name="add-shopping-cart" size={iconSize} color="#40434E" />
          </ContainerIcon>
        </ContainerTitle>
        <FlatList
          data={cart}
          ListEmptyComponent={() => (
            <ContainerEmpty>
              <EmptyText>Lista vazia...</EmptyText>
            </ContainerEmpty>
          )}
          numColumns={2}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item}) => <ListItem {...item} />}
        />
        <ContainerTotal>
          <TextTotal>Total:</TextTotal>
          <Total>R$:{handleCartPrice()}</Total>
        </ContainerTotal>
        {openBottom && (
          <BottomSheet onAdd={addProductToCart} onClose={closeBottomSheet} />
        )}
      </Container>
    </>
  );
};

export default Listagem;
