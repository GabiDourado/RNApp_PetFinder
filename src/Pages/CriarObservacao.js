import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'

export default function Inserir() {
  return (
    <View style={css.container}>
      <Text>Inserir nova observação</Text>
      <TextInput placeholder='Descrição'></TextInput>
      <TextInput placeholder='Local'></TextInput>
      <TextInput placeholder='Data'></TextInput>
      <TextInput placeholder='Nome do Animal'></TextInput>
      <TextInput placeholder='Nome do Dono'></TextInput>
      <TouchableOpacity>
        <Text>Salvar</Text>
      </TouchableOpacity>
    </View>
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
  
})