import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Footer from './Footer';
import Navbar from './Navbar';

const Blog = () => {
  return (
    <View style={styles.container}>
      <Navbar/>
      <Text style={styles.title}>Tech Blog</Text>

      <ScrollView style={styles.scrollView}>
        <View style={styles.post}>
          <Text style={styles.postTitle}>C Programming Basics: Variables and Functions</Text>
          <Text style={styles.postContent}>
            C is a powerful general-purpose programming language. This post covers the basics of C programming, including variables, data types, and functions.
          </Text>
          <View style={styles.postInfo}>
            <Text>
              <Text style={styles.infoTitle}>Author:</Text> Rahul Sharma {"\n"}
              <Text style={styles.infoTitle}>Date:</Text> April 3, 2024
            </Text>
          </View>
        </View>

        <View style={styles.post}>
          <Text style={styles.postTitle}>C++ Programming Basics: Classes and Objects</Text>
          <Text style={styles.postContent}>
            C++ is an extension of the C programming language and adds support for object-oriented programming. This post covers the basics of C++ programming, including classes and objects.
          </Text>
          <View style={styles.postInfo}>
            <Text>
              <Text style={styles.infoTitle}>Author:</Text> Priya Patel {"\n"}
              <Text style={styles.infoTitle}>Date:</Text> April 4, 2024
            </Text>
          </View>
        </View>

        <View style={styles.post}>
          <Text style={styles.postTitle}>Java Programming Basics: Classes and Inheritance</Text>
          <Text style={styles.postContent}>
            Java is a popular programming language used for developing desktop, web, and mobile applications. This post covers the basics of Java programming, including classes and inheritance.
          </Text>
          <View style={styles.postInfo}>
            <Text>
              <Text style={styles.infoTitle}>Author:</Text> Rohit Verma {"\n"}
              <Text style={styles.infoTitle}>Date:</Text> April 5, 2024
            </Text>
          </View>
        </View>

        <View style={styles.post}>
          <Text style={styles.postTitle}>HTML Basics: Introduction to Web Development</Text>
          <Text style={styles.postContent}>
            HTML (Hypertext Markup Language) is the standard markup language for creating web pages. This post covers the basics of HTML, including tags, elements, and structure.
          </Text>
          <View style={styles.postInfo}>
            <Text>
              <Text style={styles.infoTitle}>Author:</Text> Neha Gupta {"\n"}
              <Text style={styles.infoTitle}>Date:</Text> April 6, 2024
            </Text>
          </View>
        </View>

        <View style={styles.post}>
          <Text style={styles.postTitle}>CSS Basics: Styling Web Pages</Text>
          <Text style={styles.postContent}>
            CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. This post covers the basics of CSS, including selectors, properties, and values.
          </Text>
          <View style={styles.postInfo}>
            <Text>
              <Text style={styles.infoTitle}>Author:</Text> Anjali Singh {"\n"}
              <Text style={styles.infoTitle}>Date:</Text> April 7, 2024
            </Text>
          </View>
        </View>

        <View style={styles.post}>
          <Text style={styles.postTitle}>Python Basics: Control Structures and Functions</Text>
          <Text style={styles.postContent}>
            Python is a high-level, interpreted programming language known for its simplicity and readability. This post covers the basics of Python programming, including control structures and functions.
          </Text>
          <View style={styles.postInfo}>
            <Text>
              <Text style={styles.infoTitle}>Author:</Text> Vivek Kumar {"\n"}
              <Text style={styles.infoTitle}>Date:</Text> April 8, 2024
            </Text>
          </View>
        </View>

        {/* Additional blog posts */}
        <View style={styles.post}>
          <Text style={styles.postTitle}>JavaScript ES6 Features</Text>
          <Text style={styles.postContent}>
            ES6 (ECMAScript 2015) introduced many new features to JavaScript, making it more powerful and expressive. This post covers key ES6 features such as arrow functions, template literals, and destructuring assignment.
          </Text>
          <View style={styles.postInfo}>
            <Text>
              <Text style={styles.infoTitle}>Author:</Text> David Johnson {"\n"}
              <Text style={styles.infoTitle}>Date:</Text> April 9, 2024
            </Text>
          </View>
        </View>

        <View style={styles.post}>
          <Text style={styles.postTitle}>Responsive Web Design Principles</Text>
          <Text style={styles.postContent}>
            Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. This post explores the principles of responsive web design and techniques for creating responsive layouts.
          </Text>
          <View style={styles.postInfo}>
            <Text>
              <Text style={styles.infoTitle}>Author:</Text> Sarah Adams {"\n"}
              <Text style={styles.infoTitle}>Date:</Text> April 10, 2024
            </Text>
          </View>
        </View>

        {/* Add more blog posts for other programming languages as needed */}

      </ScrollView>

      {/* Additional blog posts */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  scrollView: {
    marginBottom: 20,
  },
  post: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postContent: {
    fontSize: 16,
    marginBottom: 10,
  },
  postInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  infoTitle: {
    fontWeight: 'bold',
  },
});

export default Blog;
