import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../assets/style/Colors';
import Header from '../../components/Header';
import CardDetail from '../../components/CardDetail';
import {Gs} from '../../../assets/style/GlobalStyle';
import InputText from '../../components';
import { useNavigation } from '@react-navigation/native';

const BookingScreen = () => {
  const navigation = useNavigation();

  const [totalDays, stateTotalDays] = useState();
  const [date, stateDate] = useState();
  const [complete, stateComplete] = useState();
  const [phone, statePhone] = useState();

  const form = [
    {
      label: 'Total Days',
      placeholder: 'Total Days',
      icon: require('../../../assets/icons/days.png'),
      value: {totalDays},
      onValuChange: {stateTotalDays},
    },
    {
      label: 'Date start at',
      placeholder: 'Date start at',
      icon: require('../../../assets/icons/calendar.png'),
      value: {date},
      onValuChange: {stateDate},
    },
    {
      label: 'Complete name',
      placeholder: 'Complete name',
      icon: require('../../../assets/icons/user.png'),
      value: {complete},
      onValuChange: {stateComplete},
    },
    {
      label: 'Phone number',
      placeholder: 'Phone number',
      icon: require('../../../assets/icons/phone.png'),
      value: {phone},
      onValuChange: {statePhone},
    },
  ];

  const renderBookingDetail = () => {
    return (
      <View style={style.section}>
        <Text style={style.sectionTitle}>Your Space</Text>
        <CardDetail />
      </View>
    );
  };

  const renderBookingInformation = () => {
    return (
      <View style={style.section}>
        <Text style={[Gs.h3, Gs.textBlack]}>Booking Information</Text>
        <Text style={Gs.textGrey}>Lorem ensure data valid cant changes</Text>
        {form.map((val, idx) => {
          return (
            <InputText
              key={idx}
              label={val.label}
              placeholder={val.placeholder}
              icon={val.icon}
            />
          );
        })}
      </View>
    );
  };

  const renderProceedPayment = () => {
    return (
      <View style={style.section}>
        <TouchableOpacity style={style.proceedButton} onPress={() => {
          navigation.navigate('Checkout');
        }}>
          <Text style={[Gs.h4,  Gs.textWhite]}>Proceed to Payment</Text>
          <Image source={require('../../../assets/icons/arrow_right_white.png')}
          style={style.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={style.termsConditionButton}>
          <Text>Read Terms & All Condition </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={style.container}>
      <Header
        title="Booking"
        subtitle="Space available for today"
        showRightButton
      />
      <View>
        <ScrollView>
          {renderBookingDetail()}
          {renderBookingInformation()}
        </ScrollView>
        {renderProceedPayment()}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sectionTitle: {
    ...Gs.h3,
    ...Gs.textBlack,
    marginBottom: 12,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  proceedButton: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    ...Gs.cornerMD,
    backgroundColor: colors.primary,
    padding: 14,
  },
  icon: {
    marginLeft: 4,
  },
  termsConditionButton: {
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    padding: 14,
  },
});

export default BookingScreen;
