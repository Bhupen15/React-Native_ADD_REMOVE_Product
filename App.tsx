import React, { useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Product from './components/Product';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import { SafeAreaView } from 'react-native';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen/NewPasswordScreen';
import Navigation from './src/navigation';
// import HomeScreen from '../screens/HomeScreen/index';


const App = () => {
  // const products = [
  //   {
  //     name: 'Nokia',
  //     color: 'black',
  //     price: 10000,
  //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfcNXJvkJpXJz078KmvEx7oANjZC6z7GAeaL_YdM8Oz4LLLaxzYKckpzy2VFduJzUhUkw&usqp=CAU'

  //   },
  //   {
  //     name: 'Realme',
  //     color: 'Blue',
  //     price: 14000,
  //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfcNXJvkJpXJz078KmvEx7oANjZC6z7GAeaL_YdM8Oz4LLLaxzYKckpzy2VFduJzUhUkw&usqp=CAU'

  //   },
  //   {
  //     name: 'Samsung',
  //     color: 'black',
  //     price: 20000,
  //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfcNXJvkJpXJz078KmvEx7oANjZC6z7GAeaL_YdM8Oz4LLLaxzYKckpzy2VFduJzUhUkw&usqp=CAU'

  //   }
  // ]
  return (
    // <View style={styles.container}>
    //   <Header />
    //   <ScrollView>
    //     {
    //       products.map((item: any) =>  <Product item={item}/>)
    //     }
    //     </ScrollView>
    // </View>
    <SafeAreaView style={styles.root}> 
      <Navigation/>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  container: {
  },
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
})

export default App;   

// import React, { useEffect } from 'react';
// import { StyleSheet, Text } from 'react-native';
// import { SafeAreaView } from 'react-native';
// import Navigation from './src/navigation';
// import messaging from '@react-native-firebase/messaging';
// import firebase from '@react-native-firebase/app';

// const App = () => {

//   useEffect(() => {
//     getDeviceToken();
//   }, []);
//   const getDeviceToken = async () => {
//     await messaging().registerDeviceForRemoteMessages();
//     const token = await messaging().getToken();
//     console.log("Here is token", token)
//   }
//   return (
//     <SafeAreaView style={styles.root}>
//       <Text style={styles.root}>Hello Guys</Text>
//     </SafeAreaView>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//   },
//   root: {
//     flex: 1,
//     backgroundColor: 'white',
//     fontSize: 25,
//     color: 'black'

//   }
// })
// export default App;   