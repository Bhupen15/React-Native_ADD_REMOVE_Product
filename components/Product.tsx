import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { addToCart, removeFromCart } from './redux/action';
import { useDispatch, useSelector } from 'react-redux'
const Product = (props: any) => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItem = useSelector((state: any) => state.reducer);
  const [isAdded, setisAdded] = useState(false)

  const handleAddToCart = (item: any) => {
    // console.warn("called", item)
    dispatch(addToCart(item));
  }
  const handleRemoveFromCart = (item: any) => {
    // console.warn("item removed", item)
    dispatch(removeFromCart(item.name));
  }

  useEffect(() => {
    let result = cartItem.filter((element: any) => {
      return element.name === item.name
    })
    if (result.length) {
      setisAdded(true)
    } else {
      setisAdded(false);
    }
   
  }, [cartItem])

  return (
    <View style={{ alignItems: 'center', borderBottomColor: 'skyblue', borderBottomWidth: 2, padding: 10, margin: 80, marginBottom: 10 }}>
      <Text style={{ fontSize: 24 }}>{item.name}</Text>
      <Text style={{ fontSize: 24 }}>{item.color}</Text>
      <Text style={{ fontSize: 24 }}>{item.price}</Text>
      <Image style={{ width: 200, height: 200 }} source={{ uri: item.image }} />
      {
        isAdded ?
          <Button title='Remove from cart' onPress={() => handleRemoveFromCart(item)} />
          :
          <Button title='Add to cart' onPress={() => handleAddToCart(item)} />

      }

    </View>
  )
}
const styles = StyleSheet.create({
  container: {

  }
})

export default Product;    