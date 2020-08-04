import React, {useState} from 'react';
import {Item} from '../../../../models/Item';
import {
  Modal,
  ContainerModal,
  ContainerNewItem,
  ProductName,
  Label,
  Input,
  ContainerButton,
  TextButton,
  ContainerClose,
  iconSize,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useEffect} from 'react';

interface Props {
  onClose: () => void;
  onPress: (product: Item) => void;
  visible: boolean;
  dados: Item;
}

const ModalNewItem: React.FC<Props> = ({
  onPress,
  onClose,
  visible,
  dados: {tipo, nome, preco, id},
}) => {
  const [quantidade, setQuantidade] = useState(0);
  const [precoItem, setPrecoItem] = useState(preco);

  useEffect(() => {
    if (preco != undefined) {
      setPrecoItem(preco);
    }
  }, [preco]);

  function handleNewItem() {
    if (quantidade <= 0 || precoItem === '') {
      return;
    }
    onPress({
      nome,
      preco: precoItem.replace(',', '.'),
      quantidade,
      id,
      tipo,
    });
  }

  return (
    <Modal visible={visible} transparent>
      <ContainerModal>
        <ContainerNewItem>
          <ProductName>{nome}</ProductName>
          <Label>Quantidade:</Label>
          <Input
            value={quantidade}
            onChangeText={setQuantidade}
            keyboardType={'numeric'}
            placeholder={'Quantidade'}
          />
          <Label>
            Preço do produto por {`${tipo === 'KG' ? 'kilo' : 'unidade'}`}
          </Label>
          <Input
            value={precoItem}
            onChangeText={setPrecoItem}
            keyboardType={'numeric'}
            placeholder={'Preço'}
          />
          <ContainerButton onPress={handleNewItem}>
            <TextButton>Adicionar</TextButton>
          </ContainerButton>
          <ContainerClose onPress={onClose}>
            <Icon name="close" color="#DE89BE" size={iconSize} />
          </ContainerClose>
        </ContainerNewItem>
      </ContainerModal>
    </Modal>
  );
};

export default ModalNewItem;
