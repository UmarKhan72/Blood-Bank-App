import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Input, Text } from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .catch(error => alert(error.message))
        navigation.navigate("Home")
    }

    return (
        <ScrollView>
            <View behavior="padding" style={styles.container}>
                <StatusBar style="light" />

                <Text h3 style={{ marginBottom: 50 }}>Create a Account</Text>

                <View style={styles.uminput}>
                    <Input placeholder="Full Name" type="text" value={name} onChangeText={(text) => setName(text)} />
                    <Input placeholder="Email" type="email" value={email} onChangeText={(text) => setEmail(text)} />
                    <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(text) => setPassword(text)} />
                </View>

                <Button onPress={register} containerStyle={styles.umbtn} title="Register" />
                <View style={{ height: 175 }} />
            </View>
        </ScrollView>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: "white",
    },
    uminput: {
        width: 300,
    },
    umbtn: {
        width: 290,
        marginTop: 10,
    },
});
