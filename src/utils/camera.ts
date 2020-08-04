import ImagePicker, {
  ImagePickerOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';
import {Alert} from 'react-native';

const config = {
  allowsEditing: false,
  cameraType: 'back',
  cancelButtonTitle: 'Cancelar',
  chooseFromLibraryButtonTitle: 'Galeria',
  chooseWhichLibraryTitle: 'Galeria',
  maxHeight: 600,
  maxWidth: 600,
  noData: true,
  title: 'Foto do produto',
  takePhotoButtonTitle: 'Tirar foto',
} as ImagePickerOptions;

export function handlePicture(): Promise<ImagePickerResponse> {
  return new Promise((resolve) => {
    ImagePicker.showImagePicker(config, (resp: ImagePickerResponse) => {
      if (resp.error) {
        console.log(resp.error);
        Alert.alert('Erro', 'Ocorreu um erro ao salvar a imagem');
      } else {
        resolve(resp);
      }
    });
  });
}
