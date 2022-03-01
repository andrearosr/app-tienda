import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 
import ShopNavigator from './ShopNavigator'
import CartNavigator from './CartNavigator';

const Tab = createBottomTabNavigator()

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Shop"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarLabel: "Tienda",
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <AntDesign
                name="home"
                size={24}
                color={focused ? 'blue' : 'black'}
              />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: "Carrito",
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <AntDesign
                name="shoppingcart"
                size={24}
                color={focused ? 'blue' : 'black'}
              />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default TabNavigator;