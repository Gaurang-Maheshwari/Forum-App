import React, { useState, useEffect } from "react";
import { View, TextInput, ScrollView, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import Cards from "./Cards";
import { useNavigation } from "@react-navigation/native";
import Navbar from "./Navbar";
import Footer from "./Footer";

const programmingLanguages = [
  { id: 1, title: "Python", description: "A high-level programming language.", img: require("../assets/Python.jpeg") },
  { id: 2, title: "C", description: "A procedural programming language.", img: require("../assets/c.jpeg") },
  { id: 3, title: "JavaScript", description: "A programming language commonly used in web development.", img: require("../assets/javascript.jpeg") },
  { id: 4, title: "Java", description: "A popular programming language known for its portability and performance.", img: require("../assets/Java.jpeg") },
  { id: 5, title: "C++", description: "An object-oriented programming language derived from C.", img: require("../assets/cpp.jpg") },
  { id: 6, title: "C#", description: "A programming language developed by Microsoft for building Windows applications.", img: require("../assets/csharp.jpg") },
  { id: 7, title: "PHP", description: "A server-side scripting language commonly used for web development.", img: require("../assets/php.jpg") },
  { id: 8, title: "Swift", description: "A programming language developed by Apple for iOS and macOS development.", img: require("../assets/swift.jpg") },
  { id: 9, title: "TypeScript", description: "A superset of JavaScript that adds static typing to the language.", img: require("../assets/typescript.jpg") }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    setFilteredCards(programmingLanguages);
  }, []);

  const handleCardPress = (title) => {
    navigation.navigate("Discussion", { category: title });
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
      <ScrollView>
        <Cards cards={filteredCards} onPress={handleCardPress} />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  // You can add more styles here for images if needed
});
