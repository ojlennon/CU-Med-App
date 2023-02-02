import { View, Text } from "react-native";
import React from "react";
import { Box } from "@react-native-material/core";
import { TouchableOpacity } from "react-native";
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
                  <Box width="110%" mt="3%" ml="-5%" p ="4%" borderRadius="5px" backgroundColor="#cccccc" flexDirection="row" justifyContent="space-between">
                      <TouchableOpacity onPress={() => toggleShown(!shown)}>
                      <Box justifyContent="space-between" flexDirection="row" alignContent="center">
                              <Text style={{ paddingLeft: "4%" }}>{name}</Text>
                              <MaterialIcons name="arrow-forward-ios" size={16} style={{ paddingRight: "5%" }} />
                        </Box>
                          
                      </TouchableOpacity>
                      </Box>
                  </>
                  :
              <>
                  <Box width="110%" mt="3%" ml="-5%" p ="4%" borderRadius="5px" backgroundColor="#cccccc" flexDirection="row" justifyContent="space-between">
                      <TouchableOpacity onPress={() => toggleShown(!shown)}>
                        <Box justifyContent="space-between" flexDirection="row" alignContent="center">
                              <Text style={{ paddingLeft: "4%" }} >{name}</Text>
                              <Entypo name="chevron-thin-down" size={16} color="black" style={{paddingRight:"5%", paddingLeft:"3%"}} />       
                        </Box>
                       
                      </TouchableOpacity>
                      </Box>
                        {pages.map((item) => (
                            <Box w="100%" mt="1%" backgroundColor="#f23"><Text fontSize="20px">{item.name}</Text></Box>
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
  return (
    <>
      <Box
        justifyContent="center"
        alignContent="center"
        backgroundColor="#a0a0a0"
        w="100%"
        pt="10%"
      >
        <Box
          pl="5%"
          pb="5%"
          pt="3%"
          flexDirection="row"
          justifyContent="space-between"
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios" size={24} />
          </TouchableOpacity>
          <Text style={{ fontSize: "20px", alignItems: "center" }}>{name}</Text>
          <Box w="7%" mr="5%"></Box>
        </Box>
      </Box>

          <Box backgroundColor="#aaaa" height="100%">
        {subData.map((item) => (
          <Widget name={item.name} pages={item.subPages} />
        ))}
          </Box>
          
    </>
  );
};

export default SecondTry;