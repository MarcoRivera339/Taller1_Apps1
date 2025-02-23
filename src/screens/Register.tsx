import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const Register = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registration</Text>
            <Text style={styles.input2}>First Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your First Name"
            />
            <Text style={styles.input2}>Last Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your Last Name"
            />
            <Text style={styles.input2}>User Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your User Name"
            />
            <Text style={styles.input2}>Email Address</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your Email Address"
            />
            <Text style={styles.input2}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
            />
            <Text style={styles.input2}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your Confirm Password"
                secureTextEntry
            />
            <TouchableOpacity style={[styles.button, styles.buttonRegister]}>
                <Text style={styles.textButton}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonCancel]}>
                <Text style={styles.textButton}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F8D3',
        justifyContent: 'flex-start',
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
        borderWidth: 2,
        borderRadius: 5,
        width: 75,
        height: 40,
        alignItems: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },
    buttonRegister: {
        bottom: 50,
        //top:0,
        // left:0,
        right: 10
    },
    buttonCancel: {
        bottom: 50,
        //top:0,
        left: 10
        //right:0
    },
    textButton: {
        fontWeight: 'bold',
    }



});