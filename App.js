import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { Button, Box } from "@react-native-material/core";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/home'
import SecondLayer from './components/secondLayer';
import ThirdLayer from './components/thirdLayer';
import Appendix from './components/appendix';
import Extra from './components/extra';
import Personnel from './components/personnel';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Second" component={SecondLayer} />
        <Stack.Screen name="Third" component={ThirdLayer}/>
        <Stack.Screen name="Appendix" component={Appendix} />
        <Stack.Screen name="Extra" component={Extra} />
        <Stack.Screen name="Personnel" component={Personnel} />
      </Stack.Navigator>
    </NavigationContainer>
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
