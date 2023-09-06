// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';




const HomeScreen = (props: any) => {
    console.warn(props.route.params);
    const {name, age} = props.route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Text style={{fontSize: 30}}>Name: {name}</Text>
            <Text style={{fontSize: 30}}>Age: {age}</Text>

        </View>
    );
}



export default HomeScreen;