import React from 'react';
import { useState } from 'react';
import { TextInput, Button} from "@react-native-material/core";
import { Box } from "@react-native-material/core";
import { FontAwesome5 } from '@expo/vector-icons'; 

const Pass = ({ navigation }) => {
    const [pass, setPass] = useState("")
    return (
    <>
    <Box w="100%" h="100%" ph="5%" alignContent="center" justifyContent="center">
        <Box flexDirection="row" justifyContent="center" alignContent="center">
            <Box width="70%" mt="-40%">
                <Box w="100%" flexDirection="row" justifyContent="center">
                    <FontAwesome5 name="lock" size={100} color="#" />
                </Box>
                <Box h={25}/>
                <TextInput
                    label="password"
                    onChangeText={newText => setPass(newText)}
                />
                <Box h={5}/>
                 <Button title="Submit" onPress={() => {
                    if (pass === "CUCDH") {
                        navigation.navigate("Home")
                    }
                }} />
            </Box>
        </Box>
    </Box>  
    </>
    );
}
 
export default Pass