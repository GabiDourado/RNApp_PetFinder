import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useState , useContext} from 'react';
import { AuthContext } from '../Context/AuthContext';

export default function Inserir({ NomeDono, NomeAnimal, setObservacao, animalId, animalNome}) {
  const [obsDescricao, setObsDescricao] = useState();
  const [obsLocal, setObsLocal] = useState();
  const [obsData, setObsData] = useState();
  const [nomeAnimal, setNomeAnimal] = useState();
  const [nomeUsuario, setNomeUsuario] = useState();
  const {user} = useContext(AuthContext);

  async function CriarObs() {    
    console.log(animalId);
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
      getDono( id );
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
      <Text>Inserir nova observação</Text>
      <TextInput placeholder='Descrição'></TextInput>
      <TextInput placeholder='Local'></TextInput>
      <TextInput placeholder='Data'></TextInput>
      <Text>{animalNome}</Text>
      <Text>{user.usuarioNome}</Text>
      <TouchableOpacity onPress={CriarObs}>
        <Text>Salvar</Text>
      </TouchableOpacity>
      <Button title='Voltar' onPress={() => setObservacao(false)}  />
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