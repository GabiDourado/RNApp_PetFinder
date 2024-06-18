import { View, Text, StyleSheet, Button } from 'react-native'
import React, {useContext} from 'react'
import Stories from '../Components/Stories'
import { AuthContext } from '../Context/AuthContext';

export default function Perfil() {
  const { setLogado } = useContext(AuthContext);
  return (
    <>
    <Stories/>
    <View style={css.container}>
      <Text style={css.text}>Perfil</Text>
      <Button title='sair' onPress={()=> setLogado(false)}/>
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