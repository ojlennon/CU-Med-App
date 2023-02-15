import { Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { Box } from "@react-native-material/core";
import TopBar from '../topBar';
import { FontAwesome5,MaterialIcons,Fontisto, MaterialCommunityIcons,AntDesign,Entypo, Ionicons } from '@expo/vector-icons'; 
import Crit from '../../data/critical'
import NonCrit from '../../data/nonCritical'

const Widget = ({name, icon="", color="#fff"}) => {
    return(
        <Box width="100%" mt="3%" ml="-5%" h={60} p ="3.5%" borderRadius="5px" backgroundColor="#ddd" flexDirection="row" justifyContent="space-between">
            <Box flexDirection="row" justifyContent="center" alignItems="center">
                {icon==="bandage"?
                    <Box flexDirection="row" pl="2%" alignItems="center" >
                        <Box backgroundColor={color} h={40} w={40} alignItems="center" borderRadius="3px" ml="-3%" justifyContent="center">
                            <Fontisto name={icon} size={22} style={{ color:"#eaeaea"}}/>
                        </Box>
                        <Text style={{marginLeft:"3%", fontSize:"17px"}}>{name}</Text>
                    </Box>
                    :
                    <>
                    {icon==="air" ?
                    <Box flexDirection="row" alignItems="center" >
                        <Box backgroundColor={color} h={40} width={40} alignItems="center" borderRadius="3px" ml="-4.5%" justifyContent="center">
                            <Entypo name={icon} size={22} style={{ color:"#eaeaea"}}/>
                        </Box>
                        <Text style={{marginLeft:"7.5%", fontSize:"17px"}}>{name}</Text>
                    </Box>
                    :
                    <Box flexDirection="row" pl="2%" alignItems="center" >
                        <Box backgroundColor={color} h={40} width={40} alignItems="center" borderRadius="3px" ml="-3%" justifyContent="center">
                            <FontAwesome5 name={icon} size={22} style={{ color:"#eaeaea"}}/>
                        </Box>
                        <Text style={{marginLeft:"3%", fontSize:"17px"}}>{name}</Text>
                    </Box>
                    }
                    
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
        <Box width="100%" mt="3%" ml="-5%" mb="0%" borderRadius="5px" backgroundColor="#eee" flexDirection="row" height={58} justifyContent="space-between">
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
            <Box flexDirection="row" justifyContent="space-between" alignItems="center" borderRadius="5px"backgroundColor="#ddd" width="52.7%">
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
        <>
        {name==="Personnel"?
        <TouchableOpacity onPress={() => navigation.navigate("Personnel", {
            name:item.name,
            header:item.header,
            color:item.color,
            data:item.data
        })}>
        <Box width="100%" mt="3%" ml="-5%" mb="0%" p ="3.5%" borderRadius="5px" backgroundColor="#ddd" flexDirection="row" justifyContent="space-between">
            <Box flexDirection="row" justifyContent="center">
                <Box flexDirection="row" pl="2%">
                    <Box backgroundColor={color} alignItems="center" borderRadius="3px" ml="-3.5%" justifyContent="center">
                        <Ionicons name="people-outline" size={22} style={{ paddingHorizontal:"2.5%",paddingVertical:"2.5%", color:"#eaeaea"}}/>
                    </Box>
                    <Text style={{marginLeft:"5%", marginTop:"4.5%", fontSize:"17px"}}>{name}</Text>
                </Box>            
            </Box>
            {/* <TouchableOpacity></TouchableOpacity> */}
            <MaterialIcons name="arrow-forward-ios" size={18} style={{marginTop:"3%", marginRight:"-1%"}}/>
        </Box>
        </TouchableOpacity>
        :
        <>
        {name==="Articles"?
        <TouchableOpacity onPress={() => navigation.navigate("Articles", {
            name:item.name,
            color:item.color,
            data:item.data
        })}>
        <Box width="100%" mt="3%" ml="-5%" mb="0%" p ="3.5%" borderRadius="5px" backgroundColor="#ddd" flexDirection="row" justifyContent="space-between">
            <Box flexDirection="row" justifyContent="center">
                <Box flexDirection="row" pl="2%">
                    <Box backgroundColor={color} alignItems="center" borderRadius="3px" ml="-3.5%" justifyContent="center">
                        <Ionicons name="book-outline" size={22} style={{ paddingHorizontal:"2.5%",paddingVertical:"2.5%", color:"#eaeaea"}}/>
                    </Box>
                    <Text style={{marginLeft:"5%", marginTop:"4.5%", fontSize:"17px"}}>{name}</Text>
                </Box>            
            </Box>
            {/* <TouchableOpacity></TouchableOpacity> */}
            <MaterialIcons name="arrow-forward-ios" size={18} style={{marginTop:"3%", marginRight:"-1%"}}/>
        </Box>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={() => navigation.navigate("Appendix", {
            name:item.name,
            header:item.header,
            color:item.color,
            data:item.data
        })}>
        <Box width="100%" mt="3%" ml="-5%" mb="0%" p ="3.5%" borderRadius="5px" backgroundColor="#ddd" flexDirection="row" justifyContent="space-between">
            <Box flexDirection="row" justifyContent="center">
                <Box flexDirection="row" pl="2%">
                    <Box backgroundColor={color} alignItems="center" borderRadius="3px" ml="-3.5%" justifyContent="center">
                        <MaterialCommunityIcons name="file-tree" size={22} style={{ paddingHorizontal:"2.5%",paddingVertical:"2.5%", color:"#eaeaea"}}/>
                    </Box>
                    <Text style={{marginLeft:"5%", marginTop:"4.5%", fontSize:"17px"}}>{name}</Text>
                </Box>            
            </Box>
            <MaterialIcons name="arrow-forward-ios" size={18} style={{marginTop:"3%", marginRight:"-1%"}}/>
        </Box>
        </TouchableOpacity>
        } 
        </>
        }   
        </>
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
        <Box height="70%" backgroundColor="#eee" width="100%" justifyContent="top" alignItems="center" >
            <ScrollView showsVerticalScrollIndicator={false} width={"100%"}>
            <Box height="100%" width="110%" pv="7%" ph="10%" ml="-1%" marginTop="-4%">
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
            </ScrollView>
            
            </Box>
        </Box>
    </Box>
  )
}

export default Home