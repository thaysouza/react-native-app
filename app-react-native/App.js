import React from 'react';
import { View, Text, StatusBar} from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
 // import { createDrawerNavigator } from '@react-navigation/drawer';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

  import Home from './src/screen/Home/Home';
  import Login from './src/screen/Login/Login';
  import Produtos from './src/screen/Produtos/Produtos';


  //const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();


function App(){
  return(
    <NavigationContainer>
    
      <StatusBar />
      
  <Tab.Navigator initialRouteName="Home">

       <Tab.Screen name="Home" component={Home} />
       <Tab.Screen name="Login" component={Login} />
       <Tab.Screen name="Produtos" component={Produtos} />

  </Tab.Navigator>

    

  </NavigationContainer>
  )
}




export default App;