import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Axios from 'axios'; // Import Axios
import Navbar from './Navbar';
import Footer from './Footer';

const Qna = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await Axios.get("http://172.20.10.3:5000/blog"); // Use Axios to fetch data
            const data = response.data;
            setPosts(data.reverse().slice(0, 10)); 
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <View style={styles.container}>
          <Navbar/>
          <ScrollView>
            <Text style={styles.title}>Tech questions</Text>
            {posts.map((post, index) => (
                <View style={styles.postContainer} key={index}>
                    <Text style={styles.postTitle}>{post.Title}</Text>
                    <Text style={styles.postContent}>{post.desc}</Text>
                    <View style={styles.postInfo}>
                        <Text>
                            <Text style={styles.infoLabel}>Author:</Text> {post.email} {"\n"}
                            <Text style={styles.infoLabel}>Date:</Text> {new Date(post.date).toLocaleString()}
                        </Text>
                    </View>
                </View>
            ))}
            </ScrollView>
            <Footer/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    postContainer: {
        marginBottom: 20,
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
    },
    infoLabel: {
        fontWeight: 'bold',
        marginRight: 5,
    },
});

export default Qna;
