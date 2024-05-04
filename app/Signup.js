import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Axios from 'axios'; // Import Axios

export default function Signup() {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigation = useNavigation();

    const handleSubmit = async () => {
        if (email.trim() === "") {
            setError("Email cannot be empty");
            return;
        } else if (password.trim() === "") {
            setError("Password cannot be empty");
            return;
        } else if (password.length < 7) {
            setError("Length of password cannot be less than 7");
            return;
        } else if (!/\d/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setError("Password should contain at least one special character");
            return;
        } else {
            try {
                const response = await Axios.post("http://172.20.10.3:5000/signup", { // Use Axios post method
                    name,
                    lastname,
                    email,
                    password,
                });
                if (response.status !== 200) {
                    setError(response.data.message);
                } else {
                    navigation.navigate('Home');
                }
            } catch (error) {
                console.error("Error occurred during signup:", error);
                setError("An error occurred during signup. Please try again later.");
            }
        }
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: 'https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1603737480214-Community%20Forum.png'}}
            />
            <View style={styles.main}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                    style={styles.input}
                    value={lastname}
                    onChangeText={setLastname}
                />
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                {error !== "" && <Text style={styles.error}>{error}</Text>}
                <Button
                    title="Sign Up"
                    onPress={handleSubmit}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        width: '80%',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    image: {
        width: 400,
        height: 400,
        resizeMode: 'contain',
    },
});
