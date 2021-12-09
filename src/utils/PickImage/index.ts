import ImagePicker, {Image} from 'react-native-image-crop-picker';
export const pickImage = async (): Promise<Image | undefined> => {
  try {
    return await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    });
  } catch (error) {
    console.log(error);
  }
};
