import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Platform,SafeAreaView,ScrollView,RefreshControl,TouchableOpacity} from 'react-native';
import { NavigationContainer , StackActions, NavigationActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LittlePreviewCard from '../components/LittlePreview.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home() {

   

  

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Photo Gallery</Text>
          <TouchableOpacity style={styles.lightNightMode}>
            <MaterialCommunityIcons name="theme-light-dark" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.mainView}>
          <ScrollView>
            <View style={styles.scrollViewContainer}>
                <ScrollView horizontal={true} bounces={false} style={{width: '100%'}} endFillColor={"#e0e0e0"}>
                    <LittlePreviewCard ruta={{uri:'https://picsum.photos/200?random=1'}} author="Pablo Escobar" title="Mi diseno especial"/>
                    <LittlePreviewCard ruta={{uri:'https://picsum.photos/200?random=2'}} author="Arutro Espada" title="La experiencia"/>
                    <LittlePreviewCard ruta={{uri:'https://picsum.photos/200?random=3'}} author="Mariana David" title="AMM"/>
                    <LittlePreviewCard ruta={{uri:'https://picsum.photos/200?random=4'}} author="Fredy Velasquez" title="Mi obra"/>
                    <LittlePreviewCard ruta={{uri:'https://picsum.photos/200?random=5'}} author="Angel Higueros" title="Historia de mi vida"/>
                    <LittlePreviewCard ruta={{uri:'https://picsum.photos/200?random=6'}} author="Alejandra Guzman Sagastume" title="No no"/>
                    <LittlePreviewCard ruta={{uri:'https://picsum.photos/200?random=7'}} author="Pablo Escobar" title="Mi diseno especial"/>
                </ScrollView>
            </View>
            <View style={styles.publications}>
              <View style={[styles.titleContainer,{alignSelf:"flex-start",marginTop:0,marginLeft:7}]}>
              
                <Text style={[styles.title]}>Most popular</Text>
              </View>

            </View>

          </ScrollView>
        </View>
       
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: (Platform.OS==="android")? 20:0,
  },

  titleContainer: {
    flex: 0.10,
    backgroundColor: '#f0f0f0',
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
      fontSize:25
  },
  mainView:{
    flex:0.8,
    marginTop:10,
    backgroundColor: '#f0f0f0',
    width:"90%",
    justifyContent: 'center',
  },
  lightNightMode:{

  }
  ,
  scrollViewContainer:{
    flex:0.3,
    backgroundColor: '#f0f0f0',
    width:'100%',
    justifyContent:'center',
    alignItems:'flex-start',
    alignSelf:'center',

  },
  publications:{
    marginTop:30,
    backgroundColor: '#f0f0f0',
    flex: 1,
    width: '100%',

  }
});
