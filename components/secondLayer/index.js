import { View, Text } from "react-native";
import React from "react";
import { Box } from "@react-native-material/core";
import { TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { AntDesign } from '@expo/vector-icons';

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
                  <Box width="96%" mt="3%" ml="2%" p ="4%" borderRadius="5px" backgroundColor="#cccccc" flexDirection="row" justifyContent="space-between">
                      
                      <Box justifyContent="space-between" flexDirection="row" width="100%">
                              <Text style={{ paddingLeft: "1%" }}>{name}</Text>
                              <MaterialIcons name="arrow-forward-ios" size={16} style={{ paddingRight: "0%" }} />
                        </Box>
                          
                      
                      </Box>
                  </TouchableOpacity>
                  </>
                  :
              <>
              <TouchableOpacity onPress={() => toggleShown(!shown)}>
                  <Box width="96%" mt="3%" ml="2%" p ="4%" borderRadius="5px" backgroundColor="#cccccc" flexDirection="row" justifyContent="space-between">
                      
                        <Box flexDirection="row" justifyContent="space-between" width="108%" ml="-3.5%">
                              <Text style={{ paddingLeft: "4%" }} >{name}</Text>
                              <AntDesign name="down" size={16} color="black" style={{paddingRight:"5%", paddingLeft:"3%"}} />       
                        </Box>
                  </Box>
              </TouchableOpacity>
                        {pages.map((item) => (
                            <Box w="92%" mt="2%" pl="4%" pt="2.5%" pb="2.5%" ml="4%" flexDirection="row" backgroundColor="#bbb" borderRadius="5px" justifyContent="space-between">
                              <Text fontSize="20px">{item.name}</Text>
                              <MaterialIcons name="arrow-forward-ios" size={14} style={{ paddingRight: "3%" }} />
                            </Box>
                        ))}
                    
                  </>
              }
    </>
  );
};
const SecondLayer = ({ route, navigation }) => {
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
          pb="1.5%"
          pt="2%"
        >
          <TouchableOpacity onPress={() => navigation.goBack()} style={{flexDirection:"row"}}>
            <MaterialIcons name="arrow-back-ios" size={22} color="#ddd" style={{marginTop:"0%"}}/>
          
            <Text style={{ fontSize: "20px", alignItems: "center", color:'#ddd' }}>{name}</Text>
          </TouchableOpacity>
        </Box>
      </Box>
        <ScrollView style={{backgroundColor:"#aaaa", height:"100%"}}>
          <Box overflow="scroll" pb="10%" pt="2%">
            
              {subData.map((item) => (
                <Widget name={item.name} pages={item.subPages} />
              ))}
          </Box>
        </ScrollView>       
    </>
  );
};

export default SecondLayer;