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
        <Box width="110%" mt="3%" ml="-5%" p ="4%" borderRadius="5px" backgroundColor="#cccccc" flexDirection="row" justifyContent="space-between">
            <Box flexDirection="row" justifyContent="center">
                {icon==="bandage"?
                    <>
                    <Box backgroundColor={color} width="12%" alignItems="center" borderRadius="3px" ml="-3%">
                        <Fontisto name={icon} size={22} style={{marginLeft:"-1%", padding:"7%", color:"#dcdcdc"}}/>
                    </Box>
                    <Text style={{marginLeft:"4%", marginTop:"1.5%", fontSize:"16px"}}>{name}</Text>
                    </>
                    :
                    <>
                    <Box backgroundColor={color} width="12%" alignItems="center" borderRadius="3px" ml="-3%" pb="1%">
                        <FontAwesome5 name={icon} size={20} style={{marginLeft:"-1%", padding:"7%", color:"#dcdcdc"}}/>
                    </Box>
                    <Text style={{marginLeft:"5%"}}>{name}</Text>
                    </>
                }
                
            </Box>
            {/* <TouchableOpacity></TouchableOpacity> */}
            <MaterialIcons name="arrow-forward-ios" size={16} style={{marginTop:"1.5%"}}/>
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
          {/* <TextInput label='TEXT' variant='outlined' defaultValue={nam} onChangeText={newName => setName(newName)}/>
          
          <Button
                title="Go to Details"
              onPress={() => navigation.navigate('Second',
                  {
                      name: nam
                  })}
          /> */}
          

    <Box height="70%" backgroundColor="#ddd" justifyContent="top" alignItems="center">
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