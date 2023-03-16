import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'

import Home from './screens/Home'
import Favorites from './screens/Favorites'
import MovieDetails from './screens/MovieDetails'

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (route.name === 'Favorites') {
                            iconName = focused ? 'heart' : 'heart-outline'
                        }

                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        )
                    },
                    tabBarActiveTintColor: '#E40814',
                    tabBarInactiveTintColor: '#b3b3b3',
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#000',
                        borderTopWidth: 0,
                        height: 60,
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        marginBottom: 4,
                        fontWeight: 'bold',
                    },
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Favorites" component={Favorites} />
                <Tab.Screen
                    name="MovieDetails"
                    component={MovieDetails}
                    options={{
                        tabBarButton: (props) => null,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export { AppNavigator }
