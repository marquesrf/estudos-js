import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const ComponentsScreen = () => {
  const myName = 'Rafael'

  return <View>
    <Text style={styles.textStyle}>Getting started with React Native!</Text>
    <Text style={styles.nameTextStyle}>My name is {myName}</Text>
  </View>
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  nameTextStyle: {
    fontSize: 20
  }
})

export default ComponentsScreen