/* eslint-disable react-native/no-inline-styles */

import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, View} from 'react-native';

const SplashScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Login'}],
        }),
      );
      return () => clearTimeout(timer);
    }, 3000);
  }, [navigation]);

  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri: 'https://i.pinimg.com/564x/ef/70/6c/ef706c217eaa3ef49e67a104e404e76d.jpg',
        }}
        style={{
          width: 200,
          height: 200,
          borderRadius: 15,
        }}
      />
    </View>
  );
};

export default SplashScreen;
