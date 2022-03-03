import React,{useState} from 'react';
import {StyleSheet, Text, Image,View,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const Publication = (props) => {

    const [heartIcon,setStateHearthIcon] = useState('hearto');


    return (
        <View style={[styles.publicationContainer,{backgroundColor:props.fondo}]}>
            <View style={[styles.publicationHeader,{backgroundColor:props.fondo}]}>
                <View style={[styles.publicationAuthorPhoto,{backgroundColor:props.fondo}]}>
                    <Image source={props.authorPhoto} style={styles.authorPhoto} />
                </View>
                <View style={[styles.publicationAuthorInfo,{backgroundColor:props.fondo}]}>
                    <Text style={[styles.publicationAuthor,{color:props.colorT}]}>{props.author}</Text>
                    <Text style={[styles.publicationPlace]}>{props.place}</Text>
                </View>

            </View>
            <View style={[styles.publicationPhotoContainer]}>
                <Image source={props.ruta} style={[styles.publicationPhoto]}/>
            </View>
            <View style={[styles.publicationInteractionsContainer]}>
                <TouchableOpacity onPress={()=>setStateHearthIcon((heartIcon==="hearto")? "heart": "hearto")}>
                    <AntDesign name={heartIcon} size={32} style={[styles.heartIcon,{color:props.colorT},{color:(heartIcon==="hearto")? props.colorT: "#bd4747"}]}  />
                </TouchableOpacity>
            </View>
        </View>

    );

};

const styles = StyleSheet.create({
    publicationContainer: {
        width:"95%",
        height:480,
        alignSelf:'center',
        flex:1,        
        
    },
    publicationHeader:{
        flex:0.15,
        backgroundColor:'red',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor: '#919191'

    },
    publicationAuthorPhoto:{
        height:50,
        width:50,
        borderRadius:250,
        backgroundColor:'white',
        marginLeft:10,
        overflow:'hidden'
    },
    authorPhoto:{
        width:'100%',
        height:'100%',
    },
    publicationAuthorInfo:{
        height:'100%',
        width:200,
        backgroundColor:'white',
        marginLeft:10,
        justifyContent: 'flex-start',
    },
    publicationAuthor:{
        fontFamily: (Platform.OS==="android") ? "Roboto":"Helvetica",
        fontWeight:'bold',
        fontSize:15,
        marginTop:15,
        marginLeft:10
    },
    publicationPlace:{
        fontFamily: (Platform.OS==="android") ? "Roboto":"Helvetica",
        fontWeight:'bold',
        fontSize:12,
        marginTop:5,
        marginLeft:10,
        color:'#919191',
    },
    publicationPhotoContainer: {
        width:'100%',
        flex:0.65,
        backgroundColor:'blue',
        overflow:"hidden",
    },
    publicationPhoto:{
        width:'100%',
        height:'100%',
        resizeMode:"stretch"
    },
    publicationInteractionsContainer:{
        flex:0.1,
        width:'100%',
        // backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"flex-start",
    },
    heartIcon:{
        marginLeft:20,
        marginTop:10,
        
    }
});

export default Publication;