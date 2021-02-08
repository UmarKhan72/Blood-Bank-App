import React, { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const InfoScreen = ({ navigation, route }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View>
                    <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>Donor Info</Text>
                </View>
            ),
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={navigation.goBack}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar style="light" />
            <Text style={{ color: "black", fontWeight: "700" }}>Name: {route.params.phNumber}</Text>
            <Text style={{ color: "black", fontWeight: "700" }}>Local-Address: {route.params.addr}</Text>
            <Text style={{ color: "black", fontWeight: "700" }}>Blood Group: {route.params.bgroup}</Text>
            <Text style={{ color: "black", fontWeight: "700" }}>Blood Group Sign: {route.params.sgn}</Text>
            <Text style={{ color: "black", fontWeight: "700" }}>PhoneNumber: {route.params.FName}</Text>
        </View>
    )
}

export default InfoScreen;