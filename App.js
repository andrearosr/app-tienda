import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';

import MainNavigator from './navigation';

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
