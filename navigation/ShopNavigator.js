import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import { Platform, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Colors';

const Stack = createNativeStackNavigator();

function ShopNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: Platform.OS === 'ios' ? COLORS.primary : 'white',
      }}
    >
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerTintColor: COLORS.accent,
          title: 'Bakery Mi Pan Su Su Su Mi Pan Ya KA Kuz ñam ñam ñam'
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === 'ios' ? 'white' : COLORS.primary,
  },
  headerTitle: {
    fontWeight: 'bold',
  }
})

export default ShopNavigator;