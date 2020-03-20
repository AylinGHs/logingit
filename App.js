import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Registro from './screens/Registro'; 
import Login from './screens/Login';
import Principal from './screens/Principal';
import Api from './screens/Api';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={Login}/>
        <Stack.Screen
          name='Registro'
          component={Registro}/>
         <Stack.Screen
          name='Principal'
          component={Principal}/>
          <Stack.Screen
          name='Api'
          component={Api}/>
        
          
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;