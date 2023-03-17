import { View, FlatList } from 'react-native'
import { styles } from '../assets/styles/appContainer'
import { Header, MovieCard, Loading } from '../components'
import { RootState } from '../@types/types'
import { useSelector } from 'react-redux'
import { NavigationProp } from '@react-navigation/native'

type HomeProps = {
    navigation: NavigationProp<any>
}

const Home = ({ navigation }: HomeProps) => {
    const movies = useSelector((state: RootState) => state.movies)

    if (!movies) {
        return <Loading />
    }

    return (
        <View style={styles.container}>
            <Header />
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
