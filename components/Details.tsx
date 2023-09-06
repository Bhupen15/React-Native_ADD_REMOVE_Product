// In App.js in a new project
import { useState } from 'react';
import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';


const DetailsScreen = (props: any) => {
    // const name = 'bhupendra';
    const [name, setName] = useState("");
    const age = 21;


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <TextInput
                onChangeText={(text) => setName(text)} placeholder="Enter your name"></TextInput>
            <Button title='GO TO HOME PAGE' onPress={() => props.navigation.navigate("Home", { name, age })} />
        </View>
    );
}

export default DetailsScreen;