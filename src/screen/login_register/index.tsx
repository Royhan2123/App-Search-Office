/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

import {colors} from '../../../assets/style/Colors';
import {Gs} from '../../../assets/style/GlobalStyle';
import React, {useState} from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text
        style={{
          fontSize: 16,
          color: colors.black,
          marginBottom: 20,
        }}>
        Login Your Account
      </Text>
      <View style={style.cardLogin}>
        <View
          style={{
            flexDirection: 'column',
            padding: 20,
            justifyContent: 'flex-start',
          }}>
          <Text style={style.texts}>Email</Text>
          <TextInput
            style={style.inputText}
            placeholder="name@example.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="grey"
          />
          <Text style={style.texts}>Password</Text>
          <TextInput
            style={style.inputText}
            placeholder="Enter Your password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="grey"
            secureTextEntry={!isPasswordVisible}
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={style.button}
              onPress={() => {
                navigation.dispatch((
                  CommonActions.reset({
                    index: 0,
                    routes: [{
                      name: 'Home',
                    }],
                  })
                ));
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Text
          style={{
            color: 'grey',
            fontSize: 16,
            marginEnd: 10,
          }}>
          don't have account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text
            style={{
              color: 'blue',
              fontSize: 16,
            }}>
            SignUp
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'center',
  },
  cardLogin: {
    width: '100%',
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: 'black',
    elevation: 10,
  },
  inputText: {
    fontSize: 14,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 1,
    padding: 10,
    marginBottom: 10,
  },
  texts: {
    ...Gs.textBlack,
    ...Gs.h2,
    ...Gs.font400,
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#0077b6',
    width: '100%',
    height: 45,
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
