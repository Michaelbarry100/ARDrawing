import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigation from "./AppNavigation";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
                <Stack.Screen name="AppNavigation" component={AppNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} />
                {/*<Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Artist" component={Artist} />
                <Stack.Screen name="Album" component={Album} />
                <Stack.Screen name="Playlist" component={Playlist} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="CreatePlaylist" component={CreatePlaylist} />
                <Stack.Screen name="CreateAlbum" component={CreateAlbum} />
                <Stack.Screen name="CreateArtist" component={CreateArtist} />
                <Stack.Screen name="CreatePlaylist" component={CreatePlaylist} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;