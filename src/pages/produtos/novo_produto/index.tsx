import React, {useState} from 'react';

import {
  iconSize,
  Modal,
  Shadown,
  Container,
  Avatar,
  ContainerIcon,
  AvatarContainer,
  bigIconSize,
  Input,
  Label,
  ContainerMultiplos,
  Multiplo,
  Text,
  ContaineButton,
  TextButton,
  ContainerClose,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {handlePicture} from '../../../utils/camera';
import useItens from '../../../context/useItens';

interface Props {
  visible: boolean;
  onClose: () => void;
}

interface Image {
  uri?: string;
  name?: string;
  type?: string;
}

interface Item {
  nome: string;
  foto?: Image;
  preco: string;
  tipo: string;
}

const NovoProduto: React.FC<Props> = ({visible, onClose}) => {
  const [image, setImage] = useState<Image>({} as Image);
  const [nome, setNome] = useState<string>('');
  const [preco, setPreco] = useState<string>('');
  const [tipo, setTipo] = useState<string>('');
  const {saveItem} = useItens();

  function handleTipoChange(tipo: string) {
    setTipo(tipo);
  }

  function handleProductPicture() {
    handlePicture().then((resp) => {
      setImage({
        name: resp.fileName,
        type: resp.type,
        uri: resp.uri,
      });
    });
  }

  function handleNewProduct() {
    const data = {
      nome,
      tipo,
      preco,
    } as Item;
    if (image.uri != undefined) {
      data.foto = image;
    }
    saveItem(data);
    eraseModal();
  }

  function eraseModal() {
    setImage({});
    setNome('');
    setTipo('');
    setPreco('');
    onClose();
  }

  return (
    <Modal visible={visible} transparent>
      <Shadown>
        <Container>
          <ContainerClose onPress={onClose}>
            <Icon name="close" size={iconSize} color="#de89be" />
          </ContainerClose>
          <AvatarContainer onPress={handleProductPicture}>
            {image.uri ? (
              <Avatar source={image} />
            ) : (
              <Icon name="camera" color="white" size={bigIconSize} />
            )}
            <ContainerIcon>
              <Icon name="camera" color="white" size={30} />
            </ContainerIcon>
          </AvatarContainer>
          <Label>Nome do produto:</Label>
          <Input onChangeText={setNome} />
          <Label>Preço do produto:</Label>
          <Input onChangeText={setPreco} keyboardType="number-pad" />
          <ContainerMultiplos>
            <Multiplo
              selected={tipo == 'KG'}
              onPress={() => handleTipoChange('KG')}>
              <Text>KG</Text>
            </Multiplo>
            <Multiplo
              selected={tipo == 'UN'}
              onPress={() => handleTipoChange('UN')}>
              <Text>UN</Text>
            </Multiplo>
          </ContainerMultiplos>
          <ContaineButton onPress={handleNewProduct}>
            <TextButton>SALVAR</TextButton>
          </ContaineButton>
        </Container>
      </Shadown>
    </Modal>
  );
};

export default NovoProduto;
