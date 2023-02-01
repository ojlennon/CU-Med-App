import { View, Text } from 'react-native'
import React from 'react'
import { Box } from '@react-native-material/core'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 


const Widget = ({name, pages}) => {
    return (
        <Box mt="5%" ml="5%">
            <Text style={{fontSize:"16px", fontWeight:"500"}}>{name}</Text>
            <Box ml="5%">
            {pages.map((item) => (<Text>{item.name}</Text>))} 
            </Box>
        </Box>
    )
}
const SecondTry = ({ route, navigation }) => {
    const {name} = route.params
    const {text} = route.params
    const {subData} = route.params
    return (
        <>
            <Box justifyContent="center" alignContent='center' backgroundColor="#a0a0a0" w="100%" pt="10%" >
                <Box pl="5%" pb="5%" pt="3%" flexDirection="row" justifyContent="space-between">
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name="arrow-back-ios" size={24} />
                    </TouchableOpacity>
                    <Text style={{fontSize:"20px", alignItems:"center"}}>{name}</Text>
                    <Box w="7%" mr="5%"></Box>
                </Box>
            </Box>
            
            <Box backgroundColor="#aaaa" height="100%">
                {
                    subData.map((item) => (
                        <Widget name={item.name} pages={item.subPages}/>
                    ))
                }
            </Box>
        </>
  )
}

export default SecondTry