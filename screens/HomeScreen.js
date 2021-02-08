import React, { useEffect, useLayoutEffect, useState } from 'react';
import { SafeAreaView, View, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, ScrollView } from 'react-native';
import CustomListitem from '../components/CustomListitem';
import { StatusBar } from 'expo-status-bar';
import { auth, db } from '../firebase';
import { SimpleLineIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const [chats, setChats] = useState([]);

    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace('Blood Bank App')
        })
    };

    useEffect(() => {
        const abc = db.collection('chats').onSnapshot((snapshot) => (
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        )
        );
        return abc;
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Blood Donors",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                        <Text style={styles.umsignout}>Sign out</Text>
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: 80,
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('DonorForm')} activeOpacity={0.5}>
                        <SimpleLineIcons name="plus" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation]);

    const enterChat = (id, FName, phNumber, bgroup, addr, sgn) => {
        navigation.navigate("InfoScreen", {
            id,
            FName,
            phNumber,
            bgroup,
            addr,
            sgn,
        });
    };

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <StatusBar style="auto" />
                {chats.map(({ id, data: { FName, phNumber, bgroup, addr, sgn } }) => (
                    <CustomListitem
                        key={id}
                        id={id}
                        FName={FName}
                        phNumber={phNumber}
                        bgroup={bgroup}
                        addr={addr}
                        sgn={sgn}
                        enterChat={enterChat}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    umsignout: {
        backgroundColor: "#e72141",
        color: "white",
        width: 65,
        height: 40,
        borderRadius: 20,
        textAlign: 'center',
        paddingTop: 10
    }
});
