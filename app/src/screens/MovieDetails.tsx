import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from '../assets/styles/appContainer'

class MovieDetails extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Movie Details</Text>
            </View>
        )
    }
}

export default MovieDetails
