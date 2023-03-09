import { View, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { styles } from '../assets/styles/appContainer'
import { Header, Heading, MovieCard } from '../components'
import api from '../helpers/api'

const Home = () => {
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

    const [movies, setMovies] = useState<Movie[]>([])

    const getTrendingMovies = async () => {
        try {
            const response = await api.get('/trending/all/day')
            setMovies(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTrendingMovies()
    }, [])

    return (
        <View style={styles.container}>
            <Header />
            <Heading content="Most Popular" />
            <FlatList
                data={movies}
                numColumns={2}
                renderItem={({ item }) => (
                    <MovieCard movieName={item.title} url={item.poster_path} />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default Home
