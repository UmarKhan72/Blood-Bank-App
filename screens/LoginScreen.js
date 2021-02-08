import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const abc = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace("Home");
            }
        });

        return abc;
    }, [])

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error));
    }

    return (
        <ScrollView>
            <View behavior="padding" style={styles.container}>
                <StatusBar style="light" />

                <View style={styles.uminput}>
                    <Input placeholder="Email" type="email" value={email} onChangeText={(e) => setEmail(e)} />
                    <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(e) => setPassword(e)} onSubmitEditing={signIn} />
                </View>

                <Button containerStyle={styles.umbtn} onPress={signIn} title="Login" />

            </View>
        </ScrollView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 230,
        paddingBottom: 275,
        backgroundColor: "#fff",
    },
    uminput: {
        width: 300,
    },
    umbtn: {
        width: 200,
        marginTop: 10,
    }
});