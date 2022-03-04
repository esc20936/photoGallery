import React,{useState,useRef, useEffect}from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View,Platform,SafeAreaView,TextInput,ScrollView,RefreshControl,TouchableOpacity} from 'react-native';
import Colores from '../components/ColorsConfig.js';
import Post from '../components/Post.js';
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;

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

const theme = Colores.theme;

export default function Reels(){

    return (
        <SafeAreaView style={[styles.container,{backgroundColor:(theme==="light")? Colores.light.fondo:Colores.dark.fondo}]}>
            <StatusBar  style={(theme==="light")? "dark" : "light"} backgroundColor={(theme==="light")? Colores.light.fondo:Colores.dark.fondo}/>
            
            <ScrollView style={[styles.scrollViewContainer,{backgroundColor:(theme==="light")? Colores.light.fondo:Colores.dark.fondo}]}
            snapToInterval={windowHeight+5}
            decelerationRate={0.980}>
              
                    <Post ruta={{uri:'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4'}} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal}  fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} authorPhoto={{uri:'https://picsum.photos/300/200?random='+Math.floor(Math.random()*100)+50}} author={createAuthor()}  place={getPlace()}/>
                    <Post ruta={{uri:'https://assets.mixkit.co/videos/preview/mixkit-man-holding-neon-light-1238-large.mp4'}} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} authorPhoto={{uri:'https://picsum.photos/300/200?random='+Math.floor(Math.random()*100)+50}} author={createAuthor()}  place={getPlace()}/>
                    <Post ruta={{uri:'https://assets.mixkit.co/videos/preview/mixkit-mother-with-her-little-daughter-eating-a-marshmallow-in-nature-39764-large.mp4'}} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} authorPhoto={{uri:'https://picsum.photos/300/200?random='+Math.floor(Math.random()*100)+50}} author={createAuthor()} place={getPlace()} />
                    <Post ruta={{uri:'https://assets.mixkit.co/videos/preview/mixkit-family-walking-together-in-nature-39767-large.mp4'}} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} authorPhoto={{uri:'https://picsum.photos/300/200?random='+Math.floor(Math.random()*100)+50}} author={createAuthor()}  place={getPlace()}/>
                    <Post ruta={{uri:'https://assets.mixkit.co/videos/preview/mixkit-woman-posing-for-the-camera-in-the-middle-of-a-34404-large.mp4'}} colorT={(theme==="light")? Colores.light.textoPrincipal:Colores.dark.textoPrincipal} fondo={(theme==="light")? Colores.light.littlePreviewContainer:Colores.dark.littlePreviewContainer} authorPhoto={{uri:'https://picsum.photos/300/200?random='+Math.floor(Math.random()*100)+50}} author={createAuthor()}  place={getPlace()}/>

                    
                    
                    
                
            </ScrollView>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: (Platform.OS==="android")? 0:0,
      },
    scrollViewContainer:{
        width: '100%',

        
    }
})