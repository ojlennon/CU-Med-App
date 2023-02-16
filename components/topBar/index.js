import { Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import {Box} from "@react-native-material/core";

const TopBar = () => {
    const [s, setS] = useState(false)
    return (

            <View style={{height:"29%", boxShadow: "0px 15px 10px -15px #111"  }}>
                <Box mb="0%" width="100%" height="100%" backgroundColor="#222" paddingTop="15%" justifyContent="center" alignItems="center" flexDirection="row"> 
                    <Image source={require("../../assets/Untitled.png")} style={{width:90,height:90, marginLeft:"-10%"}}/>
                    <Text style={{fontSize:"54px", color:"#ddd", marginLeft:"-1.5%", marginTop:"6.5%"}}>CDH</Text>
                </Box>
            </View>
    )
}

export default TopBar
