import { Text } from 'react-native'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import api from '../helpers/api'

const Header = () => {
    const [active, setActive] = useState('popular')
    const dispatch = useDispatch()

    // handle active button
    const handleActive = (type: string) => {
        setActive(type)
    }

    // get movies list from api
    const getMoviesList = async () => {
        try {
            const response = await api.get(`/movie/${active.toLowerCase()}`)
            dispatch({
                type: 'SAVE_MOVIES',
                payload: response.data.results,
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMoviesList()
    }, [active])
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/imgs/logo.png')}
            />
            <Text style={styles.heading}>Welcome To Movies World</Text>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <TouchableOpacity
                    onPress={() => handleActive('popular')}
                    style={[
                        styles.button,
                        active === 'popular' && styles.active,
                    ]}
                >
                    <Text style={styles.text}>Popular</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleActive('top_rated')}
                    style={[
                        styles.button,
                        active === 'top_rated' && styles.active,
                    ]}
                >
                    <Text style={styles.text}>Top Rated</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleActive('upcoming')}
                    style={[
                        styles.button,
                        active === 'upcoming' && styles.active,
                    ]}
                >
                    <Text style={styles.text}>Upcoming</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        resizeMode: 'contain',
        width: 100,
        height: 50,
    },
    heading: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    button: {
        backgroundColor: 'transparent',
        borderRadius: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: 'red',
        width: 100,
        marginHorizontal: 5,
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
    active: {
        backgroundColor: 'red',
    },
})

export default Header
