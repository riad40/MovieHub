import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from '../assets/styles/appContainer'

class Favorites extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Favorites</Text>
            </View>
        )
    }
}

export default Favorites
