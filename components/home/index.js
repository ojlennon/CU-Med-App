import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { Box } from "@react-native-material/core";
import TopBar from '../topBar';
import { FontAwesome5,MaterialIcons,Fontisto, MaterialCommunityIcons,AntDesign } from '@expo/vector-icons'; 
import Crit from '../../data/critical'
import NonCrit from '../../data/nonCritical'

const Widget = ({name, icon="", color="#fff"}) => {
    return(
        <Box width="110%" mt="3%" ml="-5%" h={60} p ="3.5%" borderRadius="5px" backgroundColor="#ddd" flexDirection="row" justifyContent="space-between">
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

const NonCritWidget = ({name, color="#fff", item, navigation}) => {
    return(
        <>
        {name==="Background and Definitions" ?
        <Box width="110%" mt="3%" ml="-5%" mb="0%" borderRadius="5px" backgroundColor="#eee" flexDirection="row" height={58} justifyContent="space-between">
            <TouchableOpacity onPress={() => navigation.navigate("Extra", {
                            name:item.name,
                            color:"#AB3428",
                            data:item.data
                        })}>
                <Box flexDirection="row" justifyContent="space-between" alignItems="center" borderRadius="5px"backgroundColor="#ddd" width="67%">
                    <Box flexDirection="row"height={58} p="3%" ml="0%" alignItems="center">
                        <Box backgroundColor="#AB3428" alignItems="center" borderRadius="3px" ml="5%" justifyContent="center" width={38} height={38}>
                            <AntDesign name="book" size={24} style={{ paddingHorizontal:"2.5%",paddingVertical:"3.5%", color:"#eaeaea"}}/>
                        </Box>
                        <Text style={{marginLeft:"6%", fontSize:"17px"}} >Definitions</Text>     
                    </Box>
                    <MaterialIcons name="arrow-forward-ios" size={18} style={{marginRight:"4%", marginTop:"1%"}}/>
                </Box>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:"-22%"}} onPress={() => navigation.navigate("Extra", {
                            name:"Policy",
                            color:"#CDAB3C",
                        })}>
            <Box flexDirection="row" justifyContent="space-between" alignItems="center" borderRadius="5px"backgroundColor="#ddd" width="52.5%">
                <Box flexDirection="row"height={58} p="3%" ml="5%" alignItems="center">
                    <Box backgroundColor="#CDAB3C" alignItems="center" borderRadius="3px" justifyContent="center" width={38} height={38}>
                        <MaterialIcons name="policy" size={22} style={{ paddingHorizontal:"2.5%",paddingVertical:"3.5%", color:"#eaeaea"}}/>
                    </Box>
                    <Text style={{marginLeft:"6%", fontSize:"17px"}} >Policy</Text>     
                </Box>
                <MaterialIcons name="arrow-forward-ios" size={19} style={{marginRight:"4%", marginTop:"1%"}}/>
            </Box>
            </TouchableOpacity>
        </Box>
        :
        <TouchableOpacity onPress={() => navigation.navigate("Appendix", {
            name:item.name,
            header:item.header,
            color:item.color,
            data:item.data
        })}>
        <Box width="110%" mt="3%" ml="-5%" mb="0%" p ="3.5%" borderRadius="5px" backgroundColor="#ddd" flexDirection="row" justifyContent="space-between">
            <Box flexDirection="row" justifyContent="center">
                <Box flexDirection="row" pl="2%">
                    <Box backgroundColor={color} alignItems="center" borderRadius="3px" ml="-3.5%" justifyContent="center">
                        <MaterialCommunityIcons name="file-tree" size={22} style={{ paddingHorizontal:"2.5%",paddingVertical:"2.5%", color:"#eaeaea"}}/>
                    </Box>
                    <Text style={{marginLeft:"5%", marginTop:"4.5%", fontSize:"17px"}}>{name}</Text>
                </Box>            
            </Box>
            {/* <TouchableOpacity></TouchableOpacity> */}
            <MaterialIcons name="arrow-forward-ios" size={18} style={{marginTop:"3%", marginRight:"-1%"}}/>
        </Box>
        </TouchableOpacity>
        }
        </>
    )
}

const Home = ({ navigation }) => {
    const[nam, setName] = useState("") 
  return (
    <Box>
        <Box>
        <TopBar />
        <Box height="70%" backgroundColor="#eee" justifyContent="top" alignItems="center">
            <Box height="100%" width="100%" p="10%" marginTop="-4%">
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
                <Box h={25}/>
                {
                    NonCrit.map((item) => (
                            <NonCritWidget name={item.name} navigation={navigation} item={item} color={item.color}/>
                    ))
                }
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Home