import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Stories from '../Components/Stories'

export default function AdicionarAnimal() {
  
  return (
    <>
      <Stories />
      <View style={css.container}>
        <Text style={css.text}>AdicionarAnimal</Text>
      </View>
    </>
  )
}

const css = StyleSheet.create({
  container: {
    backgroundColor: "#E3F2FD",
    flexGrow: 1,
    color: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "black"
  }
})