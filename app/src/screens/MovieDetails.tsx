import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { styles } from '../assets/styles/appContainer'
import { Heading } from '../components'

interface Movie {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number | string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

const MovieDetails = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={styles1.header}>
                    <TouchableOpacity>
                        <Ionicons name="arrow-back" size={30} color="red" />
                    </TouchableOpacity>
                    <Heading content="Inception" />
                    <TouchableOpacity>
                        <Ionicons name="heart-outline" size={30} color="red" />
                    </TouchableOpacity>
                </View>
                <View style={styles1.imgContainer}>
                    <Image
                        style={styles1.img}
                        source={{
                            uri: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
                        }}
                    />
                </View>
                <View style={styles1.movieContainer}>
                    <View style={styles1.movie}>
                        <Text style={styles1.movieDetailHeading}>Heros</Text>
                        <Text style={styles1.movieDetailText}>
                            Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page
                        </Text>
                        <Text style={styles1.movieDetailHeading}>Genre</Text>
                        <Text style={styles1.movieDetailText}>
                            Action, Adventure, Sci-Fi
                        </Text>
                        <Text style={styles1.movieDetailHeading}>
                            Release Date
                        </Text>
                        <Text style={styles1.movieDetailText}>2010-07-14</Text>
                        <Text style={styles1.movieDetailHeading}>
                            Running Time
                        </Text>
                        <Text style={styles1.movieDetailText}>148 min</Text>

                        <Text style={styles1.movieDetailHeading}>
                            Description
                        </Text>
                        <Text
                            style={[
                                styles1.movieDetailText,
                                {
                                    marginBottom: 30,
                                },
                            ]}
                        >
                            A thief who steals corporate secrets through use of
                            dream-sharing technology is given the inverse task
                            of planting an idea into the mind of a CEO. A thief
                            who steals corporate secrets through use of
                            dream-sharing technology is given the inverse task
                            of planting an idea into the mind of a CEO.
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles1 = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imgContainer: {
        marginTop: 20,
        width: '100%',
        height: 300,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    movieContainer: {
        width: '100%',
        height: '100%',
        padding: 10,
    },
    movie: {
        width: '100%',
        height: '100%',
        marginTop: 10,
    },
    movieDetailHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#E40814',
        marginTop: 10,
    },
    movieDetailText: {
        fontSize: 16,
        color: 'white',
    },
})

export default MovieDetails
