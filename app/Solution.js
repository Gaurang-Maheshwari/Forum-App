import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";
import { useParams } from "@react-navigation/native";
import Axios from 'axios'; // Import Axios

export default function Solution() {
  const { id } = useParams();
  const [que, setQue] = useState([]);
  const [ans, setAns] = useState([]);
  const [desc, setDesc] = useState('');
  const [nullDescError, setNullDescError] = useState(false);

  const fetchQuestion = async () => {
    try {
      let response = await Axios.get(`http://172.20.10.3:5000/solution/${id}`); // Use Axios to fetch data
      setQue(response.data);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };

  const email = localStorage.getItem("email");
  const date = new Date();

  const handleSubmit = async () => {
    if (desc.trim() === '') {
      setNullDescError(true);
      return;
    }
    setNullDescError(false);

    try {
      let response = await Axios.post('http://172.20.10.3:5000/ans', { // Use Axios to post data
        email,
        id,
        desc,
        date
      });
      if (response.status === 200) {
        setDesc('');
        getAnswers();
      } else {
        console.error("Error submitting answer:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting answer:", error);
    }
  };

  const getAnswers = async () => {
    try {
      let response = await Axios.get(`http://172.20.10.3:5000/ans/${id}`); // Use Axios to fetch data
      setAns(response.data);
    } catch (error) {
      console.error("Error fetching answers:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      let response = await Axios.delete(`http://172.20.10.3:5000/ans/${id}`); // Use Axios to delete data
      if (response.status === 200) {
        setAns(ans.filter(sol => sol._id !== id));
      } else {
        console.error("Error deleting answer:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting answer:", error);
    }
  };

  useEffect(() => {
    fetchQuestion();
    getAnswers();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.questionContainer}>
        {que.map((problem, index) => (
          <View key={index}>
            <Text style={styles.title}>{problem.Title}</Text>
            <Text style={styles.desc}>{problem.desc}</Text>
          </View>
        ))}
      </View>

      <View style={styles.answerForm}>
        <TextInput
          style={styles.input}
          placeholder="Enter your solution"
          value={desc}
          onChangeText={setDesc}
          multiline
        />
        {nullDescError && <Text style={styles.errorText}>Please enter a valid solution</Text>}
        <Button
          title="Submit"
          onPress={handleSubmit}
        />
      </View>

      <View style={styles.answersContainer}>
        {ans.map((sol, index) => (
          <View key={index} style={styles.answer}>
            <Text style={styles.answerContent}>{sol.desc}</Text>
            {sol.email === email && <Button title="Delete" onPress={() => handleDelete(sol._id)} />}
            <View style={styles.postInfo}>
              <Text><Text style={styles.infoTitle}>Author:</Text> {sol.email}</Text>
              <Text><Text style={styles.infoTitle}>Date:</Text> {new Date(sol.date).toLocaleString()}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  desc: {
    fontSize: 16,
  },
  answerForm: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  answersContainer: {
    marginBottom: 20,
  },
  answer: {
    marginBottom: 20,
  },
  answerContent: {
    fontSize: 16,
  },
  postInfo: {
    marginTop: 10,
  },
  infoTitle: {
    fontWeight: 'bold',
  },
});
