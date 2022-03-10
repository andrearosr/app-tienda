import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Colors';
import { signUp } from '../store/actions/auth.action';
import Input from '../components/Input'

function AuthScreen() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    dispatch(signUp(email, password));
  }

  const title = 'REGISTRO',
    message = 'Ya tienes cuenta?',
    messageAction = 'Ingresar',
    messageTarget = 'login';

  const handleInputChange = (id, value, isValid) => {
    if (id === 'email') setEmail(value)
    if (id === 'password') setPassword(isValid)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Input
          label="Email"
          onInputChange={handleInputChange}
          keyboardType="email-address"
          autoCapitalize="none"
          required
        />
        <Input
          label="Clave"
          onInputChange={handleInputChange}
          secureTextEntry
          required
        />
        <Button
          title="REGISTRARSE"
          color={COLORS.primary}
          onPress={handleSignUp}
        /> 
        <View style={styles.prompt}>
          <Text style={styles.promptMessage}>{message}</Text>
          <TouchableOpacity>
            <Text style={styles.promptButton}>{messageAction}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 18,
    textAlign: 'center',
  },
  container: {
    width: '80%',
    maxWidth: 400,
    padding: 12,
    margin: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  prompt: {
    alignItems: 'center',
  },
  promptMessage: {
    fontSize: 16,
    color: '#333',
  },
  promptButton: {
    fontSize: 16,
    color: COLORS.primary,
  },
});

export default AuthScreen;