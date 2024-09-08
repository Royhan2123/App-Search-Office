/* eslint-disable react/react-in-jsx-scope */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gs} from '../../../assets/style/GlobalStyle';
import {colors} from '../../../assets/style/Colors';

const CardDetail = (): JSX.Element => {
  return (
    <View style={style.container}>
      <View style={style.leftContent}>
        <Image
          source={require('../../../assets/images/item_2_a.png')}
          style={style.thumbnail}
        />
        <View>
          <Text style={[Gs.h2, Gs.textBlack]}>Indoorwork</Text>
          <View style={[Gs.flexRow, Gs.itemsCenter]}>
            <Image source={require('../../../assets/icons/star_yellow.png')}
            style={style.icon}/>
            <Text style={[Gs.h5, Gs.textBlack]}>4.5/5</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={[Gs.h4, Gs.textPrimary]}>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyBetween,
    ...Gs.cornerLG,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 24,
    borderWidth: 1,
    borderColor: colors.greyContainer,
  },
  leftContent: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
  },
  thumbnail: {
    ...Gs.cornerSM,
    width: 70,
    height: 70,
    marginRight: 12,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
});

export default CardDetail;
