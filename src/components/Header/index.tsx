import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gs} from '../../../assets/style/GlobalStyle';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title: string;
  subtitle: string;
  showRightButton?: boolean;
}

const Header = ({
  title,
  subtitle,
  showRightButton,
}: HeaderProps): JSX.Element => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image />
      </TouchableOpacity>
      <View>
        <Text style={[Gs.textCenter, Gs.h1, Gs.textBlack]}>{title}</Text>
        <Text style={[Gs.textCenter, Gs.textGrey]}>{subtitle}</Text>
      </View>
      <TouchableOpacity style={style.button}>
        {showRightButton && (
          <Image source={require('../../../assets/icons/menu.png')} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyBetween,
    padding: 24,
  },
  button: {
    width: 24,
    height: 24,
  },
  title: {},
});
export default Header;
