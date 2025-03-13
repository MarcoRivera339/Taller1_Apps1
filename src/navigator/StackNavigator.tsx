import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Products } from '../screens/Products';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
        //initialRouteName='Pantalla2'
        screenOptions={{  //funcionalidades de manera general a todos los screen
            headerStyle:{
                elevation:10,
                shadowColor:'#000'
            },
            headerShown:true,
            cardStyle:{ //estilo al contenido de los escreen de navigacion
                backgroundColor:'white',
            }
        }}
        >
            {/* <Stack.Screen name="Login" options={{title:'Login'}} component={Login} /> */}
            {/* <Stack.Screen name="Register" options={{title:'Register',headerShown:false}} component={Register} /> */}
            <Stack.Screen name="Products" options={{title:'Products',headerShown:false}} component={Products} />
        </Stack.Navigator>
  )
}
