import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Box, IconButton } from "@react-native-material/core";
import { TouchableOpacity } from 'react-native';
import { MenuOutlined } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const TopBar = () => {
    const [s, setS] = useState(false)
    return (
        <>
            <View>

            <Box width="100%" height="20%" backgroundColor="#c0c0c0" paddingTop="15%" alignItems="center"> 
                <IconButton onPress={() => setS(!s)}>
                        {/* <MenuOutlinedIcon color="primary" /> */}
                        <MenuIcon/>
                </IconButton>
                </Box>
                <IconButton onPress={() => setS(!s)}>
                        {/* <MenuOutlinedIcon color="primary" /> */}
                        <MenuIcon color='primary'/>
                </IconButton>
          
                
                    <Box width="100%" mt="60%" backgroundColor="blue" fontSize="30px">
                        {/* <Text>
                            HELOOOOOO
                        </Text> */}
                    <Button title="Fu"/>
                        {/* <MenuIcon/> */}
                        {/* <MenuOutlinedIcon color="primary"/> */}
                    </Box>
            </View>
        </>
    )
}

export default TopBar
