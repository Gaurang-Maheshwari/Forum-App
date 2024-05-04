import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

export default function Logout() {
  const navigation = useNavigation(); // Get navigation object
  
  useEffect(() => {
    const clearStorage = async () => {
      try {
        await AsyncStorage.clear();
        // After clearing AsyncStorage, navigate to the home page or any other appropriate screen
        navigation.navigate('Home'); // Replace 'Home' with the name of your home screen
      } catch (error) {
        console.error('Error clearing AsyncStorage:', error);
      }
    };
    clearStorage();
  }, [navigation]); // Include navigation object in the dependencies array

  return null; // Return null since there is no UI for this component in React Native
}
