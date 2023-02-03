import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Box } from "@react-native-material/core";
import { borderLeftColor } from "@mui/system";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

const subWidget = ({ text }) => {
  return (
    <>
      <Text>{text}</Text>
    </>
  )
}

const Widget = ({ item }) => {
  return (
    <>
      <Box
        style={{
          margin: "2%",
          borderRadius: "4%",
          padding: "2%",
        }}
      >
        <Box style={{backgroundColor: "#cccc", padding:"1%"}}>
          <Text style={{ fontSize: "22px" }}>{item.text}</Text>
          </Box>
        {item.hasOwnProperty("sub") && 
          <>
            {item.sub.map((subInfo) => (
              <>
                <Box style={{ marginTop: "3%",borderRadius:"4%", marginHorizontal:"5%", backgroundColor:"#FFA500", padding:"1%"}}>
                  <Text style={{fontSize:"18px"}}>{subInfo.text}</Text>
                </Box>
                </>
            ))}
          </>
        }
      </Box>
    </>
  );
};
// const Widget = ({ item }) => {
//   return (
//   <>
//     {'sub' in item ? 
//           <>
//             <Box
//         style={{
//           backgroundColor: "#c12",
//           margin: "5%",
//           borderRadius: "4%",
//           padding: "2%",
//         }}
//       >
//         <Text style={{ fontSize: "20px" }}>{item.text}</Text>
        
//           </Box>
//           </>
//           : 
//         <>
//           <Box
//         style={{
//           backgroundColor: "#cc4",
//           margin: "5%",
//           borderRadius: "4%",
//           padding: "2%",
//         }}
//       >
//         <Text style={{ fontSize: "20px" }}>{item.text}</Text>
//       </Box>
//           </>
//       }
//       </>
//   );
// };

const ThirdLayer = ({ route, navigation }) => {
  const { name } = route.params;
  const { data } = route.params;
  const { color } = route.params
  return (
    <>
      <Box
        w="100%"
        h="11%"
        style={{
          backgroundColor: color,
        }}
        pt="15%"
        pl="3%"
      >
        <Box
          style={{ backgroundColor: color, flexDirection:"row" }}
          w="100%"
          justifyContent="space-between"
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios" size={24} color="#DDD" />
          </TouchableOpacity>
          <Text style={{ fontSize: "23px", color:"#ddd", marginTop:"-1%"}}>{name}</Text>
          <Box w="10%"></Box>
        </Box>
      </Box>
      <ScrollView>
      <Box w="100%" h="90%" p="5%" style={{ alignItem: "center" }}>
        {data.map((item) => (
          <Widget item={item} />
        ))}
      </Box>
      </ScrollView>
    </>
  );
};

export default ThirdLayer;
