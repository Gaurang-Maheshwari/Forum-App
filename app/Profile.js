import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Axios from 'axios';

export default function Profile() {
  const [info, setInfo] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const email = localStorage.getItem("email");

  const fetchProfile = async () => {
    try {
      const response = await Axios.get(`http://172.20.10.3:5000/profile/${email}`);
      setInfo(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const fetchQuestions = async () => {
    try {
      const response = await Axios.get(`http://172.20.10.3:5000/details/${email}`);
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const fetchAnswers = async () => {
    try {
      const response = await Axios.get(`http://172.20.10.3:5000/sol/${email}`);
      setAnswers(response.data);
    } catch (error) {
      console.error("Error fetching answers:", error);
    }
  };

  useEffect(() => {
    fetchProfile();
    fetchQuestions();
    fetchAnswers();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {info && (
        <View style={styles.info}>
          <View style={styles.prof}>
            <Text style={styles.initials}>
              {info.name.charAt(0).toUpperCase()}
              {info.lastname.charAt(0).toUpperCase()}
            </Text>
            <View>
              <Text>User: {info.name} {info.lastname}</Text>
              <Text>Email: {info.email}</Text>
              <Text>Questions asked: {questions.length}</Text>
              <Text>Questions answered: {answers.length}</Text>
            </View>
          </View>
        </View>
      )}
      <View style={styles.details}>
        <Text style={styles.heading}>Questions Asked</Text>
        {questions.map((question, index) => (
          <View key={index} style={styles.question}>
            <Text>Title: {question.Title}</Text>
            <Text>Description: {question.desc}</Text>
            <Text>Category: {question.category}</Text>
          </View>
        ))}
        <Text style={styles.heading}>Questions Answered</Text>
        {answers.map((solution, index) => (
          <View key={index} style={styles.answer}>
            <Text>Description: {solution.desc}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  info: {
    marginBottom: 20,
  },
  prof: {
    flexDirection: "row",
    alignItems: "center",
  },
  initials: {
    marginRight: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  details: {
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  question: {
    marginBottom: 10,
  },
  answer: {
    marginBottom: 10,
  },
});
