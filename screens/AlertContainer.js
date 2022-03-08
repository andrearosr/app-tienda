import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart } from '../store/actions/cart.action'

function AlertContainer() {
  const dispatch = useDispatch()
  const cartStatus = useSelector(state => state.cart.status);

  useEffect(() => {
    if (cartStatus === "done") {
      Alert.alert(
        "Orden confirmada!",
        "Tus productos van en camino",
        [{
          text: "Genial",
          onPress: () => dispatch(resetCart()),
        }])
    }
  }, [cartStatus]);

  return null;
}

export default AlertContainer;