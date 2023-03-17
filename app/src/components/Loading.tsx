import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#fff" />
            <Text style={styles.text}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
})

export default Loading
