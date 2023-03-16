import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    FlatList,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { styles } from '../assets/styles/appContainer'
import { useEffect, useState } from 'react'
import api from '../helpers/api'
import {
    MovieDetailsType,
    MovieCastType,
    MovieCommentsType,
} from '../@types/types'
import { CommentCard } from '../components'

type Props = {
    route: any
}

const MovieDetails = ({ route }: Props) => {
    const { id } = route.params

    const [actors, setActors] = useState<MovieCastType>({} as MovieCastType)
    // get movie actors from api
    const getMovieActors = async () => {
        try {
            const response = await api.get(`/movie/${id}/credits`)
            setActors(response.data.cast)
        } catch (error) {
            console.log(error)
        }
    }

    const [movieDetails, setMovieDetails] = useState<MovieDetailsType>(
        {} as MovieDetailsType
    )

    // get movie details from api
    const getMovieDetails = async () => {
        try {
            const response = await api.get(`/movie/${id}`)
            setMovieDetails(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    // get movie comments from api
    const [comments, setComments] = useState<MovieCommentsType>(
        {} as MovieCommentsType
    )
    const getMovieComments = async () => {
        try {
            const response = await api.get(`/movie/${id}/reviews`)
            setComments(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMovieActors()
        getMovieDetails()
        getMovieComments()
    }, [id])

    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={styles1.header}>
                    <TouchableOpacity>
                        <Ionicons name="arrow-back" size={30} color="red" />
                    </TouchableOpacity>
                    <Text style={styles1.title}>
                        {movieDetails.original_title}
                    </Text>
                    <TouchableOpacity>
                        <Ionicons name="heart-outline" size={30} color="red" />
                    </TouchableOpacity>
                </View>
                <View style={styles1.imgContainer}>
                    <Image
                        style={styles1.img}
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`,
                        }}
                    />
                </View>
                <View style={styles1.movieContainer}>
                    <View style={styles1.generalInfos}>
                        <View style={styles1.infos}>
                            <Ionicons name="star" size={20} color="red" />
                            <Text style={styles1.movieDetailText}>
                                {movieDetails.vote_average}
                            </Text>
                        </View>
                        <View style={styles1.infos}>
                            <Ionicons name="time" size={20} color="red" />
                            <Text style={styles1.movieDetailText}>
                                {movieDetails.runtime} min
                            </Text>
                        </View>
                        <View style={styles1.infos}>
                            <Ionicons name="calendar" size={20} color="red" />
                            <Text style={styles1.movieDetailText}>
                                {movieDetails.release_date}
                            </Text>
                        </View>
                    </View>
                    <Text
                        style={[
                            styles1.movieDetailHeading,
                            {
                                marginVertical: 10,
                            },
                        ]}
                    >
                        Cast
                    </Text>
                    <View>
                        <FlatList
                            data={actors}
                            keyExtractor={(item) => item.id.toString()}
                            horizontal
                            renderItem={({ item }) => (
                                <View
                                    style={{
                                        alignItems: 'center',
                                        marginBottom: 10,
                                        marginHorizontal: 5,
                                    }}
                                >
                                    <Image
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 25,
                                            marginRight: 10,
                                        }}
                                        source={{
                                            uri: `https://image.tmdb.org/t/p/w500/${item.profile_path}`,
                                        }}
                                    />
                                    <Text style={styles1.movieDetailText}>
                                        {item.name}
                                    </Text>
                                </View>
                            )}
                        />
                    </View>
                    <Text style={styles1.movieDetailHeading}>Description</Text>
                    <Text style={styles1.movieDetailText}>
                        {movieDetails.overview}
                    </Text>
                    <Text style={styles1.movieDetailHeading}>Comments</Text>
                    <View
                        style={{
                            marginBottom: 30,
                        }}
                    >
                        <FlatList
                            data={comments}
                            horizontal
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <CommentCard comment={item} />
                            )}
                        />
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
        alignItems: 'flex-start',
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        fontSize: 20,
        textAlign: 'center',
    },
    imgContainer: {
        marginTop: 20,
        width: '100%',
        height: 200,
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
    generalInfos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infos: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default MovieDetails
