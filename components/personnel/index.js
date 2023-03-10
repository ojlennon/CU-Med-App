import React from "react";
import { Box } from "@react-native-material/core";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, Text, Linking, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

const Widget = ({ item }) => {
  return (
    <Box
      justifyContent="left"
      alignItems="left"
      ph="5%"
      pv="1%"
      flexDirection="row"
    >
      <Box backgroundColor="#eee" pv="3%" w="100%" ph="5%" borderRadius="8px" flexDirection="column" justifyContent="space-between">
        <Box>
          <Box >
            <Text style={{ fontSize: "20px" }}>{item.name}</Text>
            </Box>
            <Text>{item.role}</Text> 
        </Box>
              <Box pt="3%" borderRadius="8px" justifyContent="center">
                  <Box flexDirection="row">
                    <AntDesign name="mail" size={22} color="black" />
            <Text style={{ marginLeft: 5, marginTop: -2 }}onPress={() => Linking.openURL(`mailto: ${item.email}`)}>{item.email}</Text>
                  </Box>
                  <Box flexDirection="row">
                    <AntDesign name="phone" size={22} color="black" />
            <Text style={{ marginLeft: 5, marginTop: 0 }}onPress={() => Linking.openURL(`tel: ${item.phone}`)}>{item.phone}</Text>
                </Box>
        </Box>  
      </Box>
    </Box>
  );
};
const Personnel = ({ route }) => {
  const { name } = route.params;
  const { color } = route.params;
  const { data } = route.params;
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
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <MaterialIcons
              name="arrow-back-ios"
              size={22}
              color="#eee"
              style={{ marginTop: "0%" }}
            />

            <Text
              style={{
                fontSize: "20px",
                alignItems: "center",
                color: "#eee",
                marginTop: "-0.7%",
              }}
            >
              {name}
            </Text>
            <Box w="8%">
              <Text style={{ opacity: 0 }}>a</Text>
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>
      <Box backgroundColor="#ddd" h="100%" pt="5%" alignItems="center">
        <Box
          width="90%"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          backgroundColor="#eee"
          borderRadius="10px"
        >
          <Text
            onPress={() => Linking.openURL("https://google.com")}
            style={{
              fontSize: "22px",
              padding: "5%",
              marginLeft: 7,
              textDecorationLine: "underline",
              color: "#3CB9B7",
            }}
          >
            <AntDesign name="calendar" size={24} /> On call schedule
          </Text>
        </Box>
        <Box w="100%" ph="5%" pv="2%" mt="3%" mb={5}>
          <Text style={{ fontSize: "24px" }}>Contact Info:</Text>
        </Box>
        <LinearGradient
          style={{flex:1, width:"90%", height:20, position:"absolute", zIndex:999, marginTop:"38.3%"}}
          locations={[0, 0]}
          colors={['rgba(0, 0, 0, 0.01)', 'rgba(0, 0, 0, 0.1)','rgba(0, 0, 0, 0)']}
          pointerEvents={'none'}
        />
        <ScrollView style={{}}>  
        
        <Box
          w="100%"
          h="100%"
          pb={110}
          mt={-3.5}
        >
          {data.map((item) => (
            <Widget item={item} />
          ))}
         
        </Box>
        </ScrollView>
      </Box>
      
      
    </>
  );
};

export default Personnel;
