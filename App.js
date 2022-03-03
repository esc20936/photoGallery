import React,{useState} from 'react';
import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform,SafeAreaView,ScrollView,RefreshControl,TouchableOpacity} from 'react-native';

import { NavigationContainer , StackActions, NavigationActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons,Entypo,FontAwesome,MaterialIcons,FontAwesome5} from '@expo/vector-icons';
import Colores from './components/ColorsConfig.js';
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function App() {

  const [theme,setTheme] = useState("dark");
  



  return (
    <NavigationContainer >
     
      <Tab.Navigator
      
      
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            
            return <Entypo name="home" size={30} color={color}/>;
          } else if (route.name === 'Search') {
            return <FontAwesome name="search" size={30} color={color} />
          }else if (route.name === 'reels'){
            return <MaterialIcons name="video-library" size={30} color={color}/>

          }else if (route.name === 'Shop'){
            
            return <FontAwesome5 name="shopping-bag" size={30} color={color}/>
             
            
          }

          // You can return any component that you like here!
          // return <Entypo name="home" size={30} color={(theme==="light")? "black": "white"}/>;
        },
        tabBarShowLabel:false,
        tabBarStyle: { position: 'absolute',backgroundColor:'#22232f', borderTopWidth:0},

        
       

        tabBarActiveTintColor: '#f5f5f5',
        tabBarInactiveTintColor: '#919191',
        tabBarActiveBackgroundColor:'#22232f',
        tabBarInactiveBackgroundColor:'#22232f'
      })
      
      }>
        
        <Tab.Screen name="Home" tema={theme}  component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Search" tema={theme}  component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="reels"  tema={theme}  component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Shop" tema={theme}  component={Home} options={{headerShown: false}}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default App;
