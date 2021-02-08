import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Button, Input } from 'react-native-elements';
import { db } from '../firebase';
import { StatusBar } from 'expo-status-bar';

const DonorForm = ({ navigation }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [blood, setBlood] = useState("");
    const [address, setAddress] = useState("");
    const [sign, setSign] = useState("");

    const donateBlood = async () => {
        await db.collection('chats').add({
            FName: name,
            phNumber: phone,
            bgroup: blood,
            addr: address,
            sgn: sign,
        }).then(() => {
            navigation.goBack();
        })
            .catch((error) => alert(error));
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar style="light" />
                <Input
                    placeholder="Enter Full Name"
                    value={name}
                    onChangeText={(e) => setName(e)}
                    onSubmitEditing={donateBlood}
                />
                <Input
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChangeText={(e) => setPhone(e)}
                    onSubmitEditing={donateBlood}
                />
                <Input
                    placeholder="Enter Your Local-Address"
                    value={address}
                    onChangeText={(e) => setAddress(e)}
                    onSubmitEditing={donateBlood}
                />
                <Picker
                    selectedValue={blood}
                    onValueChange={(e) => setBlood(e)}
                >
                    <Picker.Item label="Blood Group" value="Blood Group" />
                    <Picker.Item label="A" value="A" />
                    <Picker.Item label="B" value="B" />
                    <Picker.Item label="AB" value="AB" />
                    <Picker.Item label="O" value="O" />
                </Picker>
                <Picker
                    selectedValue={sign}
                    onValueChange={(e) => setSign(e)}
                >
                    <Picker.Item label="Sign" value="Sign" />
                    <Picker.Item label="+" value="+" />
                    <Picker.Item label="-" value="-" />
                </Picker>
                <Button disabled={!name, !phone, !blood, !address, !sign} onPress={donateBlood} title='Donate Blood' />
            </View>
        </ScrollView>
    )
}

export default DonorForm;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        paddingTop: 100,
        paddingBottom: 215,
        height: "100%",
    },
})

