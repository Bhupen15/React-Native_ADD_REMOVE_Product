import { View, Text, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native'
import React from 'react'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import SocialSignInButton from '../../components/SocialSignInButton.tsx/SocialSignInButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import auth from '@react-native-firebase/auth'


const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const SignUpScreen = () => {


    const { control, handleSubmit, watch, getValues } = useForm();
    const pwd = watch('password');

    const navigation: any = useNavigation();
    const onRegisterPress = () => {
        //   const val1 : any =  getValues(["username", "email", "password", "password-repeat"])
        const val1: any = getValues("email")
        const val2: any = getValues("password")
        auth()
            .createUserWithEmailAndPassword(val1, val2)
            .then(() => {
                console.log('User account created & signed in!');

            })
            .catch((error: any) => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
                Alert.alert(error.code)
                console.error(error);
            })

        // navigation.navigate('ConfirmEmail')

    }
    const onTermsOfUsePressed = () => {
        console.warn("onTermsOfUsePressed")
    }
    const onPrivacyPolicyPressed = () => {
        console.warn("onPrivacyPolicyPressed")
    }


    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Create an account
                </Text>

                <CustomInput
                    name="username"
                    control={control}
                    placeholder="Username"
                    rules={{
                        required: 'Username is required',
                        minLength: {
                            value: 3,
                            message: "Username should be atleast 3 characters long"
                        },
                        maxLength: {
                            value: 24,
                            message: "Username should be max 24 characters long"
                        }
                    }}

                />

                <CustomInput
                    name="email"
                    control={control}
                    placeholder="Email"
                    rules={{ pattern: { value: EMAIL_REGEX, message: 'Email is invalid' } }}

                />

                <CustomInput
                    name="password"
                    placeholder="Password"
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

                <CustomInput
                    name="password-repeat"
                    control={control}
                    placeholder="Confirm password"
                    rules={{
                        validate: (value: any) => value === pwd || 'Password do not match'
                    }}

                    secureTextEntry />

                <CustomButton text="Register" onPress={handleSubmit(onRegisterPress)} />
                <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text></Text>
                <SocialSignInButton />
                <CustomButton text="Have an account? Sign In" onPress={onSignInPress} type="TERTIARY" />

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
export default SignUpScreen