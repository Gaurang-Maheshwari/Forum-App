import React, { useState, useEffect, useRef } from "react";
import { View, Text, ScrollView, Image, Animated, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Video } from 'expo-av';

export default function About() {
  const [bounce1] = useState(new Animated.Value(0));
  const [bounce2] = useState(new Animated.Value(0));
  const [bounce3] = useState(new Animated.Value(0));

  useEffect(() => {
    const delay = 500;

    setTimeout(() => animate(bounce1, 1), delay * 0);
    setTimeout(() => animate(bounce2, 1), delay * 1.5);
    setTimeout(() => animate(bounce3, 1), delay * 3);
  }, []);

  const animate = (animation, toValue) => {
    Animated.spring(animation, {
      toValue: toValue,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };
  const videoRef = useRef(null);

  useEffect(() => {
    // Autoplay the video when the component mounts
    if (videoRef.current) {
      videoRef.current.playAsync();
    }
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Navbar/>
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <Video
        ref={videoRef}
        source={require('../assets/flexi.mp4')}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        isLooping  // Enable looping
        shouldPlay // Automatically start playing
      />
        <Text style={styles.title}>About Our Tech Forum</Text>
        <Text style={styles.text}>
          Welcome to our forum! We aim to provide a platform for discussions, sharing knowledge, and connecting with like-minded individuals. We are dedicated to fostering a community of technology enthusiasts,
          professionals, and learners alike. Our platform provides a space for meaningful discussions, knowledge sharing, and networking opportunities. Our mission is to create an inclusive and accessible
          environment where individuals from all backgrounds can engage with technology-related topics. We believe in the power of collaboration and aim to facilitate learning and growth within our community.
        </Text>
        <Text style={styles.title}>Features</Text>
        <Text style={styles.text}>
          - Discussion boards for various topics {"\n"} - User profiles {"\n"} - Vast range of topics {"\n"} - Search functionality to find specific discussions
        </Text>
        <Text style={styles.title}>Our Team</Text>
        <Text style={styles.text}>Our forum are maintained by a dedicated team of moderators who ensure that discussions remain respectful and productive.</Text>
        <Text style={styles.title}>Join Us</Text>
        <Text style={styles.text}>
          Ready to join our community?{" "}
          <TouchableOpacity onPress={() => console.log("Sign up pressed")}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>{" "}
          now to start engaging with fellow tech enthusiasts, asking questions, sharing your knowledge, and exploring the latest trends in technology.
        </Text>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.text}>If you have any questions or feedback, feel free to contact us at support@techforum.com.</Text>
        <View style={styles.animationContainer}>
          <Animated.View style={[styles.bounceItem, { opacity: bounce1 }]}>
            <Text style={styles.animationTitle}>Increase productivity</Text>
            <Text style={styles.animationText}>
              If somebody somewhere has the right answer, suddenly you have it too. Collaborate better in a remote-first world.
            </Text>
          </Animated.View>
          <Animated.View style={[styles.bounceItem, { opacity: bounce2 }]}>
            <Text style={styles.animationTitle}>Accelerate time to market</Text>
            <Text style={styles.animationText}>
              Shorten the time between initial idea and complete product. Take delays and misinformation out of the equation.
            </Text>
          </Animated.View>
          <Animated.View style={[styles.bounceItem, { opacity: bounce3 }]}>
            <Text style={styles.animationTitle}>Protect institutional knowledge</Text>
            <Text style={styles.animationText}>
              People come and people go, but if you capture their contributions in one central place, that expertise sticks around.
            </Text>
          </Animated.View>
        </View>
      </ScrollView>
      <Footer/>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "black",
    marginBottom: 20,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
  animationContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  bounceItem: {
    flex: 1,
    alignItems: "center",
  },
  animationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  animationText: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
  },
  video: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
});
