import React from 'react';
import {StyleSheet, Text, Image,View,TouchableOpacity} from 'react-native';

const LittlePreviewCard = (props) =>{
    let titulo = props.title;
    let author = props.author;
  

    titulo = (titulo.length >13)? titulo.substring(0,13)+"... ":titulo;
    author = (author.length >13)? author.substring(0,13)+"... ":author;

    return (
        <View style={[stylesLittlePreview.container,{backgroundColor:props.fondo}]}> 
            <TouchableOpacity style={stylesLittlePreview.touchableOpacity}>
                <View style={[stylesLittlePreview.ImageContainer,{backgroundColor:props.fondo}]}>
                    <Image source={props.ruta} style={stylesLittlePreview.image}/>
                </View>
                <View style={[stylesLittlePreview.descriptionContainer,{backgroundColor:props.fondo}]}>
                    <Text style={[stylesLittlePreview.title,{color:props.colorT}]}>{titulo}</Text>
                    <Text style={[stylesLittlePreview.author]}>{author}</Text>
                </View>
            </TouchableOpacity>
            
        </View>

    )
};

const stylesLittlePreview = StyleSheet.create({
    container: {
        height:160,
        width:140,
        backgroundColor:"#fff",
        alignSelf:'center',
        marginLeft:20,
        borderRadius: (Platform.OS==="android")? 25:30,
       

    },
    touchableOpacity:{
        borderRadius:30,
        width:"100%",
        height:"100%",

    },
    ImageContainer:{
        flex:0.6,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        overflow:'hidden',

    },
    image:{
        width:'100%',
        height:'100%',
        resizeMode:'stretch',
        borderTopRightRadius:30,
        borderTopLeftRadius:30
    },
    descriptionContainer:{
        flex:0.4,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        backgroundColor:"#fff",
        justifyContent: 'flex-start',
        
    },
    title: {
        fontFamily: (Platform.OS==="android") ? "Roboto":"Helvetica",
        fontWeight:'bold',
        fontSize:15,
        marginTop:5,
        marginLeft:10
    },
    author: {
        fontFamily: (Platform.OS==="android") ? "Roboto":"Helvetica",
        fontWeight:'bold',
        fontSize:10,
        marginTop:5,
        marginLeft:10,
        color:'#919191',

    }
});


export default LittlePreviewCard
