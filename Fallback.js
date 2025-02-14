import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Fallback = () => {
  return (
    <View>
      <Image source={require("./../assets/images.jpeg")} style={{
        height:300,
        width:400,
      }}/>
      
    </View>
  )
}

export default Fallback

const styles = StyleSheet.create({})