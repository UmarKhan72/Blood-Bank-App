import React from 'react';
import { ListItem } from 'react-native-elements';

const CustomListitem = ({ id, phNumber, enterChat, FName, bgroup, addr, sgn }) => {

    return (
        <ListItem onPress={() => enterChat(id, phNumber, FName, bgroup, addr, sgn)} key={id} bottomDivider>
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    Name: {FName}{'\n'}
                    Blood Group: {bgroup}{sgn}{'\n'}
                    Phone Number: {phNumber}{'\n'}
                    Address: {addr}
                </ListItem.Title>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListitem;