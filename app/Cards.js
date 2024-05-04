import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Cards({ cards, onPress }) {
  return (
    <View style={styles.container}>
      {cards.map((language) => (
        <TouchableOpacity
          key={language.id}
          style={styles.card}
          onPress={() => onPress(language.title)}
        >
          <Image
            source={language.img}
            style={styles.image}
          />
          <View style={styles.cardBody}>
            <Text style={styles.title}>{language.title}</Text>
            <Text style={styles.description}>{language.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  card: {
    width: "48%",
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
  },
});
