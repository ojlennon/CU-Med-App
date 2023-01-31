import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { Button, Box } from "@react-native-material/core";
import TopBar from './components/topBar';


export default function App() {
  return (
    <>
    <TopBar/>
    {/* <View style={styles.container}>
       
    </View> */}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
