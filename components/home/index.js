import { View, Text } from 'react-native'
import React from 'react'
import { Button, Box } from "@react-native-material/core";
import TopBar from '../topBar';
import { useFonts } from 'expo-font';
import { FontAwesome5,MaterialIcons,Fontisto } from '@expo/vector-icons'; 
const Widget = ({name, icon=""}) => {
    const [loaded] = useFonts({   // make sure path is correct
        nunito: require('../../assets/fonts/Nunito-VariableFont_wght.ttf'),
    });   
    return(
        <Box width="110%" mt="3%" ml="-5%" p ="4%" borderRadius="5px" backgroundColor="#c0c0c0" flexDirection="row" justifyContent="space-between">
            <Box flexDirection="row" justifyContent="center">
                {icon==="bandage"?
                    <>
                    <Fontisto name={icon} size={18} style={{marginLeft:"-1%"}}/>
                    <Text style={{marginLeft:"4%"}}>{name}</Text>
                    </>
                    :
                    <>
                    <FontAwesome5 name={icon} size={18}/>
                    <Text style={{marginLeft:"5%"}}>{name}</Text>
                    </>
                }
                
            </Box>
            <MaterialIcons name="arrow-forward-ios" size={16}/>
        </Box>
    )
}

const Home = () => {
  return (
    <>
    <TopBar/>
    <Box height="70%" backgroundColor="#909090" justifyContent="top" alignItems="center">
        <Box height="100%" width="100%" p="10%" marginTop="-3%">
            <Text style={{marginLeft:"-5%",marginBottom:"1%", fontSize:"18px", fontFamily:"nunito", fontWeight:"400"}}>Critical</Text>
            <Widget name="Delivery Room Management" icon="baby"/>
            <Widget name="Pre-Operative Management" icon="notes-medical"/>
            <Widget name="Post-Opperative Management" icon="bandage"/>

            <Text style={{marginLeft:"-5%",marginTop:"12%",marginBottom:"1%", fontSize:"18px", fontFamily:"nunito", fontWeight:"400"}}>Non-Critical</Text>
            <Widget name="Delivery Room Management" icon="baby"/>
            <Widget name="Pre-Operative Management" icon="notes-medical"/>
            <Widget name="Post-Opperative Management" icon="bandage"/>
        </Box>
    </Box>
    </>
  )
}

export default Home