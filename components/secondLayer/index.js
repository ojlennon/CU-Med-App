import { View, Text } from 'react-native'
import React from 'react'
import { Box } from '@react-native-material/core'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

const SecondTry = ({ route, navigation }) => {
    const {name} = route.params
    return (
        <>
            <Box justifyContent="center" alignContent='center' backgroundColor="#f12" width="100%" h="10%" mt="10%">
                <TouchableOpacity onPress={() => navigation.goBack()}><AntDesign name="leftcircle" size={40} color="black" /></TouchableOpacity>
            </Box>
            
            <Box justifyContent='center' alignItems='center' backgroundColor="#aaaa" height="100%">
                <TouchableOpacity onPress={() => navigation.goBack()}><Text>{name}</Text></TouchableOpacity>
            </Box>
        </>
  )
}

export default SecondTry