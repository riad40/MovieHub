import { Text, ScrollView, StyleSheet } from 'react-native'

const CommentCard = ({ comment }: any) => {
    return (
        <ScrollView style={styles.commentCard} nestedScrollEnabled={true}>
            <Text style={styles.commentTextAuthor}>{comment.author}</Text>
            <Text style={styles.commentText}>{comment.content}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    commentCard: {
        width: 300,
        height: 200,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#495057',
    },
    commentText: {
        fontSize: 16,
        color: '#fff',
    },
    commentTextAuthor: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
})

export default CommentCard
