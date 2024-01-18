import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomDrawer from './drawer/SideDrawer';

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
    return (
        <ScrollView>
            <CustomDrawer/>
            <TouchableOpacity onPress={()=>navigation.goBack()}><Text>Go back to Home</Text></TouchableOpacity>
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
});
