import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { ImageAssets } from '../../../assests/images'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import SocialSignInButton from '../../components/SocialSignInButton.tsx/SocialSignInButton'
import { useNavigation } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'
const SignInScreen = () => {
  const { height } = useWindowDimensions();
  
  const { control, handleSubmit } = useForm();

  const navigation: any = useNavigation();
  const onSignInPress = (data: any) => {
    console.log("This is data", data)
    //validate user 
    navigation.navigate('MainScreen');  
  
  }

  const onForgotPassword = () => {

    navigation.navigate('ForgotPassword');
  }

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={ImageAssets.logoImage}
          style={[styles.logo, { height: height * 0.23 }]}
          resizeMode='contain' />

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required'}}
        />

        <CustomInput 
          name="password"
          placeholder="Password"
          control={control}
          rules={{required: 'Password is required', minLength: {value: 3, message: 'Password should be minimum 3 characters long'}}}
          secureTextEntry
        />

        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPress)} />
        <CustomButton text="Forgot password?" onPress={onForgotPassword} type="TERTIARY" />

        <SocialSignInButton />
        <CustomButton text="Don't have an account? Create one" onPress={onSignUpPress} type="TERTIARY" />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200
  },
}
);
export default SignInScreen