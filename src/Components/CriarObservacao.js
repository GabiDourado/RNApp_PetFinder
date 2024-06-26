import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

export default function Inserir({ NomeDono, NomeAnimal, setObservacao, animalId, animalNome }) {
  const [obsDescricao, setObsDescricao] = useState();
  const [obsLocal, setObsLocal] = useState();
  const [obsData, setObsData] = useState();
  const [nomeAnimal, setNomeAnimal] = useState();
  const { user } = useContext(AuthContext);

  async function CriarObs() {
    if (obsDescricao != null || obsLocal != null || obsData != null) {
      await fetch('http://10.139.75.52:5251/api/Observacoes/InsertObservacao', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          observacaoDescricao: obsDescricao,
          observacaoLocal: obsLocal,
          observacaoData: obsData,
          animaisId: animalId,
          usuarioId: user.usuarioId
        })
      })
        .then(res => res.json())
        .then(json => { alert("Observação criada com sucesso") })
        .catch(err => console.log(err))
    }
    else {
      alert("Verifique os campos e tente novamente")
    }
  }

  async function getAnimailId(id) {
    await fetch('http://10.139.75.52:5251/api/Animais/GetAnimalId/' + id, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => {
        setNomeAnimal(json.animalNome);
      })
      .catch(err => console.log(err))
    getDono(id);
  }

  async function getDono(id) {
    await fetch('http://10.139.75.52:5251/api/Usuarios/GetUsuarioId/' + id, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => {
        setAnimalDono(json.usuarioNome)
      })
      .catch(err => console.log(err))
  }
  return (
    <View style={css.container}>
      <Text style={css.titulo}>Inserir nova observação</Text>
      <TextInput placeholder='Descrição'
        style={css.campo}
        value={obsDescricao}
        onChangeText={(digitado) => setObsDescricao(digitado)}
      ></TextInput>
      <TextInput placeholder='Local'
        value={obsLocal}
        style={css.campo}
        onChangeText={(digitado) => setObsLocal(digitado)}
      ></TextInput>
      <TextInput
        placeholder='Data'
        value={obsData}
        style={css.campo}
        onChangeText={(digitado) => setObsData(digitado)}
      ></TextInput>
      <Text style={css.nomes}>{animalNome}</Text>
      <Text style={css.nomes}>{user.usuarioNome}</Text>
      <TouchableOpacity style={css.btnSalvar} onPress={CriarObs}>
        <Text style={css.btnSalvartxt}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={css.volta} onPress={() => setObservacao(false)} >
        <Text style={css.txt}>Voltar</Text>
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
  campo:{
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
  titulo:{
    fontSize: 20,
    margin: 20,
    fontWeight: 'bold',
  },
  nomes:{
    fontSize: 17,
    backgroundColor: '#fff',
    borderColor: "#000",
    borderWidth: 1,
    padding: 12,
    width: 350,
    textAlign:"center",
    marginBottom: 25,
    borderRadius: 10,
  },
  volta:{
    backgroundColor:"#346AA5",
    padding:10,
    borderRadius: 10,
    margin:15
  },
  txt:{
    color:"#fff"
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

})