import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Platform,SafeAreaView,ScrollView,RefreshControl,TouchableOpacity} from 'react-native';
import { NavigationContainer , StackActions, NavigationActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LittlePreviewCard from '../components/LittlePreview.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
var theme;
export default function Home() {

 var [theme,setTheme] = useState("light");

 const colores ={
   light: {
     fondo:"#f5f5f5",
     textoPrincipal:"#000",
     littlePreviewContainer:"#fff",
     textoSecundario:'#919191'
   },
   dark: {
    fondo:"#22232f",
    textoPrincipal:"#f5f5f5",
    littlePreviewContainer:"#383b51",
     textoSecundario:'#919191'
   }
 }
 
  

  return (  
    <SafeAreaView style={[styles.container,{backgroundColor:(theme==="light")? colores.light.fondo:colores.dark.fondo}]}>
    
        <View style={[styles.titleContainer,{backgroundColor:(theme==="light")? colores.light.fondo:colores.dark.fondo,}]}>
          <Text style={[styles.title,{color:(theme==="light")? colores.light.textoPrincipal:colores.dark.textoPrincipal}]}>Photo Gallery</Text>
          <TouchableOpacity style={styles.lightNightMode} onPress={() =>{setTheme((theme==="light")? "dark":"light"); }}>
            <MaterialCommunityIcons name="theme-light-dark" size={24} color={(theme==="light")? "black": "white"} />
          </TouchableOpacity>
        </View>
    
        <View style={[styles.mainView,{backgroundColor:(theme==="light")? colores.light.fondo:colores.dark.fondo,}]}>
          <ScrollView>
            <View style={[styles.scrollViewContainer,{backgroundColor:(theme==="light")? colores.light.fondo:colores.dark.fondo,}]}>
                <ScrollView horizontal={true} bounces={false} style={{width: '100%'}} endFillColor={"#e0e0e0"}>
                    <LittlePreviewCard fondo={(theme==="light")? colores.light.littlePreviewContainer:colores.dark.littlePreviewContainer} colorT={(theme==="light")? colores.light.textoPrincipal:colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/200?random=1'}} author="Pablo Escobar" title="Mi diseno especial" />
                    <LittlePreviewCard fondo={(theme==="light")? colores.light.littlePreviewContainer:colores.dark.littlePreviewContainer} colorT={(theme==="light")? colores.light.textoPrincipal:colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random=2'}} author="Arutro Espada" title="La experiencia"/>
                    <LittlePreviewCard fondo={(theme==="light")? colores.light.littlePreviewContainer:colores.dark.littlePreviewContainer} colorT={(theme==="light")? colores.light.textoPrincipal:colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random=3'}} author="Mariana David" title="AMM"/>
                    <LittlePreviewCard fondo={(theme==="light")? colores.light.littlePreviewContainer:colores.dark.littlePreviewContainer} colorT={(theme==="light")? colores.light.textoPrincipal:colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random=4'}} author="Fredy Velasquez" title="Mi obra"/>
                    <LittlePreviewCard fondo={(theme==="light")? colores.light.littlePreviewContainer:colores.dark.littlePreviewContainer} colorT={(theme==="light")? colores.light.textoPrincipal:colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random=5'}} author="Angel Higueros" title="Historia de mi vida"/>
                    <LittlePreviewCard fondo={(theme==="light")? colores.light.littlePreviewContainer:colores.dark.littlePreviewContainer} colorT={(theme==="light")? colores.light.textoPrincipal:colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random=6'}} author="Alejandra Guzman Sagastume" title="No no"/>
                    <LittlePreviewCard fondo={(theme==="light")? colores.light.littlePreviewContainer:colores.dark.littlePreviewContainer} colorT={(theme==="light")? colores.light.textoPrincipal:colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random=7'}} author="Pablo Escobar" title="Mi diseno especial"/>
                </ScrollView>
            </View>
            <View style={[styles.publications,{backgroundColor:(theme==="light")? colores.light.fondo:colores.dark.fondo,}]}>
              <View style={[styles.titleContainer,{alignSelf:"flex-start",marginTop:0,marginLeft:7}]}>
              
                <Text style={[styles.title,{color:(theme==="light")? colores.light.textoPrincipal:colores.dark.textoPrincipal}]}>Most popular</Text>
              </View>

            </View>

          </ScrollView>
        </View>
       
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: (Platform.OS==="android")? 20:0,
  },

  titleContainer: {
    flex: 0.10,
    flexDirection:'row',
    marginTop:20,
    marginLeft:27,
    marginRight:27,
    justifyContent:'space-between',
    alignItems: 'center',
    width:"85%",

  },
  title:{
      fontFamily: (Platform.OS==="android") ? "Roboto":"Helvetica",
      fontWeight: "bold",
      fontSize:25,
      
  },
  mainView:{
    flex:0.8,
    marginTop:10,
    width:"90%",
    justifyContent: 'center',
  },
  lightNightMode:{

  }
  ,
  scrollViewContainer:{
    flex:0.3,
    
    width:'100%',
    justifyContent:'center',
    alignItems:'flex-start',
    alignSelf:'center',

  },
  publications:{
    marginTop:30,
    
    flex: 1,
    width: '100%',

  }
});

