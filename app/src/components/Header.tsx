import { View, Image, TextInput, StyleSheet, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Header = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/imgs/logo.png')}
            />
            <View style={styles.search}>
                <Ionicons name="search" size={20} color="#fff" />
                <Text style={{ color: '#FFF', paddingLeft: 5 }}>Search</Text>
                <TextInput style={styles.searchInput} />
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
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2F2F2F',
        borderRadius: 10,
        padding: 5,
        height: 50,
        width: '100%',
        marginTop: 15,
    },
    searchInput: {
        marginLeft: 5,
        color: '#FFF',
    },
})

export default Header
