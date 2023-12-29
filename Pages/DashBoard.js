import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DashBoard = () => {
  return (
    <View style={styles.Container}>
      <Text>DashBoard is coming soon</Text>
    </View>
  )
}

export default DashBoard

const styles = StyleSheet.create({
  Container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})