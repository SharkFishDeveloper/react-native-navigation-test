import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PostComment from './PostComment';
import App from '../App';
import About from './About';

const Drawer = createDrawerNavigator();
const CustomDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName='PostComment'>
          <Drawer.Screen name='PostComment' component={PostComment}/>
          <Drawer.Screen name='About' component={About}/>
        </Drawer.Navigator>

    );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
