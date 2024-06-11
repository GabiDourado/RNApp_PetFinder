import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Cadastro({setCadastro}) {
  
  async function Cadastrar(id, nome, telefone, email, senha) {
    await fetch('http://10.139.75.52:5251/api/Usuarios/InsertUsuario', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
          usuarioId: id,
          usuarioNome: nome,
          usuarioTelefone: telefone,
          usuarioEmail: email,
          usuarioSenha: senha
    })
    })
      .then(res => res.json())
      .then(json => setAnimais(json))
      .catch(err => console.log(err))
  }
  return (
    <View>
      <Text>Cadastre-se</Text>
      <View></View>
      <View></View>
      <View></View>
      <Text>Ou</Text>
      <TextInput placeholder='Nome'/> 
      <TextInput placeholder='Email'/> 
      <TextInput placeholder='Telefone'/> 
      <TextInput placeholder='Senha'/> 
      <TextInput placeholder='Confirmar senha'/> 
      <TouchableOpacity>
        <Text>Cadastrar-se</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

})