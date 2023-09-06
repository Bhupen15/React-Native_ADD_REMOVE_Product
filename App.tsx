import React, { useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Product from './components/Product';


const App = () => {
  const products = [
    {
      name: 'Nokia',
      color: 'black',
      price: 10000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfcNXJvkJpXJz078KmvEx7oANjZC6z7GAeaL_YdM8Oz4LLLaxzYKckpzy2VFduJzUhUkw&usqp=CAU'

    },
    {
      name: 'Realme',
      color: 'Blue',
      price: 14000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfcNXJvkJpXJz078KmvEx7oANjZC6z7GAeaL_YdM8Oz4LLLaxzYKckpzy2VFduJzUhUkw&usqp=CAU'

    },
    {
      name: 'Samsung',
      color: 'black',
      price: 20000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfcNXJvkJpXJz078KmvEx7oANjZC6z7GAeaL_YdM8Oz4LLLaxzYKckpzy2VFduJzUhUkw&usqp=CAU'

    }
  ]

  return (

    <View style={styles.container}>
      <Header />
      <ScrollView>
        {
          products.map((item: any) =>  <Product item={item}/>)
        }
        </ScrollView>
    


    </View>
  )
}
const styles = StyleSheet.create({
  container: {

  }
})

export default App;   