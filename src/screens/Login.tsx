import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const Login = () => {

    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Login</Text>
            <Text style={styles.input2}>UserName</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your username"
            />
            <Text style={styles.input2}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
            />
            <TouchableOpacity style={[styles.button,styles.buttonCancel]} >
                <Text style={styles.textButton}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.buttonSignUp]} >
                <Text style={styles.textButton}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F8D3',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    input: {
        height: 40,
        marginVertical: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#ccc'
    },
    input2: {
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'yellow',
        fontWeight: 'bold',
        borderWidth: 2,
        borderRadius: 5,
        width: 60,
        height: 30,
        justifyContent: 'center',
        position:'relative'
        // top: 0,
        // left: 10,
        // right: 0,
        // bottom: 0
    },
    buttonCancel: {
        bottom:0,
        //top:0,
        // left:0,
        left: 30
    },
    buttonSignUp: {
        bottom: 0,
        top:-30,
        right:-170,
        //right:0
    },
    textButton: {
        fontWeight: 'bold',
        textAlign:'center'
    }

});

