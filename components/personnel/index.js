import React from 'react'
import { Box } from "@react-native-material/core";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Personnel = ({route}) => {
    
    const { name } = route.params;
    const { header } = route.params;
    const { color } = route.params;
    const {data} = route.params
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
        <Text>body</Text>
    </Box>
    </>
    )
}

export default Personnel