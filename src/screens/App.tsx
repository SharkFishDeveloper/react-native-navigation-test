import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomDrawer from './drawer/SideDrawer';
import Second from './Second';

interface post {
  id: Number;
  userId: Number;
  title: string;
  body: string
}
const App = ({navigation}) => {
  const [data, setData] = useState<post[] | undefined>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<post[]>('https://jsonplaceholder.typicode.com/posts?_limit=20')
      .then(res => {
        setData(res.data);
        setLoading(false);
      }).catch(error => {
        console.log('error ', error);
        setLoading(false);
      });
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
     <TouchableOpacity onPress={()=>(navigation.push('CustomDrawer'))}

     style={styles.buttonContainer}><Text style={styles.buttonText}>Go to comments</Text></TouchableOpacity>
      <Text style={styles.heading}>Simple React posts</Text>
      {loading && <Text>Loading...</Text>}
      {data && data.map(post => (
        <View key={post.id} style={styles.card} >
          <Text>Id of post - {post.id}</Text>
          <Text>Title of posts - {post.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  buttonContainer:{
    backgroundColor:'black',
    padding:3,
    borderRadius:12,
    height:40,
    width:120,
    justifyContent:'center',//Vertically
    alignItems:'center',//horizontally
    alignSelf:'flex-end',
    margin:20,
  },
  buttonText:{
    color:'white',
    fontWeight:'bold',
  },
  card: {
   margin:10,
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderEndColor:'black',
  },
  heading:{
    alignSelf:'center',
    color:'black',
    fontSize:16,
    fontWeight:'700',
  },
});
