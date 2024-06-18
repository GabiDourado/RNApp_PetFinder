import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

export default function Cadastro({ onPress, setCadastro }) {

  const [usuarioId, setUsuarioId] = useState();
  const [ usuarioNome, setUsuarioNome ]= useState();
  const [ usuarioTel, setUsuarioTel ] = useState();
  const [ usuarioEmail, setUsuarioEmail ]= useState();
  const [ usuarioSenha, setUsuarioSenha ] = useState();
  async function Cadastrar() { 
    console.log(usuarioTel);
    if(usuarioNome != null || usuarioTel != null || usuarioEmail != null || usuarioSenha != null)
    {
      await fetch('http://10.139.75.52:5251/api/Usuarios/InsertUsuario', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          usuarioNome: usuarioNome,
          usuarioTelefone: usuarioTel,
          usuarioEmail: usuarioEmail,
          usuarioSenha: usuarioSenha
        })
      })
        .then(res => res.json())
        .then(json => { alert("Cadastro realizado com sucesso!")})
        .catch(err => console.log(err))  
    }
    else{
      alert("Verifique os campos e tente novamente")
    } 
  }
  return (
    <View style={css.container}>
      <Button title='voltar' onPress={onPress}/>
      <Text>Cadastre-se</Text>
      <View style={css.entrarCom}>
        <TouchableOpacity style={css.caixaentrar}>
          <Image style={css.conta} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/480px-Facebook_f_logo_%282019%29.svg.png", }} />
        </TouchableOpacity>
        <TouchableOpacity style={css.caixaentrar}>
          <Image style={css.conta} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png', }} />
        </TouchableOpacity>
        <TouchableOpacity style={css.caixaentrar}>
          <Image style={css.conta} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png", }} />
        </TouchableOpacity>
      </View>
      <Text>Ou</Text>
      <TextInput 
      placeholder='Nome' 
      value={usuarioNome} 
      onChangeText={(digitado) => setUsuarioNome(digitado)}
      />
      <TextInput 
      placeholder='Email' 
      value={usuarioEmail}     
      onChangeText={(digitado) => setUsuarioEmail(digitado)}
      />
      <TextInput 
      placeholder='Telefone' 
      value={usuarioTel}     
      onChangeText={(digitado) => setUsuarioTel(digitado)}      
      />
      <TextInput 
      placeholder='Senha' 
      value={usuarioSenha}     
      onChangeText={(digitado) => setUsuarioSenha(digitado)}      
      secureTextEntry={true}
      />
      <TouchableOpacity onPress={()=>{Cadastrar();   setCadastro(false); }}>
        <Text>Cadastrar-se</Text>
      </TouchableOpacity>
    </View>
  )
}

const css = StyleSheet.create({
  container:{
    backgroundColor: "#E3F2FD",
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  entrarCom: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  caixaentrar: {
    backgroundColor: "#fff",
    width: 62,
    height: 62,
    margin: 10,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  },
  conta: {
    width: 50,
    height: 50,
  },

})
