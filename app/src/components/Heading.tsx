import { Text, StyleSheet } from 'react-native'

type Prop = {
    content: string
}

const Heading = ({ content }: Prop) => {
    return <Text style={styles.heading}>{content}</Text>
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 10,
        textAlign: 'center',
    },
})

export default Heading
