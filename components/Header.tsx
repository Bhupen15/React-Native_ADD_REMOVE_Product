import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const Header = () => {

  const cartData = useSelector((state: any) => state.reducer)
  console.warn(cartData);
  const [cartItem, setCartItem] = useState(0);

  useEffect(() => {

    setCartItem(cartData.length)
  }, [cartData])

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={{ fontSize: 30, textAlign: 'right', padding: 10, backgroundColor: 'skyblue' }}>{cartItem}</Text>

      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    // marginTop: 
  }
})

export default Header;      