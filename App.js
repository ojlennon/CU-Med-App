import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

import Home from './components/home'
import SecondLayer from './components/secondLayer';
import ThirdLayer from './components/thirdLayer';
import Appendix from './components/appendix';
import Extra from './components/extra';
import Personnel from './components/personnel';
import Articles from './components/articles';

import Pass from './components/pass';

const Stack = createNativeStackNavigator();

export default function App() {
  LogBox.ignoreLogs(['Warning: ...'])
  LogBox.ignoreAllLogs()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Pass">
        <Stack.Screen name="Pass" component={Pass}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Second" component={SecondLayer} />
        <Stack.Screen name="Third" component={ThirdLayer}/>
        <Stack.Screen name="Appendix" component={Appendix} />
        <Stack.Screen name="Extra" component={Extra} />
        <Stack.Screen name="Personnel" component={Personnel} />
        <Stack.Screen name="Articles" component={Articles} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}