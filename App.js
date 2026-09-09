import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/components/navbar/Navbar';

export default function App() {
  return (
    <>
    <Navbar />
    <View style={styles.container}>

      <Text>teste</Text>
      
    </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
