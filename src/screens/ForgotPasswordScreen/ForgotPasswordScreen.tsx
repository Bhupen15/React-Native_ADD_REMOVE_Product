import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'

import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
const ForgotPasswordScreen = () => {
    const { control, handleSubmit } = useForm();
   

   const navigation: any = useNavigation();
    const onSendPress = (data: any) => {
        console.warn("This is forgot password", data)
        navigation.navigate('NewPassword');
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    }

   
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Reset your password
                </Text>

                <CustomInput 
                placeholder="Enter your username" 
                name="username"

                control={control}
                rules={{required: 'Your registered username is required'}}
                />

                <CustomButton text="Send" onPress={handleSubmit(onSendPress)} />

                <CustomButton text="Back to Sign In" onPress={onSignInPress} type="TERTIARY" />

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075'
    }

}
);
export default ForgotPasswordScreen