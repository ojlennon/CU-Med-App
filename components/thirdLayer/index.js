import { Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Box } from "@react-native-material/core";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 

const Widget = ({ item, color }) => {
  return (
    <>
      <Box
        style={{
          margin: "2%",
          borderRadius: "4%",
          padding: "2%",
          width:"100%"
        }}
      >
        <Box flexDirection="row" justifyContent="center" alignItem="center">
          <Box flexDirection="row" height="100%" alignItems="center" ml="-7.8%" mr="3%" justifyContent="center">
            <FontAwesome name="circle" size={24} color={color} style={{}} />
            <FontAwesome name="circle" size={14} color="#eee" style={{position:"absolute"}} />
          </Box>
          <Box style={{backgroundColor: "#e0e0e0", padding:"4%", width:"100%", borderRadius:"5px"}}>
            <Text style={{ fontSize: "20px" }}>{item.text} </Text>
            {item.text==="CDH Pain Algorithm" && <Image source={require("../../assets/appendixIII.png")} style={{width:310,height:405, marginTop:"3%"}}/>}
          </Box>
        </Box>
        {item.hasOwnProperty("sub") && 
          <Box flexDirection="column">
            {item.sub.map((subInfo) => (
              <>
                <Box style={{ marginTop: "3%",borderRadius:"4%", marginLeft:"5%",opacity:0.9, backgroundColor:"#d8d8d8", padding:"1%"}}>
                  <Text style={{fontSize:"18px"}}>{subInfo.text}</Text>
                </Box>
                {subInfo.hasOwnProperty("sub") &&
                  <Box flexDirection="column">
                      {subInfo.sub.map((subInfo) =>(
                        <>
                          <Box style={{ marginTop: "3%",borderRadius:"4%", marginLeft:"10%",opacity:0.9, backgroundColor:"#d0d0d0", padding:"1%"}}>
                            <Text style={{fontSize:"18px"}}>{subInfo.text}</Text>
                          </Box>
                        </>
                      ))}
                  </Box>
                }
                </>
            ))}
          </Box>
        }
       
      </Box>
    </>
  );
};

const ThirdLayer = ({ route, navigation }) => {
  const { name } = route.params;
  const { data } = route.params;
  const { color } = route.params
  const { header } = route.params
  return (
    <>
      <Box
        w="100%"
        h="9.2%"
        style={{
          backgroundColor: color,
        }}
        pt="12%"
        pl="5%"
      >
        <Box
          style={{ backgroundColor: color, flexDirection:"row" }}
          w="100%"
          justifyContent="space-between"
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={{ fontSize: "23px", color:"#fff", marginTop:"-1%"}}>{name}</Text>
          <Box w="11%"></Box>
        </Box>
      </Box>
      <ScrollView style={{backgroundColor:"#f2eeee"}}>
        <Box
        position="absolute"
        left="6%"
        mt="-100%"
        height="10000%"
        width="0.7%"
        style={{opacity:0.1}}
        backgroundColor="#333"
        >
          <Text style={{fontSize:"1px"}}>a</Text>
        </Box>
        <Box w="100%" h="100%" p="5%" ml="2.5%" style={{ alignItem: "center" }} >
          { header!=="" &&
            <Box backgroundColor="#ccc" style={{minHeight:50}} w="120%" ml="-8%" pv="3%" ph="5%" mt="-5.5%" mb="3%" justifyContent="center" s>
                <Text style={{fontSize:"20", width:"92%"}}>{header}</Text>
            </Box>}
          {data.map((item) => (
            <Widget item={item} color={color} />
          ))}
        </Box>
      </ScrollView>
    </>
  );
};

export default ThirdLayer;
