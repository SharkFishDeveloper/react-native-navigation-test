import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PostComment from './PostComment';
import App from '../App';
import About from './About';
import Second from '../Second';

const Drawer = createDrawerNavigator();
const CustomDrawer = () => {
    return (
      <Drawer.Navigator>
          <Drawer.Screen name="Second" component={Second} options={{headerShown:true,title:"See all comments"}}/>
          <Drawer.Screen name='PostComment' component={PostComment} options={{headerShown:true,title:"Search a single comment"}}/>
          <Drawer.Screen name="Images" component={About} options={{headerShown:true}}/>
        </Drawer.Navigator>

    );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
