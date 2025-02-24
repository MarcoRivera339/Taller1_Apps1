import React from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const Login = () => {

    return (
        <ImageBackground
            source={require('../components/images/playa.jpg')}
            style={styles.container}
            resizeMode="cover"
        >
            <View style={styles.overlay} />
            <View style={styles.content}>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.inputLabel}>UserName</Text>
                <TextInput style={styles.input} placeholder="Enter your username" />

                <Text style={styles.inputLabel}>Password</Text>
                <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry />

                <TouchableOpacity style={[styles.button, styles.buttonCancel]}>
                    <Text style={styles.textButton}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonSignUp]}>
                    <Text style={styles.textButton}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
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
        fontSize: 50, // Tamaño grande para mejor visibilidad
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: 'black', // Color del texto principal (blanco)
        textShadowColor: 'white', // Color del filo (negro en este caso)
        textShadowOffset: { width: -2, height: 2 }, // Desplazamiento de la sombra
        //textShadowRadius: 3, // Difuminado para suavizar
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
        backgroundColor: '#fff', // Fondo blanco para mejor visibilidad
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
        backgroundColor: '#f00', // Rojo para el botón de cancelar
    },
    buttonSignUp: {
        backgroundColor: '#0a0', // Verde para el botón de registro
    },
    textButton: {
        fontWeight: 'bold',
        color: '#fff',
    },
});

