import { Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { Button, Box, IconButton } from "@react-native-material/core";
import { TouchableOpacity } from 'react-native';
import MenuIcon from '@mui/icons-material/Menu';

const TopBar = () => {
    const [s, setS] = useState(false)
    return (

            <View style={{height:"30%", boxShadow: "0px 15px 10px -15px #111"  }}>
                <Box mb="0%" width="100%" height="100%" backgroundColor="#222" paddingTop="15%" justifyContent="center" alignItems="center" flexDirection="row"> 
                    <Image source={require("../../assets/octopus-logo-new.png")} style={{width:55,height:55}}/>
                    <Text style={{fontSize:"54px", color:"#ddd", marginLeft:"1.5%", marginTop:"1%"}}>OCTOPUS</Text>
                </Box>
            </View>
    )
}

export default TopBar
