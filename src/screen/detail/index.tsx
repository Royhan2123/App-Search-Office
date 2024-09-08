import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../assets/style/Colors';
import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';
import {Gs} from '../../../assets/style/GlobalStyle';
import { useNavigation } from '@react-navigation/native';

const DetailScreen = () => {

  const navigation = useNavigation();

  const slider = [
    require('../../../assets/images/item_2_a.png'),
    require('../../../assets/images/item_2_b.png'),
    require('../../../assets/images/item_2_c.png'),
  ];

  const renderSLider = () => {
    return (
      <FlatList
        data={slider}
        keyExtractor={({index}) => index}
        horizontal
        renderItem={({item}) => <SliderItem image={item} />}
        showsHorizontalScrollIndicator={false}
      />
    );
  };

  const renderTitle = () => {
    return (
      <View style={style.titleContainer}>
        <View>
          <Text style={[Gs.textBlack, Gs.h1]}>Homemade Office</Text>
          <Text style={[Gs.textGrey]}>Jalan Angga Bekerja No.10</Text>
        </View>
        <View style={Gs.flexRow}>
          <Image source={require('../../../assets/icons/star_yellow.png')} />
          <Text style={[Gs.textBlack, Gs.h3]}> 4.5/5</Text>
        </View>
      </View>
    );
  };

  const renderDescription = () => {
    return (
      <View style={style.descriptionContainer}>
        <Text style={[Gs.textBlack, Gs.h3, style.title]}>About</Text>
        <Text style={[Gs.textGrey]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </Text>
      </View>
    );
  };

  const renderOwner = () => {
    return (
      <View style={style.ownerContainer}>
        <Text style={[Gs.textBlack, Gs.h3, style.title]}>Space Owner</Text>
        <View style={[Gs.flexRow, Gs.itemsCenter]}>
          <Image
            source={require('../../../assets/images/profile_2.png')}
            style={style.ownerImage}
          />
          <View>
            <View style={Gs.flexRow}>
              <Text>JuneBug</Text>
              <Image
                source={require('../../../assets/icons/verified_orange.png')}
                style={style.icon}
              />
            </View>
            <Text style={[Gs.font700, Gs.textBlack]}>@junebug</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderBookingButton = () => {
    return (
      <View style={style.bookingButtonContainer}>
        <View>
          <Text style={[
            Gs.textPrimary,
            Gs.h1,
          ]}>$5,899</Text>
          <Text style={
            Gs.textGrey
          }>/day</Text>
        </View>
        <TouchableOpacity style={style.button} onPress={() => {
          navigation.navigate('Booking');
        }}>
          <Text style={Gs.textWhite}>Start Booking</Text>
          <Image
            source={require('../../../assets/icons/arrow_right_white.png')}
            style={style.icon}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={style.container}>
      <Header
        title="Office Details"
        subtitle="Space available for today"
        showRightButton
      />
      <ScrollView>
        {renderSLider()}
        {renderTitle()}
        {renderDescription()}
        {renderOwner()}
      </ScrollView>
      {renderBookingButton()}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  titleContainer: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyBetween,
    marginTop: 24,
    paddingHorizontal: 24,
  },
  title: {
    marginBottom: 10,
  },
  descriptionContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  ownerContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  ownerImage: {
    marginRight: 12,
  },
  icon: {
    marginLeft: 4,
  },
  bookingButtonContainer: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
    padding: 24,
  },
  button: {
    ...Gs.flexRow,
    ...Gs.cornerMD,
    paddingHorizontal: 72,
    paddingVertical: 14,
    backgroundColor: colors.primary,
  },
});

export default DetailScreen;
