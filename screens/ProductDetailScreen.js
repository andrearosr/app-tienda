import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native'
import { BREADS } from '../data/breads';

function ProductDetailScreen() {
  const route = useRoute();
  const product = BREADS.find(item => item.id === route.params.breadID)

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>{product.name}</Text>
        <Text>{product.description}</Text>
        <Text>$ {product.price}</Text>
        <Text>{product.weight}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
})

export default ProductDetailScreen