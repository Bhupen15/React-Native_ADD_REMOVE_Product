import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const NewPasswordScreen = () => {
    const { control, handleSubmit } = useForm();

    const navigation: any = useNavigation();

    const onSubmitPress = (data: any) => {
        console.warn("New password", data)
        navigation.navigate('MainScreen')
    }

    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Reset your password
                </Text>

                <CustomInput
                    placeholder="Enter your code"
                    name="username"
                    control={control}
                    rules={{ required: 'Code is required' }}
                />

                <CustomInput
                    placeholder="Enter your new password"
                    name="password"
                    control={control}
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 6,
                            message: "Password should be atleast 6 characters long"
                        }
                    }}
                    secureTextEntry

                />

                <CustomButton text="Submit" onPress={handleSubmit(onSubmitPress)} />

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
export default NewPasswordScreen