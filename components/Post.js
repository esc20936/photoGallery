import React,{useState} from 'react';
import { StyleSheet,Button, Image,Text, View,Platform,SafeAreaView,TextInput,ScrollView,RefreshControl,TouchableOpacity} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Dimensions } from 'react-native';
import { AntDesign,  FontAwesome5,MaterialIcons,FontAwesome } from '@expo/vector-icons'; 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const displayError = (error) => {
    console.log(error);
}

export default function Post(props){
    const [backCount,setStateBackCount] = useState(1);
    const [heartIcon,setStateHearthIcon] = useState('hearto');
    return(
        <View style={styles.container}>
            <View style={[styles.interactionsContainer]}>
                <TouchableOpacity style={[styles.interactionIcons]} activeOpacity={0.7} onPress={()=>setStateHearthIcon((heartIcon==="hearto")? "heart": "hearto")}>
                    <AntDesign name={heartIcon} size={35} style={[{color:(heartIcon==="hearto")? props.colorT: "#bd4747"}]}  />    
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={[styles.interactionIcons,]}>
                    <FontAwesome5 name="comment" size={35} style={[{color:props.colorT}]}   />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={[styles.interactionIcons]}>
                    <FontAwesome name="share" size={33} style={[{color:props.colorT,marginRight:0}]}  />
                
                </TouchableOpacity>
            </View>
            <View style={[styles.userInfo]}>

                <View style={[styles.userInfoFooter]}>
                    <View style={[styles.publicationAuthorPhoto]}>
                        <Image source={props.authorPhoto} style={styles.authorPhoto} />
                    </View>
                    <View style={[styles.publicationAuthorInfo,]}>
                        <Text style={[styles.publicationAuthor]}>{props.author}</Text>
                        <Text style={[styles.publicationPlace]}>{props.place}</Text>
                    </View>

                </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={[styles.videoContainer]}
            onPress={() => {
                setStateBackCount(backCount+1);
                if (backCount == 2) {
                    
                    setStateHearthIcon((heartIcon==="hearto")? "heart": "hearto");
                    
                } else {
                    let backTimer = setTimeout(() => {
                     setStateBackCount(1);
                    }, 1000) 
                }

            }}>
                <Video 
                    source={props.ruta}
                    style={styles.video}  
                    useNativeControls={false}
                    resizeMode={Video.RESIZE_MODE_STRETCH}
                    shouldPlay={true}
                    isLooping={true}
                    onError={displayError}    
                    />
            </TouchableOpacity>
            

            
                {/* <AntDesign name={"hearto"} size={30} color={"#fff"}  /> */}
        
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        bottom:50
        
          
    },
    video: {
        width:windowWidth,
        height:windowHeight+5
    },
    interactionsContainer:{
        position:'absolute',
        height:250,
        width:60,
        zIndex:1,
        left:"83%",
        bottom:"10%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    interactionIcons:{
        marginTop:33
    },
    videoContainer:{
        
    },
    userInfo:{
        position:'absolute',
        height:60,
        width:"100%",
        zIndex:1,
        bottom:2,

    },
    userInfoFooter:{
        width:"100%",
        height:"100%",
        flexDirection:'row',
    },
    publicationAuthorPhoto:{
        height:50,
        width:50,
        borderRadius:250,
        backgroundColor:'white',
        marginLeft:10,
        overflow:'hidden'
    },
    publicationAuthorInfo:{
        width:"80%",
        paddingLeft:15,
        paddingTop:5
    },
    publicationAuthor:{
        color:'white',
        fontWeight:'bold',
    },
    publicationPlace:{
        color:'#f5f5f5',
    },
    authorPhoto:{
        width:'100%',
        height:'100%',
    },
})