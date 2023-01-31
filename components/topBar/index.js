import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Box, IconButton } from "@react-native-material/core";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { TouchableOpacity } from 'react-native';

const TopBar = () => {
    const [s, setS] = useState(false)
    return (
        <>
        <Box width="100%" height="20%" backgroundColor="#c0c0c0" paddingTop="15%" alignItems="center"> 
        <IconButton onPress={() => setS(!s)}>
                <MenuOutlinedIcon sx={{color:"black"}}/>
            </IconButton>
            </Box>
          
            {s &&
                <Box mt="60%" backgroundColor="blue" fontSize="30px">
            <Text>
                HELOOOOOO
            </Text>
        </Box>}
        </>
    )
}

export default TopBar
