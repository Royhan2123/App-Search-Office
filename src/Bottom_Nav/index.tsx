import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gs} from '../../assets/style/GlobalStyle';
import {colors} from '../../assets/style/Colors';

const BottomNav = (): JSX.Element => {
  return (
    <View style={style.container}>
      <View style={style.tabContainer}>
        <TouchableOpacity style={style.activeTab}>
          <Image source={require('../../assets/icons/discover.png')} />
          <Text style={style.tabLabel}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tab}>
          <Image source={require('../../assets/icons/messages.png')} />
          <Text style={style.tabLabel}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tab}>
          <Image source={require('../../assets/icons/payment.png')} />
          <Text style={style.tabLabel}>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tab}>
          <Image source={require('../../assets/icons/settings.png')} />
          <Text style={style.tabLabel}>Setting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 100,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  tabContainer: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
  },
  activeTab: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.cornerXS,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: colors.secondary,
  },
  tab: {
    padding: 8,
  },
  tabLabel: {
    ...Gs.font600,
    ...Gs.textPrimary,
    marginLeft: 8,
  },
});

export default BottomNav;
