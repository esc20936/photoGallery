import React,{useState} from 'react';
import { NavigationContainer , StackActions, NavigationActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons,Entypo,FontAwesome,MaterialIcons,FontAwesome5} from '@expo/vector-icons';
import Search from './views/Search.js';
import Colores from './components/ColorsConfig.js';

const Tab = createBottomTabNavigator();

function App() {



  const theme = Colores.theme;
  
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
        },
        tabBarShowLabel:false,
        tabBarStyle: { position: 'absolute',backgroundColor:'#22232f', borderTopWidth:0},
        tabBarHideOnKeyboard:true,

        tabBarActiveTintColor: (theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal,
        tabBarInactiveTintColor: '#919191',
        tabBarActiveBackgroundColor:(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer,
        tabBarInactiveBackgroundColor:(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer
      })
      
      }>
        
        <Tab.Screen name="Home" tema={theme}  component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Search" tema={theme}  component={Search} options={{headerShown: false}}/>
         <Tab.Screen name="reels"  tema={theme}  component={Home} options={{headerShown: false}}/>
       {/* <Tab.Screen name="Shop" tema={theme}  component={Home} options={{headerShown: false}}/> */}

      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default App;
