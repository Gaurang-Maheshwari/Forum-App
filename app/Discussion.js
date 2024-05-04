import React, { useEffect, useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from 'axios';

export default function Discussion() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [empty, setEmpty] = useState(true);
  const [success, setSuccess] = useState("success");
  const [searchTerm, setSearchTerm] = useState("");
  const [nul, setNull] = useState("");
  const [email, setEmail] = useState("");

  let date = new Date();
  const route = useRoute();
  const { category } = route.params;
  
  useEffect(() => {
    fetchData();
    getEmail();
  }, []);

  const getEmail = async () => {
    try {
      const userEmail = await AsyncStorage.getItem('email');
      setEmail(userEmail);
    } catch (error) {
      console.error("Error getting email:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://172.20.10.3:5000/success/${category}`);
      setData(response.data);
      setOriginalData(response.data);
      setEmpty(response.data.length === 0);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSub = async () => {
    if (title === '' || desc === '') {
      setNull("Please Enter Title and Description First");
    } else {
      setNull("");
      try {
        const result = await axios.post("http://172.20.10.3:5000/success", {
          Title: title,
          desc: desc,
          category: category,
          email: email,
          date: date,
        });
        
        if (result.status === 200) {
          fetchData();
          setTitle("");
          setDesc("");
          setSubmitted(true);
        }
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://172.20.10.3:5000/del/${id}`);

      if (response.status === 200) {
        const updatedData = data.filter((entry) => entry._id !== id);
        setData(updatedData);
        setOriginalData(updatedData);
        setSuccess("Deleted Successfully");
      } else {
        console.error("Failed to delete comment");
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm.trim() === "") {
      setData(originalData);
    } else {
      const filteredResult = originalData.filter((com) =>
        com.Title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setData(filteredResult);
    }
  };

  return (
    <View style={styles.container}>
      <Navbar/>
      <View style={styles.header}>
        <Text style={styles.topic}>Welcome to {category} forum</Text>
      </View>
      
      <View style={styles.formContainer}>
        <Text style={styles.errorText}>{nul}</Text>
        <TextInput
          style={styles.input}
          placeholder="Problem Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Problem Description"
          value={desc}
          onChangeText={setDesc}
        />
        <TouchableOpacity style={styles.button} onPress={handleSub}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {data.map((entry) => (
          <View key={entry._id} style={styles.postContainer}>
            <View style={styles.profileButton}>
              {entry.email && (
                <Text style={styles.profileText}>{entry.email.charAt(0).toUpperCase()}</Text>
              )}
            </View>
            <View style={styles.postContent}>
              <Text style={styles.postTitle}>Title: {entry.Title}</Text>
              <Text style={styles.postDescription}>Description: {entry.desc}</Text>
              <View style={styles.postInfo}>
                <Text><Text style={styles.infoTitle}>Author:</Text> {entry.email}</Text>
                <Text><Text style={styles.infoTitle}>Date:</Text> {new Date(entry.date).toLocaleString()}</Text>
              </View>
              {entry.email === email && (
                <TouchableOpacity onPress={() => handleDelete(entry._id)}>
                  <Text>Delete</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  topic: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop:10,
    marginBottom: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "lightblue",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  postContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  profileText: {
    fontSize: 20,
  },
  postContent: {
    flex: 1,
  },
  postTitle: {
    fontWeight: "bold",
  },
  postDescription: {
    marginBottom: 10,
  },
  postInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoTitle: {
    fontWeight: "bold",
  },
});
