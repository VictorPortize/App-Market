import React, {useState, useEffect} from 'react';
import {
  Modal,
  Container,
  ContainerTitle,
  Title,
  iconSize,
  bottomSize,
  ContainerEmpty,
  EmptyText,
} from './styles';
import Items from './component/item';
import ModalNewItem from './component/modalItem';
import {Animated, FlatList} from 'react-native';
import {useRef} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import useItems from '../../../context/useItens';
import {Item} from '../../../models/Item';

interface Props {
  onClose: () => void;
  onAdd: (product: Item) => void;
}

const BottomSheet: React.FC<Props> = ({onClose, onAdd}) => {
  const translateY = useRef(new Animated.Value(-bottomSize)).current;
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const {listItem, cart} = useItems();
  const [product, setProduct] = useState<Item>({} as Item);

  function handleAnimation() {
    Animated.timing(translateY, {
      toValue: open ? -bottomSize : 0,
      useNativeDriver: true,
    }).start(() => {
      if (open) {
        onClose();
      }
      setOpen(true);
    });
  }

  useEffect(() => {
    handleAnimation();
  }, []);

  function handleNewItem(product: Item) {
    setVisible(false);
    onAdd(product);
    onClose();
  }
  function handleClose() {
    setVisible(false);
  }

  function onAddItem(product: Item) {
    //onAdd(id);
    //onClose();
    setProduct(product);
    setVisible(true);
  }

  function getListItems(): Array<Item> {
    let items = [...listItem];
    let cartProductNames = cart.map((item) => item.nome);
    let itemsToBuy = items.filter(
      (item) => !cartProductNames.includes(item.nome),
    );

    return itemsToBuy;
  }

  const items = getListItems();

  return (
    <Modal>
      <ModalNewItem
        onClose={handleClose}
        dados={product}
        visible={visible}
        onPress={handleNewItem}
      />
      <Container
        style={{
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [-bottomSize, 0],
                outputRange: [bottomSize, 0],
              }),
            },
          ],
        }}>
        <ContainerTitle>
          <Title>Produtos cadastrados</Title>
          <Icon
            name="closecircle"
            color="#DE89BE"
            onPress={handleAnimation}
            size={iconSize}
          />
        </ContainerTitle>
        <FlatList
          data={items}
          ListEmptyComponent={() => (
            <ContainerEmpty>
              <EmptyText>Lista vazia...</EmptyText>
            </ContainerEmpty>
          )}
          numColumns={2}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => <Items addItem={onAddItem} {...item} />}
        />
      </Container>
    </Modal>
  );
};

export default BottomSheet;
