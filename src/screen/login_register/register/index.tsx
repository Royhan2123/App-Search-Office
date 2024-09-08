/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {CommonActions, useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Gs} from '../../../../assets/style/GlobalStyle';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text
        style={{
          fontSize: 16,
          color: 'black',
          marginBottom: 20,
        }}>
        Register Your Account
      </Text>
      <View style={style.cardRegister}>
        <View
          style={{
            flexDirection: 'column',
            padding: 20,
            justifyContent: 'flex-start',
          }}>
          <Text style={style.texts}>Name</Text>
          <TextInput
            style={style.inputText}
            value={name}
            onChangeText={setName}
            placeholder="enter your name"
            placeholderTextColor="grey"
            keyboardType="default"
          />
          <Text style={style.texts}>Email</Text>
          <TextInput
            style={style.inputText}
            value={email}
            onChangeText={setEmail}
            placeholder="name@example.com"
            placeholderTextColor="grey"
            keyboardType="email-address"
          />
          <Text style={style.texts}>Password</Text>
          <TextInput
            style={style.inputText}
            value={password}
            onChangeText={setPassword}
            placeholder="enter your password"
            placeholderTextColor="grey"
            secureTextEntry={!isPasswordVisible}
          />
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
              Register
            </Text>
          </TouchableOpacity>
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
          already have account
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text
            style={{
              color: 'blue',
              fontSize: 16,
            }}>
            SignIn
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
  cardRegister: {
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
    marginTop: 10,
  },
});

export default Register;
