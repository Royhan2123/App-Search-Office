/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, Text, View} from 'react-native';
import {Gs} from '../../../assets/style/GlobalStyle';

const Succes = () => {
  return (
    <View>
      <Text style={style.text}>Succes Screen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    ...Gs.textBlack,
  },
});

export default Succes;
