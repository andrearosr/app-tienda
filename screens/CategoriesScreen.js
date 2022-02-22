import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function CategoriesScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Products')
  }

  const handlePressDetail = () => {
    navigation.navigate('ProductDetail')
  }

  return (
    <View style={styles.screen}>
      <Text>
        Categories screen
      </Text>
      <Button
        onPress={handlePress}
        title="Ir a productos"
      />
      <Button
        onPress={handlePressDetail}
        title="Ir a detalle"
      />
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

export default CategoriesScreen