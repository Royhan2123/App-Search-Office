/* eslint-disable react/self-closing-comp */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import { colors } from '../../../assets/style/Colors';
import Header from '../../components/Header';

const BookingScreen = () => {
  return (
    <View style={style.container}>
      <Header
        title="Booking"
        subtitle="Space available for today"
        showRightButton
      />
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
