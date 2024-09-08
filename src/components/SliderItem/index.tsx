/* eslint-disable react/react-in-jsx-scope */
import {Image, StyleSheet, View} from 'react-native';
import {Gs} from '../../../assets/style/GlobalStyle';

interface SliderItemProps {
  image: any;
}

const SLider = ({image}: SliderItemProps): JSX.Element => {
  return (
    <View style={style.container}>
      <Image source={image} style={style.ImageBackground} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginRight: 40,
    marginBottom: 24,
    marginStart: 20,
    marginEnd: 20,
  },
  ImageBackground: {
    ...Gs.cornerXL,
    width: 240,
    height: 320,
  },
});

export default SLider;
