import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function ProductsScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate('ProductDetail')
  }

  return (
    <View style={styles.screen}>
      <Text>
        Products screen
      </Text>
      <Button
        onPress={handlePress}
        title="Ir al detalle"
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

export default ProductsScreen