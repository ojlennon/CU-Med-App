import { View, Text } from "react-native";
import React from "react";
import { Box } from "@react-native-material/core";
import { TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Entypo } from '@expo/vector-icons';

const AccordData = ({ name, pages }) => {
    return (
        <>
            <Box>
                <TouchableOpacity>

                </TouchableOpacity>
            </Box>
        </>  
    );
}

const Widget = ({ name, pages }) => {
    const[shown,toggleShown] = useState(true)
  return (
      <>
          
          
              {shown ?
              <>
              <TouchableOpacity onPress={() => toggleShown(!shown)}>
                  <Box width="110%" mt="3%" ml="-5%" p ="4%" borderRadius="5px" backgroundColor="#cccccc" flexDirection="row" justifyContent="space-between">
                      
                      <Box justifyContent="space-between" flexDirection="row" alignContent="center">
                              <Text style={{ paddingLeft: "4%" }}>{name}</Text>
                              <MaterialIcons name="arrow-forward-ios" size={16} style={{ paddingRight: "5%" }} />
                        </Box>
                          
                      
                      </Box>
                  </TouchableOpacity>
                  </>
                  :
              <>
              <TouchableOpacity onPress={() => toggleShown(!shown)}>
                  <Box width="110%" mt="3%" ml="-5%" p ="4%" borderRadius="5px" backgroundColor="#cccccc" flexDirection="row" justifyContent="space-between">
                      
                        <Box justifyContent="space-between" flexDirection="row" alignContent="center">
                              <Text style={{ paddingLeft: "4%" }} >{name}</Text>
                              <Entypo name="chevron-thin-down" size={16} color="black" style={{paddingRight:"5%", paddingLeft:"3%"}} />       
                        </Box>
                       
                     
                      </Box>
                      </TouchableOpacity>
                        {pages.map((item) => (
                            <Box w="94%" mt="2%" pl="4%" pt="2.5%" pb="2.5%" ml="3%" backgroundColor="#bbb" borderRadius="5px">
                              <Text fontSize="20px">{item.name}</Text>
                            </Box>
                        ))}
                    
                  </>
              }
    </>
  );
};
const SecondTry = ({ route, navigation }) => {
  const { name } = route.params;
  const { text } = route.params;
  const { subData } = route.params;
  const { color } = route.params
  return (
    <>
      <Box
        justifyContent="center"
        alignContent="center"
        backgroundColor={color}
        w="100%"
        pt="10%"
      >
        <Box
          pl="4%"
          pb="3%"
          pt="2%"
        >
          <TouchableOpacity onPress={() => navigation.goBack()} style={{flexDirection:"row"}}>
            <MaterialIcons name="arrow-back-ios" size={22} color="#ddd" style={{marginTop:"0%"}}/>
          
            <Text style={{ fontSize: "20px", alignItems: "center", color:'#ddd' }}>{name}</Text>
          </TouchableOpacity>
        </Box>
      </Box>
        <ScrollView style={{backgroundColor:"#aaaa", height:"100%"}}>
          <Box overflow="scroll">
            
              {subData.map((item) => (
                <Widget name={item.name} pages={item.subPages} />
              ))}
          </Box>
        </ScrollView>       
    </>
  );
};

export default SecondTry;