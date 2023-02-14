import React from "react";
import { Box } from "@react-native-material/core";
import { TouchableOpacity, ScrollView, Text, Image } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
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
              <Text style={{ fontSize: "20px" }}>{item.text} </Text>
              {item.text==="CDH Pain Algorithm" && <Image source={require("../../assets/appendixIII.jpg")} style={{width:310,height:405, marginTop:"3%"}}/>}
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

const Appendix = ({route}) => {
    
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
        {name==="Appendix III" &&
        <>
            <Box alignItems="center" justifyContent="center" minH="15%" style={{maxHeight:50}} backgroundColor="#fff" mh="3%" mt="8%">
                <Text style={{fontSize:20}}>CDH Pain Algorithm</Text>
            </Box>
         <Image source={require("../../assets/appendixIII.jpg")} style={{width:390,height:510, marginTop:"3%"}}/>
        </>
        }
        {name==="Appendix II" &&
        <>
            <ScrollView style={{backgroundColor:"#eee", width:"100%"}}>
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
                <Box width="100%" style={{height:80}} ml="0%" justifyContent="center" alignItems="center" backgroundColor="#e0e0e0">
                  <Text style={{fontSize:"20px"}}>{header}</Text>
                </Box>
                <Box mt="3%" height="100%">
                    {
                        data.map((item)=>(
                            <Widget item={item} color={color}/>
                        ))
                    }
                </Box>
            </Box>
            </ScrollView>
        </>
        }
        {name==="Appendix I" &&
        <>
            <ScrollView style={{backgroundColor:"#eee", width:"100%"}}>
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
                <Box width="100%" style={{height:80}} ml="0%" justifyContent="center" alignItems="center" backgroundColor="#e0e0e0">
                  <Text style={{fontSize:"20px"}}>{header}</Text>
                </Box>
                <Box mt="3%" height="100%">
                    {
                        data.map((item)=>(
                            <Widget item={item} color={color}/>
                        ))
                    }
                </Box>
            </Box>
            </ScrollView>
        </>
        }
    </Box>
    </>
    )
}

export default Appendix