import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../components/ProductItem';

function ProductsScreen({ navigation }) {
  const breads = useSelector(state => state.breads.list);
  const selectedCategory = useSelector(state => state.categories.selected);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    console.log('Hola!')
     
    return () => console.log('Chao')
  }, []);

  useEffect(() => {
    setFilteredProducts(breads.filter(item => item.category === selectedCategory.id));
  }, [selectedCategory])


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