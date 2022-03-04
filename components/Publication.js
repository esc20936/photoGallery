import React,{useState} from 'react';
import {StyleSheet, Text, Image,View,TouchableOpacity} from 'react-native';
import { AntDesign,  FontAwesome5,MaterialIcons,FontAwesome } from '@expo/vector-icons'; 

const Publication = (props) => {

    const [backCount,setStateBackCount] = useState(1);
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
                <TouchableOpacity activeOpacity={0.7}  onPress={() => {
                        setStateBackCount(backCount+1);
                        if (backCount == 2) {
                            
                            setStateHearthIcon((heartIcon==="hearto")? "heart": "hearto");
                            
                        } else {
                            let backTimer = setTimeout(() => {
                             setStateBackCount(1);
                            }, 1000) 
                        }

                    }}>
                    <Image source={props.ruta} style={[styles.publicationPhoto]}/>
                </TouchableOpacity>
            </View>
            <View style={[styles.publicationInteractionsContainer]}>
                <TouchableOpacity onPress={()=>setStateHearthIcon((heartIcon==="hearto")? "heart": "hearto")}>
                    <AntDesign name={heartIcon} size={30} style={[styles.heartIcon,{color:props.colorT},{color:(heartIcon==="hearto")? props.colorT: "#bd4747"}]}  />
                </TouchableOpacity>
                <TouchableOpacity >
                    <FontAwesome5 name="comment" size={30} style={[styles.heartIcon,{color:props.colorT}]}   />
                </TouchableOpacity>
                <View style={[styles.saveContainer]}>
                    <TouchableOpacity >
                        <FontAwesome name="share" size={28} style={[styles.heartIcon,{color:props.colorT,marginRight:0}]}  />
                    </TouchableOpacity>
                </View>    
            </View>
        </View>

    );

};

const styles = StyleSheet.create({
    publicationContainer: {
        width:"95%",
        height:450,
        alignSelf:'center',
        flex:1,
        marginTop:10    
        
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
        marginTop:2,
        marginLeft:10,
        color:'#919191',
    },
    publicationPhotoContainer: {
        width:'100%',
        flex:0.70,
        // backgroundColor:'blue',
        overflow:"hidden",
    },
    publicationPhoto:{
        width:'100%',
        height:'100%',
        resizeMode:"stretch"
    },
    publicationInteractionsContainer:{
        flex:0.15,
        width:'100%',
        // backgroundColor:'red',
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"flex-start",
    },
    heartIcon:{
        marginLeft:20,
        
    },
    saveContainer:{
        // backgroundColor:'green',
        height:'100%',
        width:'65%',
        justifyContent:'center',
        alignItems:'flex-end',
        alignSelf:'flex-end'
    }
});

export default Publication;