import React from 'react';
import { FlatList } from 'react-native';
import ProductItem from '../components/ProductItem';
import { BREADS } from '../data/breads';

function ProductsScreen({ navigation, route }) {
  const filteredProducts = BREADS.filter(item => item.category === route.params.categoryID)

  const handlePress = (item) => {
    navigation.navigate('ProductDetail', {
      name: item.name,
      breadID: item.id,
    })
  }

  const renderItem = ({ item }) => (
    <ProductItem
      item={item}
      onSelected={handlePress}
    />
  )

  return (
    <FlatList
      data={filteredProducts}
      renderItem={renderItem}
    />
  )
}


export default ProductsScreen