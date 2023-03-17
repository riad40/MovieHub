import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    FlatList,
    Alert,
} from 'react-native'
import { styles } from '../assets/styles/appContainer'
import { useState } from 'react'
import api from '../helpers/api'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { MovieCard, Loading } from '../components'
import { NavigationProp } from '@react-navigation/native'

type Props = {
    navigation: NavigationProp<any>
}

const Search = ({ navigation }: Props) => {
    const [search, setSearch] = useState('')

    const [movies, setMovies] = useState<any>([])

    // handle search input
    const handleSearch = (text: string) => {
        setSearch(text)
        if (text === '') {
            setMovies([])
        }
    }

    // search movies
    const searchMovies = async () => {
        if (search === '') {
            Alert.alert('Please enter a movie name')
            return
        }
        try {
            const response = await api.get(`/search/movie?query=${search}`)
            setMovies(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    if (!movies) {
        return <Loading />
    }

    return (
        <View style={styles.container}>
            <Text style={styles1.heading}>Search</Text>

            <View style={styles1.searchContainer}>
                <TextInput
                    style={styles1.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#fff"
                    value={search}
                    onChangeText={handleSearch}
                />
                <TouchableOpacity
                    style={styles1.searchButton}
                    onPress={searchMovies}
                >
                    <Ionicons name="search" size={20} color="#fff" />
                </TouchableOpacity>
            </View>

            <View>
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
            <View style={styles1.noMoviesContainer}>
                {movies.length === 0 && (
                    <>
                        <Ionicons name="rocket" size={50} color="#fff" />
                        <Text style={{ color: '#fff' }}>
                            Search for a movie....
                        </Text>
                    </>
                )}
            </View>
        </View>
    )
}

const styles1 = StyleSheet.create({
    heading: {
        fontSize: 25,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
        height: 50,
        backgroundColor: '#000',
        borderRadius: 10,
    },
    searchInput: {
        width: '80%',
        height: '100%',
        color: '#fff',
        paddingHorizontal: 10,
    },
    searchButton: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#495057',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    noMoviesContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
})

export default Search
