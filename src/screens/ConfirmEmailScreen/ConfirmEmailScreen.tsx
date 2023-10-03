import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
const ConfirmEmailScreen = () => {
    const { control, handleSubmit } = useForm();
 
    const navigation: any = useNavigation();

    const onConfirmPress = (data: any) => {
        console.warn("Hello this is data", data)
       navigation.navigate('MainScreen')
    }
    const onResendPress = () => {
        console.warn("onResendPressed")
    }


    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>
                  Confirm your email
                </Text>

                <CustomInput 
                placeholder="Enter your confirmation code" 
                name="code"
                control={control}
                rules={{required: 'Confirmation code is required'}}
                />
             
                <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPress)} />
               
     
                <CustomButton text="Resend" onPress={onResendPress} type="SECONDARY" />  
                
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
export default ConfirmEmailScreen