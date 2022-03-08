import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../store/actions/order.action';

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.orders.list);

  useEffect(() => {
    dispatch(getOrders())
  }, []);

  console.log(list)

  return (
    <View>
      <Text>Ordenes:</Text>
    </View>
  )
}

export default OrdersScreen;