import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text,TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


interface commentsBody {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

const Second = ({navigation}) => {
    const [comments, setComments] = useState<commentsBody[] | undefined>([]);
    const [loading, setLoading] = useState(false);
    const [commentId,setCommentId] = useState<number|null>();

    useEffect(() => {
        const fetchComments = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=20');
                setComments(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log('Error comments =>', error);
            }
        };
        fetchComments();
    }, []);

    const handleComment = ()=>{
        try {
            const num = parseInt(commentId,10);
            console.log('Converted');
            if (num >= 1 && num <= 100){
                console.log('In range');
                navigation.navigate('PostComment',{postId:num});
            } else {
                console.warn('Enter valid input ...');
            }
        } catch (error) {
            console.warn('Error in converting');

        }
        // if (typeof commentId === 'string'){
        //     console.log('Enter a number');
        // }
        // else {
        //     console.log('Correct');

        // }
    };

    return (
        <ScrollView>
            <View style={styles.commentContainer}><TextInput style={styles.input} placeholder="Enter comment id"
            value={commentId} onChangeText={(text)=>setCommentId(text)} keyboardType="numeric"/>
            <TouchableOpacity onPress={handleComment}>
                <Text>Search comment</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonCard} onPress={()=>navigation.pop()}><Text>Go to Home page</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonCard} onPress={()=>navigation.navigate('PostComment',{postId:commentId})}><Text>Go Single comment page</Text></TouchableOpacity>
            {loading && <Text>Loading...</Text>}
            {comments && comments.map((comment) => (
                <View key={comment.id} style={styles.card}>
                    <Text style={styles.commentText}>Name - {comment.name}</Text>
                    <Text style={styles.commentText}>Email - {comment.email}</Text>
                    <Text style={styles.commentText}>Comment - {comment.body}</Text>
                </View>
            ))}

        </ScrollView>
    );
};

export default Second;

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'black',
        margin: 5,
        borderRadius: 12,
        padding: 12,
    },
    commentText: {
        color: 'white',
    },
    buttonCard:{
        margin:5,
        padding:5,
        height:40,
        width:150,
        backgroundColor:'gray',
        fontWeight:'600',
        textAlign:'center',
        justifyContent:'center',
        alignContent:'center',
        borderRadius:12,
        alignSelf:'center',
    },
    input:{
        borderRadius:12,
        backgroundColor:'#ccccc8',
        width:200,
        alignSelf:'center',
        margin:5,
        padding:5,
    },
    commentContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
});
