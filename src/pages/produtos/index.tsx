import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {
  Container,
  Title,
  ContainerTitle,
  ContainerIcon,
  iconSize,
  ContainerEmpty,
  EmptyText,
} from './styles';
import Icon from 'react-native-vector-icons/Fontisto';
import Produto from './produto';
import NovoProduto from './novo_produto';
import useItens from '../../context/useItens';

const Produtos: React.FC = () => {
  const {savedItems} = useItens();
  const [visible, setVisible] = useState(false);

  function handleCloseModal() {
    setVisible(false);
  }

  function handleOpenModal() {
    setVisible(true);
  }

  return (
    <Container>
      <NovoProduto visible={visible} onClose={handleCloseModal} />
      <ContainerTitle>
        <Title>Produtos cadastrados</Title>
        <ContainerIcon onPress={handleOpenModal}>
          <Icon name="shopping-bag-1" size={iconSize} color="#40434E" />
        </ContainerIcon>
      </ContainerTitle>
      <FlatList
        data={savedItems}
        ListEmptyComponent={() => (
          <ContainerEmpty>
            <EmptyText>Lista vazia...</EmptyText>
          </ContainerEmpty>
        )}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) => <Produto {...item} />}
      />
    </Container>
  );
};

export default Produtos;
