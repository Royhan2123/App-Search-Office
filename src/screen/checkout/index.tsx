import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../../assets/style/Colors';
import Header from '../../components/Header';
import CardDetail from '../../components/CardDetail';
import {Gs} from '../../../assets/style/GlobalStyle';
import {useNavigation} from '@react-navigation/native';

const CheckoutScreen = () => {
  const navigation = useNavigation();

  const checkoutData = [
    {
      label: 'Price per day',
      value: '$500',
      isBold: true,
      isPrimary: true,
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
      isPrimary: true,
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
              style={[style.checkoutItem, !isLast && borderBottom]}>
              <Text style={Gs.textBlack}>{val.label}</Text>
              <Text
                style={[
                  Gs.textBlack,
                  val.isBold && Gs.font700,
                  val.isPrimary && Gs.textPrimary,
                ]}>
                {val.value}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };

  const renderPaymentMethod = () => {
    return (
      <View style={style.section}>
        <Text style={style.sectionTitle}>Payment</Text>
        <View style={style.paymentContainer}>
          <TouchableOpacity style={style.paymentButton}>
            <Image source={require('../../../assets/icons/wallet.png')} />
            <Text style={[Gs.h5, Gs.textBlack]}>My Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.paymentButton}>
            <Image source={require('../../../assets/icons/mastercard.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderPayNoq = () => {
    return (
      <View style={style.section}>
        <TouchableOpacity
          style={style.proceedButton}
          onPress={() => {
            navigation.navigate('Succes');
          }}>
          <Text style={[Gs.h4, Gs.textWhite]}>Pay Now</Text>
          <Image
            source={require('../../../assets/icons/pay.png')}
            style={style.icon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <Header title="Checkout" subtitle="Ready to start working?" />
      <View style={style.content}>
        <ScrollView>
          {renderCheckoutDetail()}
          {renderCheckoutData()}
          {renderPaymentMethod()}
        </ScrollView>
        {renderPayNoq()}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    ...Gs.justifyBetween,
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
  paymentContainer: {
    ...Gs.flexRow,
    marginHorizontal: -10,
    marginBottom: 30,
  },
  paymentButton: {
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
    ...Gs.cornerLG,
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 52,
    borderWidth: 1,
    borderColor: colors.greyContainer,
    marginHorizontal: 14,
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
});

export default CheckoutScreen;
