import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { Button, Box, TextInput } from "@react-native-material/core";
import TopBar from '../topBar';
import { useFonts } from 'expo-font';
import { FontAwesome5,MaterialIcons,Fontisto } from '@expo/vector-icons'; 
import Crit from '../../data/critical'
import NonCrit from '../../data/nonCritical'
const Widget = ({name, icon="", color="#fff"}) => {
    return(
        <Box width="110%" mt="3%" ml="-5%" mb="-40%" p ="3.5%" borderRadius="5px" backgroundColor="#ddd" flexDirection="row" justifyContent="space-between">
            <Box flexDirection="row" justifyContent="center">
                {icon==="bandage"?
                    <Box flexDirection="row" pl="2%" mb="-10%">
                        <Box backgroundColor={color} h="58%" width="14%" alignItems="center" borderRadius="3px" ml="-3%" justifyContent="center">
                            <Fontisto name={icon} size={22} style={{ padding:"5%", color:"#eaeaea"}}/>
                        </Box>
                        <Text style={{marginLeft:"3%", marginTop:"2.5%", fontSize:"17px"}}>{name}</Text>
                    </Box>
                    :
                    <>
                    <Box flexDirection="row" pl="2%" mb="-10%">
                        <Box backgroundColor={color} h="57%" width="14%" alignItems="center" borderRadius="3px" ml="-3%" justifyContent="center">
                            <FontAwesome5 name={icon} size={22} style={{ padding:"5%", color:"#eaeaea"}}/>
                        </Box>
                        <Text style={{marginLeft:"3%", marginTop:"2.5%", fontSize:"17px"}}>{name}</Text>
                    </Box>
                    </>
                }
                
            </Box>
            {/* <TouchableOpacity></TouchableOpacity> */}
            <MaterialIcons name="arrow-forward-ios" size={18} style={{marginTop:"3%", marginRight:"-1%"}}/>
        </Box>
    )
}

const Home = ({ navigation }) => {
    const[nam, setName] = useState("") 
    const [loaded] = useFonts({   // make sure path is correct
        nunito: require('../../assets/fonts/Nunito-VariableFont_wght.ttf'),
    });  
  return (
    <>
    <TopBar />
    <Box height="70%" backgroundColor="#eee" justifyContent="top" alignItems="center">
        <Box height="100%" width="100%" p="10%" marginTop="-3%">
            <Text style={{ marginLeft: "-5%", marginBottom: "1%", fontSize: "18px", fontWeight: "400" }}>Critical</Text>
            {
                Crit.map((item) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Second", {
                        name:item.name,
                        text:item.text,
                        subData: item.subData,
                        color: item.color,
                    })}>
                         <Widget name={item.name} icon={item.icon} color={item.color}/>
                     </TouchableOpacity>
                ))
            }
            <Text style={{marginLeft:"-5%",marginTop:"12%",marginBottom:"1%", fontSize:"18px", fontWeight:"400"}}>Non-Critical</Text>
            {/* {
                NonCrit.map((item) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Second", {
                        name:item.name,
                        text:item.text,
                    })}>
                         <Widget name={item.name} icon={item.icon}/>
                     </TouchableOpacity>
                ))
            } */}
        </Box>
    </Box>
    </>
  )
}

export default Home