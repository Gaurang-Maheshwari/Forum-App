import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigation = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check if user is logged in on component mount
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const email = await AsyncStorage.getItem("email");
      if (email) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Error reading email from AsyncStorage:", error);
    }
  };

  const handleLogout = async () => {
    try {
      // Clear email from AsyncStorage on logout
      await AsyncStorage.removeItem("email");
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error clearing email from AsyncStorage:", error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBAckRCd6JZU_X12XpdNl_a-dLQgCNJmqF_aURWM-Cg&s" }}
              style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuIcon} onPress={toggleMenu}>
            <Feather name="menu" size={24} color="white" />
          </TouchableOpacity>
        </View>
        {isMenuOpen && (
          <View style={styles.menuContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={styles.menuItem}>
              <Text style={styles.menuItemText}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.menuItem}>
              <Text style={styles.menuItemText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.navLinks}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.navLink}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("About")}>
          <Text style={styles.navLink}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Tools")}>
          <Text style={styles.navLink}>Tools</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Blog")}>
          <Text style={styles.navLink}>Blog</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Qna")}>
          <Text style={styles.navLink}>Qna</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.authLinks}>
        {isLoggedIn ? (
          <>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Text style={styles.navLink}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <Text style={styles.navLink}>Logout</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  logo: {
    width: 100,
    height: 40,
  },
  menuIcon: {
    paddingRight: 20,
  },
  menuContainer: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuItem: {
    marginBottom: 10,
  },
  menuItemText: {
    color: "white",
  },
  navLinks: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    padding: 10,
  },
  navLink: {
    color: "white",
  },
  authLinks: {
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "black",
    padding: 10,
  },
});
