import React from 'react'
import { Box } from "@react-native-material/core";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity, Text, ScrollView, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Widget = ({ item, color }) => {
    return (
      <>
        <Box
        ml="9.2%"
          style={{
            borderRadius: "4%",
            padding: "2%",
            width:"90%"
          }}
        >
          <Box flexDirection="row" justifyContent="center" alignItem="center">
            <Box flexDirection="row" height="100%" alignItems="center" ml="-7.8%" mr="3%" justifyContent="center">
              <FontAwesome name="circle" size={24} color={color} style={{}} />
              <FontAwesome name="circle" size={14} color="#eee" style={{position:"absolute"}} />
            </Box>
            <Box style={{backgroundColor: "#e0e0e0", padding:"4%", width:"100%", borderRadius:"5px"}}>
              <Text style={{ fontSize: "18px", fontWeight:"500" }}>{item.name} </Text>
              <Text style={{ fontSize: "16px", marginLeft:"3%", marginTop:5 }}>By: {item.author} </Text>
              <Text style={{right:"-65%", fontSize: "14px", color:"#56C8C6",width:208,padding:5, marginTop:8,textDecorationLine: 'underline', borderRadius:"5px"}} onPress={() => Linking.openURL(item.link)}> Read More ...</Text>
            </Box>
          </Box>
        </Box>
      </>
    );
  };

const Articles = ({route}) => {
    
    const { name } = route.params;
    const { color } = route.params;
    const { data } = route.params
    const navigation = useNavigation();
    return (
        <>
        <Box
        justifyContent="center"
        alignContent="center"
        w="100%"
        pt="10%"
        style={{ backgroundColor: color }}
    >
        <Box pl="4%" pb="0.8%" pt="2%">
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ flexDirection: "row", justifyContent:"space-between" }}
        >
            <MaterialIcons
            name="arrow-back-ios"
            size={22}
            color="#eee"
            style={{ marginTop: "0%" }}
            />

            <Text
            style={{ fontSize: "20px", alignItems: "center", color: "#eee", marginTop:"-0.7%" }}
            >
            {name}
            </Text>
            <Box w="8%">
            <Text style={{opacity:0}}>a</Text>
            </Box>
        </TouchableOpacity>
        </Box>
    </Box>
    <Box>
        <ScrollView style={{backgroundColor:"#eee", width:"100%", height:"100%"}}>
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
            <Box h="100%" pb="30%">
                <Box mt="3%" height="100%">
                    {
                        data.map((item)=>(
                            <Widget item={item} color={color}/>
                        ))
                    }
                </Box>
            </Box>
        </ScrollView>
    </Box>
    </>
    )
}

export default Articles