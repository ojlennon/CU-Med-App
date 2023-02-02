import { View, Text } from 'react-native'
import React from 'react'

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

const ThirdLayer = ({name}) => {
  return (
    <View>
      <Text>ThirdLayer</Text>
    </View>
  )
}

export default ThirdLayer