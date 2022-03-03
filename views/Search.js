import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import React,{useState,useRef, useEffect} from 'react';
import { StyleSheet, Text, View,Platform,SafeAreaView,TextInput,ScrollView,RefreshControl,TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons,Entypo,FontAwesome,MaterialIcons,FontAwesome5} from '@expo/vector-icons';
import Colores from '../components/ColorsConfig.js';
import ImagesSearch from '../components/ImagesSearch.js';

const theme = Colores.theme;

const createImages = (even) => {
    let cont = (even)? 28:29;
    let lista = [];
    for (let i = 0; i < 20; i++){
        let size = Math.floor(Math.random() * (190 - 120 +1)) + 120;
        lista.push(
            <ImagesSearch altura={size} fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} ruta={{uri:'https://picsum.photos/140/'+size+'?random='+cont}} />
        );
        cont+=2; //
    }

    return lista;
}



let lista = createImages(true);
let lista2 = createImages(false);

const wait = (timeout) => {
    lista = createImages(true);
    lista2 = createImages(false);
    return new Promise(resolve => setTimeout(resolve, timeout));
}
  

  



export default function Search(){

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
  
    const [userInput,setUserInput] = useState("")

    

    
   

    

    return (
        <SafeAreaView style={[styles.container,{backgroundColor:(theme==="light")? Colores.light.fondo:Colores.dark.fondo}]}>
            <StatusBar  style={(theme==="light")? "dark" : "light"} backgroundColor={(theme==="light")? Colores.light.fondo:Colores.dark.fondo}/>
            <View style={[styles.searhBarContainer,{backgroundColor:(theme==="light")? Colores.light.fondo:Colores.dark.fondo}]}>
                <View style={[styles.inputContainer,,{backgroundColor:(theme==="light")? Colores.light.fondo:Colores.dark.fondo}]}>

                    <TextInput
                    placeholderTextColor='#919191'
                    style={[styles.inputField,{backgroundColor:(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer,color:(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal}]}
                    placeholder='Buscar algo'
                    autoCapitalize='none'
                    autoCorrect={true}
                    onChangeText={text => setUserInput(text)}
                    />

                    {/* Area del icono */}
                        <FontAwesome name="search" size={20} color='#919191' style={{position:'absolute',left:"87%",bottom:10,}}/>


                </View>
            </View>
            <ScrollView style={[styles.scrollViewContainer,{backgroundColor:(theme==="light")? Colores.light.fondo:Colores.dark.fondo,},]} refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        } ref={scrollRef}>

                <View style={[styles.mainView,{backgroundColor:(theme==="light")? Colores.light.fondo:Colores.dark.fondo,}]}>

                    <View style={[styles.firstColumn,{backgroundColor:(theme==="light")? Colores.light.fondo:Colores.dark.fondo}]}>

                        {lista}
                        {lista2}

                    </View>
                    <View style={[styles.secondColumn,{backgroundColor:(theme==="light")? Colores.light.fondo:Colores.dark.fondo}]}>
                        {lista2}
                        {lista}

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: (Platform.OS==="android")? 20:0,
      },
      
  searhBarContainer: {
    flex: 0.10,
    flexDirection:'row',
    marginTop:20,
    marginLeft:27,
    marginRight:27,
    justifyContent:'center',
    alignItems: 'center',
    width:"80%",
    // backgroundColor:"white"

  },
  mainView:{
    height: "100%",
    width:"100%",
    backgroundColor:"blue",
    flexDirection: 'row',
    justifyContent: 'space-around'

  },
  inputContainer: {
    backgroundColor: 'white',
    width: '90%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    
  },
  inputField: {

    backgroundColor: '#fff',
    marginTop:0,
    height: 39,
    borderBottomWidth: 0,
    width:"100%",
    borderRadius:250,
    paddingLeft:10,
    
  },
  firstColumn: {

    backgroundColor: '#2d3e86',
    width: '45%',
    height:'100%',
    alignItems: 'center',

  },
  secondColumn: {
    backgroundColor:'#50a5a0',
    width: '45%',
    height:'100%',
    alignItems: 'center',



   
  },
  scrollViewContainer:{
    flex:0.6,
    marginTop:10,
    width:"90%",
    //   backgroundColor:'red'
  }

})
