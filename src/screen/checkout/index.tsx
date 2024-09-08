import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../assets/style/Colors';
import Header from '../../components/Header';
import CardDetail from '../../components/CardDetail';
import {Gs} from '../../../assets/style/GlobalStyle';

const CheckoutScreen = () => {
  const checkoutData = [
    {
      label: 'Price per day',
      value: '$500',
      isBold: true,
    },
    {
      label: 'Total days',
      value: '18 days',
      isBold: false,
    },
    {
      label: 'Date',
      value: '22 Januari 2023',
      isBold: false,
    },
    {
      label: 'End',
      value: '2 Februari 2023',
      isBold: false,
    },
    {
      label: 'Tax 15%',
      value: '$890',
      isBold: true,
    },
    {
      label: 'Insurance',
      value: '$20.000',
      isBold: true,
    },
    {
      label: 'Grand total',
      value: '$2,899,000',
      isBold: true,
    },
  ];

  const borderBottom = {
    borderBottomWidth: 1,
    borderColor: colors.greyContainer,
  };

  const renderCheckoutDetail = () => {
    return (
      <View style={style.section}>
        <Text style={style.sectionTitle}>Your Space</Text>
        <CardDetail />
      </View>
    );
  };

  const renderCheckoutData = () => {
    return (
      <View style={style.section}>
        {checkoutData.map((val, idx) => {
          const isLast = idx === checkoutData?.length - 1;
          return (
            <View
              key={idx}
              style={[style.checkoutItem, isLast && borderBottom]}>
              <Text>{val.label}</Text>
              <Text>{val.value}</Text>
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <View style={style.container}>
      <Header title="Checkout" subtitle="Space available for today" />
      <View>
        <ScrollView>
          {renderCheckoutDetail()}
          {renderCheckoutData()}
          {/* {renderPaymentMethod()} */}
        </ScrollView>
        {/* {renderPayNoq()} */}
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
  checkoutItem: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
    paddingVertical: 14,
  },
});

export default CheckoutScreen;
