import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import Stories from '../Components/Stories'

export default function AdicionarAnimal() {

  return (
    <>
      <Stories />
      <ScrollView contentContainerStyle={css.scroll}>
        <View style={css.container}>
          <Text style={css.titulo}>Adicionar novo Animal</Text>
          <TextInput placeholder='Descrição'
            style={css.campo}
          //value={obsDescricao}
          //onChangeText={(digitado) => setObsDescricao(digitado)}
          ></TextInput>
          <TextInput placeholder='Local'
            //value={obsLocal}
            style={css.campo}
          // onChangeText={(digitado) => setObsLocal(digitado)}
          ></TextInput>
          <TextInput
            placeholder='Data'
            // value={obsData}
            style={css.campo}
          //onChangeText={(digitado) => setObsData(digitado)}
          ></TextInput>
          <TextInput
            placeholder='Data'
            // value={obsData}
            style={css.campo}
          //onChangeText={(digitado) => setObsData(digitado)}
          ></TextInput>
          <TextInput
            placeholder='Data'
            // value={obsData}
            style={css.campo}
          //onChangeText={(digitado) => setObsData(digitado)}
          ></TextInput>
          <TextInput
            placeholder='Data'
            // value={obsData}
            style={css.campo}
          //onChangeText={(digitado) => setObsData(digitado)}
          ></TextInput>
          <TextInput
            placeholder='Data'
            // value={obsData}
            style={css.campo}
          //onChangeText={(digitado) => setObsData(digitado)}
          ></TextInput>
          <TextInput
            placeholder='Data'
            // value={obsData}
            style={css.campo}
          //onChangeText={(digitado) => setObsData(digitado)}
          ></TextInput>
          <Text style={css.nomes}>teste</Text>
          <Text style={css.nomes}>teste</Text>
          <TouchableOpacity style={css.btnSalvar} /*onPress={CriarObs}*/>
            <Text style={css.btnSalvartxt}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.volta} /*onPress={() => setObservacao(false)} */>
            <Text style={css.txt}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  campo: {
    fontSize: 20,
    backgroundColor: '#fff',
    borderColor: "#000",
    borderWidth: 1,
    padding: 13,
    width: 350,
    height: 50,
    borderRadius: 10,
    marginBottom: 25,
  },
  titulo: {
    fontSize: 20,
    margin: 20,
    fontWeight: 'bold',
  },
  nomes: {
    fontSize: 17,
    backgroundColor: '#fff',
    borderColor: "#000",
    borderWidth: 1,
    padding: 12,
    width: 350,
    textAlign: "center",
    marginBottom: 25,
    borderRadius: 10,
  },
  volta: {
    backgroundColor: "#346AA5",
    padding: 10,
    borderRadius: 10,
    margin: 15
  },
  txt: {
    color: "#fff"
  },
  btnSalvar: {
    width: 350,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#346AA5",
  },
  btnSalvartxt: {
    color: "white",
    lineHeight: 45,
    textAlign: "center",
    fontSize: 15,
  },
  scroll:{
    paddingBottom: 70
  },

})