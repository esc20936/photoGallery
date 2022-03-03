import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import React,{useState,useRef, useEffect} from 'react';
import { StyleSheet, Text, View,Platform,SafeAreaView,ScrollView,RefreshControl,TouchableOpacity} from 'react-native';
import { NavigationContainer , StackActions, NavigationActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LittlePreviewCard from '../components/LittlePreview.js';
import Publication from '../components/Publication.js';
import { MaterialCommunityIcons,Entypo,FontAwesome,MaterialIcons,FontAwesome5} from '@expo/vector-icons';
import Colores from '../components/ColorsConfig.js';
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function Home() {

  const [theme,setTheme] = useState("dark");

  
  
  const scrollRef = useRef();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);
  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }
  

 


 


  

  return (  
    <SafeAreaView style={[styles.container,{backgroundColor:(theme==="light")? Colores.light.fondo:Colores.dark.fondo}]}>
      <StatusBar  style={(theme==="light")? "dark" : "light"} backgroundColor={(theme==="light")? Colores.light.fondo:Colores.dark.fondo}/>
        <View style={[styles.titleContainer,{backgroundColor:(theme==="light")? Colores.light.fondo:Colores.dark.fondo,}]}>
          <Text style={[styles.title,{color:(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal}]}>Photo Gallery</Text>
          <TouchableOpacity style={styles.lightNightMode} onPress={() =>{setTheme((theme==="light")? "dark":"light");}}>
            {/* <MaterialCommunityIcons name="theme-light-dark" size={24} color={(theme==="light")? "black": "white"} /> */}
          </TouchableOpacity>
        </View>
    
        <View style={[styles.mainView,{backgroundColor:(theme==="light")? Colores.light.fondo:Colores.dark.fondo,}]}>
          <ScrollView overScrollMode={"never"}  refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        } ref={scrollRef}>
            <View style={[styles.scrollViewContainer,{backgroundColor:(theme==="light")? Colores.light.fondo:Colores.dark.fondo,}]}>
                <ScrollView horizontal={true} bounces={false} style={{width: '100%'}} endFillColor={"#e0e0e0"} overScrollMode={"never"}>
                    <LittlePreviewCard fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random=1'}} author="Pablo Escobar" title="Mi diseno especial" />
                    <LittlePreviewCard fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random=2'}} author="Arutro Espada" title="La experiencia"/>
                    <LittlePreviewCard fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random=3'}} author="Mariana David" title="AMM"/>
                    <LittlePreviewCard fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random=4'}} author="Fredy Velasquez" title="Mi obra"/>
                    <LittlePreviewCard fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random=5'}} author="Angel Higueros" title="Historia de mi vida"/>
                    <LittlePreviewCard fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random=6'}} author="Alejandra Guzman Sagastume" title="No no"/>
                    <LittlePreviewCard fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random=7'}} author="Pablo Escobar" title="Mi diseno especial"/>
                </ScrollView>
            </View>
            <View style={[styles.publications,{backgroundColor:(theme==="light")? Colores.light.fondo:Colores.dark.fondo,}]}>
              <View style={[styles.titleContainer,{alignSelf:"flex-start",marginTop:0,marginLeft:7,marginBottom:20}]}>
              
                <Text style={[styles.title,{color:(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal}]}>Most popular</Text>
              </View>
              
              <Publication fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/400/450?random=8'}} authorPhoto={{uri:'https://picsum.photos/300/200?random=9'}} author="Pablo Escobar" title="Mi diseno especial" description="me gusto mucho mi viaje, aprendi muchas cosas nuevas y bla bla bla" likes="50"      place="Nueva Zelanda"/>
              <Publication fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/400/450?random=10'}} authorPhoto={{uri:'https://picsum.photos/300/200?random=11'}} author="Andres de Jesus" title="Mi diseno especial" description="me gusto mucho mi viaje, aprendi muchas cosas nuevas y bla bla bla" likes="50"  place="España"/>
              <Publication fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/400/450?random=12'}} authorPhoto={{uri:'https://picsum.photos/300/200?random=13'}} author="Fatima Monzon" title="Mi diseno especial" description="me gusto mucho mi viaje, aprendi muchas cosas nuevas y bla bla bla" likes="50"    place="Alemania"/>
              <Publication fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/400/450?random=14'}} authorPhoto={{uri:'https://picsum.photos/300/200?random=15'}} author="Luis Cordoba" title="Mi diseno especial" description="me gusto mucho mi viaje, aprendi muchas cosas nuevas y bla bla bla" likes="50"     place="Guatemala"/>
              <Publication fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/400/450?random=16'}} authorPhoto={{uri:'https://picsum.photos/300/200?random=17'}} author="Andres Felipe" title="Mi diseno especial" description="me gusto mucho mi viaje, aprendi muchas cosas nuevas y bla bla bla" likes="50"    place="USA"/>
              <Publication fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/400/450?random=18'}} authorPhoto={{uri:'https://picsum.photos/300/200?random=19'}} author="Paolo Contreras" title="Mi diseno especial" description="me gusto mucho mi viaje, aprendi muchas cosas nuevas y bla bla bla" likes="50"  place="Brasil"/>
              <Publication fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/400/450?random=20'}} authorPhoto={{uri:'https://picsum.photos/300/200?random=21'}} author="Luis Ceballos" title="Mi diseno especial" description="me gusto mucho mi viaje, aprendi muchas cosas nuevas y bla bla bla" likes="50"    place="Argentina"/>
              <Publication fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/400/450?random=22'}} authorPhoto={{uri:'https://picsum.photos/300/200?random=23'}} author="Jenny Sosa" title="Mi diseno especial" description="me gusto mucho mi viaje, aprendi muchas cosas nuevas y bla bla bla" likes="50"       place="Mexico"/>
              <Publication fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/400/450?random=24'}} authorPhoto={{uri:'https://picsum.photos/300/200?random=25'}} author="Pablo Soto" title="Mi diseno especial" description="me gusto mucho mi viaje, aprendi muchas cosas nuevas y bla bla bla" likes="50"       place="Guatemala"/>
              <Publication fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/400/450?random=26'}} authorPhoto={{uri:'https://picsum.photos/300/200?random=27'}} author="Aby Sandoval" title="Mi diseno especial" description="me gusto mucho mi viaje, aprendi muchas cosas nuevas y bla bla bla" likes="50"     place="Suiza"/>

            </View>

          </ScrollView>
        </View>
        {/* <View style={[styles.tabNavigator,{backgroundColor:(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer}]}>
          <TouchableOpacity style={styles.tabIcon} activeOpacity={0.5} onPress={()=>{onPressTouch();onRefresh()}}>
            <Entypo name="home" size={30} color={(theme==="light")? "black": "white"}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabIcon} activeOpacity={0.5}>
            <FontAwesome name="search" size={30} color={(theme==="light")? "black": "white"} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tabIcon,]} activeOpacity={0.5}>
            <MaterialIcons name="video-library" size={30} color={(theme==="light")? "black": "white"}/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tabIcon]} activeOpacity={0.5}>
            <FontAwesome5 name="shopping-bag" size={30} color={(theme==="light")? "black": "white"}/>
          </TouchableOpacity>
        </View> */}
       
        
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
    flex:0.9,
    marginTop:10,
    width:"95%",
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
  },
  tabNavigator:{
    width:'100%',
    backgroundColor:'#fff',
    marginTop:5,
    flex:0.08,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  tabIcon:{
    flex:0.25,
    alignItems: 'center'
  }
});

