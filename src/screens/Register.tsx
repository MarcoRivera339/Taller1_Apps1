import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const Register = () => {
    return (
        <ImageBackground
            source={require('../components/images/playa.jpg')}
            style={styles.container}
            resizeMode="cover"
        >
            <View style={styles.overlay} />
            <View style={styles.content}>
                <Text style={styles.title}>Registration</Text>
                <Text style={styles.inputLabel}>First Name</Text>
                <TextInput style={styles.input} placeholder="Enter your First Name" />

                <Text style={styles.inputLabel}>Last Name</Text>
                <TextInput style={styles.input} placeholder="Enter your Last Name" />

                <Text style={styles.inputLabel}>User Name</Text>
                <TextInput style={styles.input} placeholder="Enter your User Name" />

                <Text style={styles.inputLabel}>Email Address</Text>
                <TextInput style={styles.input} placeholder="Enter your Email Address" />

                <Text style={styles.inputLabel}>Password</Text>
                <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry />

                <Text style={styles.inputLabel}>Confirm Password</Text>
                <TextInput style={styles.input} placeholder="Enter your Confirm Password" secureTextEntry />

                <TouchableOpacity style={[styles.button, styles.buttonCancel]}>
                    <Text style={styles.textButton}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonSignUp]}>
                    <Text style={styles.textButton}>Register</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    content: {
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: 'black',
        textShadowColor: 'white',
        textShadowOffset: { width: -2, height: 2 },
    },
    inputLabel: {
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        width: '80%',
        marginVertical: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#ccc',
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: 'yellow',
        fontWeight: 'bold',
        borderWidth: 2,
        borderRadius: 5,
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonCancel: {
        backgroundColor: '#f00',
    },
    buttonSignUp: {
        backgroundColor: '#0a0',
    },
    textButton: {
        fontWeight: 'bold',
        color: '#fff',
    },
});