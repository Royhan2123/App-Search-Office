/* eslint-disable react/self-closing-comp */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { colors } from '../../../assets/style/Colors';
import Header from '../../components/Header';
import CardDetail from '../../components/CardDetail';

const BookingScreen = () => {

  const renderBookingDetail = () => {
    return(
      <View>
        <Text>Your Space</Text>
        <CardDetail/>
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
          {/* {renderBookingInformation()} */}
        </ScrollView>
        {/* {renderProceedPayment()} */}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default BookingScreen;
