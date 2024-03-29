import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native'

import { NavigationProp } from '@react-navigation/native'

type Props = {
    movieName: string
    url: string
    navigation: NavigationProp<any>
    id: number | string
}

const MovieCard = ({ movieName, url, id, navigation }: Props) => {
    const onPress = (id: number | string) => {
        navigation.navigate('MovieDetails', { id })
    }

    return (
        <TouchableOpacity
            style={styles.cardContaier}
            onPress={() => onPress(id)}
        >
            <View style={styles.content}>
                <Image
                    source={
                        !url
                            ? require('../assets/imgs/No-Photo-Available.jpg')
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
