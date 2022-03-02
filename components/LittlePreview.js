import React from 'react';
import {StyleSheet, Text, Image,View,TouchableOpacity} from 'react-native';

const LittlePreviewCard = (props) =>{
    let titulo = props.title;
    let author = props.author;
  

    titulo = (titulo.length >13)? titulo.substring(0,13)+"... ":titulo;
    author = (author.length >13)? author.substring(0,19)+"... ":author;

    return (
        <View style={styles.container}> 
            <TouchableOpacity style={styles.touchableOpacity}>
                <View style={styles.ImageContainer}>
                    <Image source={props.ruta} style={styles.image}/>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.title}>{titulo}</Text>
                    <Text style={styles.author}>{author}</Text>
                </View>
            </TouchableOpacity>
            
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        height:160,
        width:160,
        backgroundColor:"#fff",
        alignSelf:'center',
        marginLeft:20,
        borderRadius:30,
       

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
        marginTop:2,
        marginLeft:10,
        color:'#919191'

    }
});


export default LittlePreviewCard
