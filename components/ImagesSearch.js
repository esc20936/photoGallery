import React,{useState,useRef, useEffect} from 'react';
import { StyleSheet, Text, View,Platform,SafeAreaView,TextInput,ScrollView,RefreshControl,TouchableOpacity,Image} from 'react-native';
import { MaterialCommunityIcons,Entypo,FontAwesome,MaterialIcons,FontAwesome5} from '@expo/vector-icons';
import Colores from "./ColorsConfig.js";
export default function ImagesSearch(props) {
    const theme = Colores.theme;

    return (
        <TouchableOpacity activeOpacity={0.7} style={[styles.container,{height:props.altura,backgroundColor:props.fondo}]}>
            <Image style={[styles.image,{height:props.altura}]} source={props.ruta} />

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width:140,
        height:180,
        backgroundColor:"#f5f5f5",
        marginTop:10,
        borderRadius:15,
        overflow:"hidden"
    },
    image:{
        width:140,
        height:180,

    }
});