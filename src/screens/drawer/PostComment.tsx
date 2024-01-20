/* eslint-disable semi */
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

interface post {
  id: Number;
  userId: Number;
  title: string;
  body: string
}

const PostComment = ({navigation,route}) => {
  const [comment,setComment] = useState<post[]|undefined>([]);
  const [loading,setLoading] = useState(false);
  if (!route.params || route.params.postId === undefined){
    return (<>
      <Text>Params are empty. Direct navigation not allowed</Text>
      </>)
  }
  //! use animation here
  const {postId} = route.params;
  console.log('params',postId);
  useEffect(()=>{
    setLoading(true);
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res)=>{
      setLoading(false);
      setComment(res.data);
    }).catch(()=>{
      setLoading(false);
    })
  },[postId])


  return (
    <View>
     {loading ? (<Text>Loading a comment ...</Text>) : (
      <View style={styles.card}>
        <Text style={styles.text} >Id of comment - {comment.id}</Text>
        <Text style={styles.text}>Title - {comment.title}</Text>
        <Text style={styles.text}>Comment - {comment.body}</Text>
      </View>
     )}
    </View>
  )
}

export default PostComment

const styles = StyleSheet.create({
  card:{
    backgroundColor:'black',
    borderRadius:12,
    padding:5,
    margin:5,
    alignSelf:'center',
  },
  text:{
    color:'white',
    fontSize:14,
  },
})
