import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigationState } from '@react-navigation/native'

function ProductDetailScreen({ }) {
  const state = useNavigationState(state => state)
  console.log(state)
  
  return (
    <View style={styles.screen}>
      <Text>
        Product detail screen
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default ProductDetailScreen