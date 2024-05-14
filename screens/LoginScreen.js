import { View, Text, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo } from '@expo/vector-icons';

const LoginScreen = () => {
    return (
        <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
            <SafeAreaView>
                <Entypo
                    name="spotify"
                    size={100}
                    color="white" />
                <Text
                    style={{
                        color: "white",
                        fontSize: 30,
                        fontWeight: "bold",
                        textAlign: "center",
                        marginTop: 100,
                        marginBottom: 100,
                        marginLeft: 20,
                        marginRight: 20,
                    }}>Listen to The best Music Here</Text>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default LoginScreen