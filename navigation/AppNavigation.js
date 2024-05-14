import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { Entypo, AntDesign } from '@expo/vector-icons';
import ProfileScreen from "../screens/ProfileScreen";



const Tab = createBottomTabNavigator();
function AppNavigator() {

    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle:{
                color: "gray",
                borderTopColor: "black",
                borderTopWidth: 1,
                paddingTop: 10,
                shadowOpacity: 4,
                shadowRadius: 10,
            },
        }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarLabelStyle: { color: "black" },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Entypo name="home" size={24} color="gray" />
                        ) : (
                            <Entypo name="home" size={24} color="black" />
                        )
                }} />


            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarLabelStyle: { color: "black" },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <AntDesign name="profile" size={24} color="gray" />
                        ) : (
                            <AntDesign name="profile" size={24} color="black" />
                        )
                }} />

                
        </Tab.Navigator>
    )
}

export default AppNavigator;