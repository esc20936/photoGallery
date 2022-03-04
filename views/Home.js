import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import React,{useState,useRef, useEffect} from 'react';
import { StyleSheet, Text, View,Platform,SafeAreaView,ScrollView,RefreshControl,TouchableOpacity} from 'react-native';
import { NavigationContainer , StackActions, NavigationActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LittlePreviewCard from '../components/LittlePreview.js';
import Publication from '../components/Publication.js';
import { MaterialCommunityIcons,Entypo,FontAwesome,MaterialIcons,FontAwesome5} from '@expo/vector-icons';
import Colores from '../components/ColorsConfig.js';



const theme = Colores.theme;

const names = ["Pablo","Melaniye","Marre","Karen","Luis","Peter","Chris","Brian","Juan","Angel","Alejandra","Andrew","Sebas","Mark","Pedro","andres","Carlos","Cito","Raul","Gerardo","Gary","Mayra"];
const lastNames = ["Escobar","Sosa","Casasola","Valencia","Sandoval","Griffin","Bumbsted","Connor","Wick","Higueros","Guzman","Rivers","Escobedo","Asturias"];

const places = ["Guatemala","Mexico","Canada","USA","Alemania","España","Honduras","Venezuela","Brasil","Argentina","Portugal"];
const phrases = ["Mi experiencia","Mi verdad","Hoy","AMM","Lo ultimo en lo que pense","Que tal tu dia"]

const createAuthor = () => {
  let nombre =names[ Math.floor(Math.random() * names.length)];
  let lastName =lastNames[ Math.floor(Math.random() * lastNames.length)];
  return nombre + " " + lastName;
}

const getPhrase = () => phrases[ Math.floor(Math.random() * phrases.length )];
const getPlace = () => places[ Math.floor(Math.random() * places.length)];
const createLittlePreviews = (cont)=>{
  let lista =[];
  for(let i=0; i<cont; i++){
    let MadeUpName = createAuthor();
    let MadeUpPhrase = getPhrase();
    lista.push(

      <LittlePreviewCard fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random='+Math.floor(Math.random()*100 )}} author={MadeUpName} title={MadeUpPhrase} key={i}/>
    )

  }

  return lista;
}



const createPublications = (cont) => {
  let lista =[];
  for(let i=0; i<cont; i++){
    let MadeUpName = createAuthor();
    let MadeUpPhrase = getPhrase();
    let MadeUpPlace = getPlace();
    lista.push(
      <Publication fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} 
      colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} 
      ruta={{uri:'https://picsum.photos/400/450?random='+Math.floor(Math.random()*100)+100}} 
      authorPhoto={{uri:'https://picsum.photos/300/200?random='+Math.floor(Math.random()*100)+50}} 
      author={MadeUpName} 
      title={MadeUpPhrase}
      description={MadeUpPhrase}
      likes="50"      
      place={MadeUpPlace}
      key={i}/>

    )
  }

  return lista;

}


let listaLittlesPreviews = createLittlePreviews(20);
let listaPublicaciones = createPublications(30);



const wait = (timeout) => {
  listaLittlesPreviews= createLittlePreviews(20);
  listaPublicaciones = createPublications(30);

  return new Promise(resolve => setTimeout(resolve, timeout));
}


export default function Home({navigation}) {

  const scrollRef = useRef();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    listaLittlesPreviews = null;
    listaPublicaciones = null;
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
                    {/* <LittlePreviewCard fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random=1'}} author="Pablo Escobar" title="Mi diseño especial" />
                    <LittlePreviewCard fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random=2'}} author="Arutro Espada" title="La experiencia"/>
                    <LittlePreviewCard fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random=3'}} author="Mariana David" title="AMM"/>
                    <LittlePreviewCard fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random=4'}} author="Fredy Velasquez" title="Mi obra"/>
                    <LittlePreviewCard fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random=5'}} author="Angel Higueros" title="Historia de mi vida"/>
                    <LittlePreviewCard fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random=6'}} author="Alejandra Guzman Sagastume" title="No no"/>
                    <LittlePreviewCard fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/300/200?random=7'}} author="Pablo Escobar" title="Mi diseno especial"/> */}
                    {listaLittlesPreviews}
                </ScrollView>
            </View>
            <View style={[styles.publications,{backgroundColor:(theme==="light")? Colores.light.fondo:Colores.dark.fondo,}]}>
              <View style={[styles.titleContainer,{alignSelf:"flex-start",marginTop:0,marginLeft:7,marginBottom:20}]}>
              
                <Text style={[styles.title,{color:(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal}]}>Most popular</Text>
              </View>
              
              {/* <Publication fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} ruta={{uri:'https://picsum.photos/400/450?random=8'}} authorPhoto={{uri:'https://picsum.photos/300/200?random=9'}} author="Pablo Escobar" title="Mi diseno especial" description="me gusto mucho mi viaje, aprendi muchas cosas nuevas y bla bla bla" likes="50"      place="Guatemala"/> */}
                {listaPublicaciones}
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
    flex:0.82,
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

