import Home from './src/screens/Home';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar 
      backgroundColor='transparent'
      translucent
    />
    <Home/>
  </>
  );
}

