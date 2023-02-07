import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Box } from "@react-native-material/core";
import { borderLeftColor } from "@mui/system";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 


const subWidget = ({ text }) => {
  return (
    <>
      <Text>{text}</Text>
    </>
  )
}

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
            {item.text==="CDH Pain Algorithm" && <Image source={require("/Users/kylewandishin/Sites/CUSOM/secondtry/CU-Med-App/assets/appendixIII.jpg")} style={{width:310,height:405, marginTop:"3%"}}/>}
          </Box>
        </Box>
        {item.hasOwnProperty("sub") && 
          <Box flexDirection="column">
            {item.sub.map((subInfo) => (
              <>
                <Box style={{ marginTop: "3%",borderRadius:"4%", marginHorizontal:"5%",opacity:0.9, backgroundColor:"#FFA500", padding:"1%"}}>
                  <Text style={{fontSize:"18px"}}>{subInfo.text}</Text>
                </Box>
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
          {data.map((item) => (
            <Widget item={item} color={color} />
          ))}
        </Box>
      </ScrollView>
    </>
  );
};

export default ThirdLayer;
