/* eslint-disable react/react-in-jsx-scope */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gs} from '../../../assets/style/GlobalStyle';
import {colors} from '../../../assets/style/Colors';
import {CommonActions, useNavigation} from '@react-navigation/native';

const Succes = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View>
        <Image
          source={require('../../../assets/images/item_1_a.png')}
          style={style.image}
        />
        <View style={style.overlay}>
          <View style={style.rating}>
            <Image source={require('../../../assets/icons/star_white.png')} />
            <Text style={[Gs.h5, Gs.textWhite]}>4.5/5</Text>
          </View>
          <View style={style.booked}>
            <Text style={[Gs.h5, Gs.textWhite]}>Booked</Text>
          </View>
          <View style={style.label}>
            <Text style={[Gs.h2, Gs.textWhite]}>Hajime</Text>
            <Text style={Gs.textWhite}>Pantai Utara No. 90</Text>
          </View>
        </View>
      </View>
      <View style={style.textContainer}>
        <Text style={[Gs.h1, Gs.textBlack]}>Succes Booking</Text>
        <Text style={[Gs.textCenter, Gs.textGrey]}>
          Your space is ready to use for your growing businees and life
        </Text>
      </View>
      <TouchableOpacity style={style.detailButton} onPress={() => {
        navigation.dispatch((
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Home'}],
          })
        ));
      }}>
        <Text style={[Gs.h4, Gs.textWhite]}>Back Home</Text>
        <Image
          source={require('../../../assets/icons/arrow_right_white.png')}
          style={style.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    ...Gs.cornerXL,
    width: 240,
    height: 320,
  },
  overlay: {
    ...Gs.cornerXL,
    width: 240,
    height: 320,
    backgroundColor: colors.transparentBlack,
    position: 'absolute',
  },
  rating: {
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    ...Gs.cornerLG,
    backgroundColor: colors.primary,
    padding: 14,
    width: 60,
    height: 60,
    position: 'absolute',
    right: -30,
    top: 30,
  },
  booked: {
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    ...Gs.cornerLG,
    backgroundColor: colors.primary,
    padding: 8,
    width: 100,
    height: 40,
    position: 'absolute',
    left: -50,
    bottom: 120,
  },
  label: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  textContainer: {
    ...Gs.itemsCenter,
    paddingHorizontal: 76,
    marginVertical: 30,
  },
  icon: {
    marginLeft: 4,
  },
  detailButton: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    ...Gs.cornerMD,
    backgroundColor: colors.primary,
    padding: 14,
  },
});

export default Succes;
