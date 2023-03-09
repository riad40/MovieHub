import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native'

type Props = {
    movieName: string
    url: string
}

const MovieCard = ({ movieName, url }: Props) => {
    return (
        <TouchableOpacity style={styles.cardContaier}>
            <View style={styles.content}>
                <Image
                    source={
                        !url
                            ? require('../assets/imgs/inception-cover.jpg')
                            : { uri: `https://image.tmdb.org/t/p/w500/${url}` }
                    }
                    style={styles.contentImage}
                />
                <Text style={styles.contentText}>{movieName}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContaier: {
        width: Dimensions.get('window').width / 2 - 40,
        height: 300,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 10,
    },
    contentImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    contentText: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        paddingBottom: 10,
        fontSize: 20,
        color: 'white',
        opacity: 0,
    },
})

export default MovieCard
