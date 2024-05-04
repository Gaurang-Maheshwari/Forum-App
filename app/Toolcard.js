import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const ToolCard = ({ name, description, image, link }) => {
  const handlePress = () => {
    if (link) {
      Linking.openURL(link).catch(() => alert('Failed to open link'));
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.toolCard}>
      <View style={styles.cardContent}>
        <Image source={image} style={styles.toolImage} resizeMode="cover" />
        <View style={styles.toolInfo}>
          <Text style={styles.toolName}>{name}</Text>
          <Text style={styles.toolDescription}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toolCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toolImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  toolInfo: {
    flex: 1,
  },
  toolName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  toolDescription: {
    fontSize: 16,
  },
});

export default ToolCard;
