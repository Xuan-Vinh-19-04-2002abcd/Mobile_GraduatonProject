import { Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pitchs from "./Pitchs";
import Pitch from "./Pitch";
import DetailsScreen from "./Detail";
import Post from "./Post";
import SearchPitch from "./SearchPitch";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {

    return (
        
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                  name="BottomTab"
                  component={BottomTab}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Pitchs"
                    component={Pitchs}
                    options={{ headerShown: true}}
                />
                <Stack.Screen
                    name="Pitch"
                    component={Pitch}
                    options={{ headerShown: true }}
                />
                <Stack.Screen
                    name="Detail"
                    component={DetailsScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Search"
                    component={SearchPitch}
                    options={{ headerShown: false }}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default App;

 const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
            name = "Post"
            component={Post}
            options={{ headerShown: false }}
            />
            <Tab.Screen 
            name = "Pitch"
            component={Pitchs}
            options={{ headerShown: false }}
            />

        </Tab.Navigator>
    )
}