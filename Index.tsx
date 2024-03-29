import 'react-native-gesture-handler'
import 'react-native-safe-area-context'
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import App from './src/screens/App';
import Second from './src/screens/Second';
import CustomDrawer from './src/screens/drawer/SideDrawer';

const Stack = createStackNavigator();
const Index = () => {
    return (
        <NavigationContainer>
            {/* <CustomDrawer/> */}
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={App}
                    options={{title:'Home screen admin'}}
                />
                <Stack.Screen
                    name="CustomDrawer"
                    component={CustomDrawer}
                    options={{headerShown:false}}
                />
                {/* <Stack.Screen
                    name="Second"
                    component={Second}
                    options={{headerShown:true}}
                /> */}

            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});
export default Index;
