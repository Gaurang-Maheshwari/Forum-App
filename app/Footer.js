import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Footer() {
  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/ayush_2_3_?igshid=ewywenm1x82hn');
  };

  const handleFacebookPress = () => {
    Linking.openURL('https://www.facebook.com/profile.php?id=100006833599484&mibextid=LQQJ4d');
  };

  const handleTwitterPress = () => {
    Linking.openURL('https://www.twitter.com/');
  };

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <Text style={styles.text}>© 2024 Company, Tech Forum by AAAG</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity onPress={handleInstagramPress}>
            <FontAwesome name="instagram" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFacebookPress}>
            <FontAwesome name="facebook" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleTwitterPress}>
            <FontAwesome name="twitter" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
  socialIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
  },
});
