import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from "./screens/Chat";
import LiveStream from "./screens/LiveStream";
import Profile from "./screens/Profile";
import {AntDesign, Fontisto} from '@expo/vector-icons';
import Login from "./screens/auth/Login";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Home = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    if (route.name === 'Chat') {
                        return <AntDesign name="wechat" size={size} color={color}/>
                    } else if (route.name === 'LiveStream') {
                        return <Fontisto name="livestream" size={size} color={color}/>
                    } else {
                        return <AntDesign name="profile" size={size} color={color}/>
                    }
                },
            })}
        >
            <Tab.Screen name="Chat" component={Chat}/>
            <Tab.Screen name="LiveStream" component={LiveStream}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    );
}

export default function App() {
    // StatusBar.setHidden(true, 'none');

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
