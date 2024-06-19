import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import Stories from '../Components/Stories'
import { AuthContext } from '../Context/AuthContext';

export default function AdicionarAnimal() {
  const [animalImagem, setAnimalImagem] = useState();
  const [animalNome, setAnimalNome] = useState();
  const [animalDtDes, setAnimalDtDes] = useState();
  const [animalRaca, setAnimalRaca] = useState();
  const [animalTipo, setAnimalTipo] = useState();
  const [animalCor, setAnimalCor] = useState();
  const [animalSexo, setAnimalSexo] = useState();
  const [animalObs, setAnimalObs] = useState();
  const { user } = useContext(AuthContext);
  async function Adicionar() {
    if (animalImagem != null || animalNome != null || animalDtDes != null || animalRaca != null || animalTipo!= null|| animalCor!=null ||animalSexo!=null || animalObs!=null) {
      await fetch('http://10.139.75.52:5251/api/Animais/InsertAnimal', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          animalNome: animalNome,
          animalRaca: animalRaca,
          animalTipo: animalTipo,
          animalCor: animalCor,
          animalSexo: animalSexo,
          animalObservacao: animalObs,
          animalFoto: animalImagem,
          animalDtDesaparecimento: animalDtDes,
          animalStatus: 1,
          usuarioId: user.usuarioId
        })
      })
        .then(res => res.json())
        .then(json => { alert("Adicionado com sucesso") })
        .catch(err => console.log(err))
    }
    else {
      alert("Verifique os campos e tente novamente")
    }
  }
  function Salvar (){
    Adicionar();
    setAnimalNome("");
    setAnimalImagem("");
    setAnimalDtDes("");
    setAnimalRaca("");
    setAnimalTipo("");
    setAnimalCor("");
    setAnimalSexo("");
    setAnimalObs("")
  }
  return (
    <>
      <Stories />
      <ScrollView contentContainerStyle={css.scroll}>
        <View style={css.container}>
          <Text style={css.titulo}>Adicionar novo Animal</Text>
          <TextInput placeholder='Nome do Animal'
            style={css.campo}
            value={animalNome}
            onChangeText={(digitado) => setAnimalNome(digitado)}
          ></TextInput>
          <TextInput placeholder='Raça'
            value={animalRaca}
            style={css.campo}
            onChangeText={(digitado) => setAnimalRaca(digitado)}
          ></TextInput>
          <TextInput
            placeholder='Tipo'
            value={animalTipo}
            style={css.campo}
            onChangeText={(digitado) => setAnimalTipo(digitado)}
          ></TextInput>
          <TextInput
            placeholder='Cor'
            value={animalCor}
            style={css.campo}
            onChangeText={(digitado) => setAnimalCor(digitado)}
          ></TextInput>
          <TextInput
            placeholder='Sexo'
            value={animalSexo}
            style={css.campo}
            onChangeText={(digitado) => setAnimalSexo(digitado)}
          ></TextInput>
          <TextInput
            placeholder='Observação'
            value={animalObs}
            style={css.campo}
            onChangeText={(digitado) => setAnimalObs(digitado)}
          ></TextInput>
          <TextInput
            placeholder='Data de desaparecimento'
            value={animalDtDes}
            style={css.campo}
            onChangeText={(digitado) => setAnimalDtDes(digitado)}
          ></TextInput>
          <TextInput
            placeholder='Foto'
            value={animalImagem}
            style={css.campo}
            onChangeText={(digitado) => setAnimalImagem(digitado)}
          ></TextInput>
          <Text style={css.nomes}>Dono: {user.usuarioNome} </Text>
          <TouchableOpacity style={css.btnSalvar} onPress={Salvar}>
            <Text style={css.btnSalvartxt}>Salvar</Text>
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
  scroll: {
    paddingBottom: 50,
    backgroundColor: "#E3F2FD",
  },

})