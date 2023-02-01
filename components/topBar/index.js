import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Box, IconButton } from "@react-native-material/core";
import { TouchableOpacity } from 'react-native';
import MenuIcon from '@mui/icons-material/Menu';

const TopBar = () => {
    const [s, setS] = useState(false)
    return (

            <View style={{height:"30%"}}>
                {s===false &&
                <Box mb="0%" width="100%" height="100%" backgroundColor="#c0c0c0" paddingTop="15%" justifyContent="space-between"> 
                    <TouchableOpacity onPress={() => setS(!s)}>
                        <Text>Hamburger</Text>
                    </TouchableOpacity>
                </Box>
                }
                {s && 
                <Box height="100%" flexDirection="row" >
                    <Box width="20%" paddingTop="15%" justifyContent="space-between">
                        <Text>Menu</Text>
                    </Box>
                    <Box mb="0%" width="80%" height="100%" backgroundColor="#c0c0c0" paddingTop="15%" justifyContent="space-between"> 
                        <TouchableOpacity onPress={() => setS(!s)}>
                            <Text>Hamburger</Text>
                            <MenuIcon/>
                        </TouchableOpacity>
                    </Box>
                </Box>
                }
            </View>
    )
}

export default TopBar
