import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Import axios library

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://172.20.10.3:5000/login", { // Use axios.post instead of fetch
        email,
        password,
      });
      
      if (!response.status === 200) { // Check for response status
        const errorData = response.data; // Access response data directly
        if (errorData && errorData.message) {
          setError(errorData.message);
        } else {
          setError("An error occurred during login. Please try again later.");
        }
      } else {
        setError("");
        navigation.navigate("Home"); // Navigate to the home screen upon successful login
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      setError("An error occurred during login. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: 'https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1603737480214-Community%20Forum.png'}}
      />
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email address</Text>
        <TextInput
          style={styles.input}
          placeholder="Email address"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {error !== "" && <Text style={styles.error}>{error}</Text>}
        <Button
          title="Login"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});
