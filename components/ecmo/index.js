import { Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Box } from "@react-native-material/core";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Widget = ({ name,item, color="#0F0", data }) => {
  const [shown, toggleShown] = useState(true);
  const navigation = useNavigation();
  return (
    <>
        <Box>
          <TouchableOpacity
            onPress={() => navigation.navigate("Third", {
                name: name,
                data: data,
                color: color,
                header: ""
              })}
              style={{ borderRadius: "4px" }}
          >
            <Box
              width="92%"
              mt="3%"
              ml="4%"
              p="4%"
              borderRadius="4px"
              backgroundColor="#d7d7d7"
              flexDirection="row"
              justifyContent="space-between"
              alignContent="center"
            >
              <Text
                style={{
                  paddingLeft: "1%",
                  fontSize: "20px",
                }}
              >
                {name}
              </Text>

              <AntDesign
                name="right"
                size={20}
                style={{ paddingRight: "1%", marginTop: "1%" }}
              />
            </Box>
          </TouchableOpacity>
        </Box>
        </>
  );
};
const ECMO = ({ route }) => {
  const { name } = route.params;
  const { text } = route.params;
  const { subData } = route.params;
  const { color } = route.params;
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

      <ScrollView style={{ height: "100%", p: "5%", backgroundColor: "#eee" }}>
        <Box mb="15%">
          {subData.map((item) => (
            <Widget
              name={item.name}
              style={{ marginLeft: "3%" }}
              color={color}
              data={item.data}
            />
          ))}
        </Box>
      </ScrollView>
    </>
  );
};

export default ECMO;
