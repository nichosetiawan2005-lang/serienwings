import React, { useState } from 'react';

import { Link, router } from 'expo-router';

import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

      {/* LOGO */}
      <Text style={styles.logo}>
        SereinWings
      </Text>

      <Text style={styles.welcome}>
        Welcome Back ✨
      </Text>

      {/* EMAIL */}
      <Text style={styles.label}>
        Email
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />

      {/* PASSWORD */}
      <Text style={styles.label}>
        Password
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* FORGOT PASSWORD */}
      <TouchableOpacity>
        <Text style={styles.forgot}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      {/* LOGIN BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (email === '' || password === '') {
            Alert.alert(
              'Incomplete Form',
              'Please enter your email and password.'
            );
          } else {
            router.push('/(tabs)');
          }
        }}
      >
        <Text style={styles.buttonText}>
          Sign In
        </Text>
      </TouchableOpacity>

      {/* SIGN UP */}
      <Link href="/sign-up" asChild>
        <TouchableOpacity>
          <Text style={styles.signupText}>
            Don’t have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5f7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  logo: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#f48c95',
    marginBottom: 15,
  },

  welcome: {
    fontSize: 24,
    color: '#444',
    marginBottom: 40,
  },

  label: {
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginBottom: 8,
    fontSize: 16,
    color: '#555',
    fontWeight: '600',
  },

  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    marginBottom: 20,

    borderWidth: 1,
    borderColor: '#f7d7dc',
  },

  forgot: {
    alignSelf: 'flex-end',
    marginBottom: 25,
    color: '#777',
    textDecorationLine: 'underline',
  },

  button: {
    width: '100%',
    backgroundColor: '#f48c95',
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',

    shadowColor: '#f48c95',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  signupText: {
    marginTop: 25,
    color: '#666',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
});