import { View, FlatList } from 'react-native'
import { useEffect } from 'react'
import { styles } from '../assets/styles/appContainer'
import { Header, Heading, MovieCard } from '../components'
import api from '../helpers/api'
import { RootState } from '../@types/types'
import { useDispatch, useSelector } from 'react-redux'
import { NavigationProp } from '@react-navigation/native'

type HomeProps = {
    navigation: NavigationProp<any>
}

const Home = ({ navigation }: HomeProps) => {
    const dispatch = useDispatch()
    const movies = useSelector((state: RootState) => state.movies)

    useEffect(() => {
        const getTrendingMovies = async () => {
            try {
                const response = await api.get('/trending/movie/day')
                dispatch({
                    type: 'SAVE_MOVIES',
                    payload: response.data.results,
                })
            } catch (error) {
                console.log(error)
            }
        }
        getTrendingMovies()
    }, [movies])

    return (
        <View style={styles.container}>
            <Header />
            <Heading content="Most Popular" />
            <FlatList
                data={movies}
                numColumns={2}
                renderItem={({ item }) => (
                    <MovieCard
                        movieName={item.title}
                        url={item.poster_path}
                        id={item.id}
                        navigation={navigation}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default Home
