import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import Logo from '../images/Logo1.png';
import { StatusBar } from 'expo-status-bar';

const FirstScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image source={Logo} style={styles.umimg} />
            <Button onPress={() => navigation.navigate("Login")} containerStyle={styles.umbtn} title="Sign in" />
            <Button onPress={() => navigation.navigate("Register")} containerStyle={styles.umbtn} type="outline" title="Create Account" />
        </View>
    )
}

export default FirstScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: "#e72141",
    },
    umimg: {
        width: 200,
        height: 200
    },
    umbtn: {
        width: 250,
        marginTop: 15,
        backgroundColor: "white"
    }
})
