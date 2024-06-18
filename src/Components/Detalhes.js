import { View, Text, StyleSheet, Image, TouchableOpacity, Button, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import CriarObservacao from '../Components/CriarObservacao'
import Stories from './Stories';


export default function Detalhes({ onPress, animalImagem, animalId,
  animalNome, animalDtDes, animalRaca, animalTipo,
  animalCor, animalSexo, animalObs, animalDono, animalStatus }) {
  const [observacao, setObservacao] = useState(false);


  return (
    <>
      <Stories />
      <ScrollView contentContainerStyle={css.scroll}>
        <View style={css.container}>
          {!observacao && animalImagem != "" ?
            <>
              <View style={css.bordaFoto}>
                <Image style={css.fotoAnimal} source={{ uri: animalImagem }} />
              </View>
              <Text style={css.textNome}>{animalNome}</Text>
              <View style={css.descricao}>
                <Text style={css.text}> Desapareceu em: {animalDtDes}</Text>
                <Text style={css.text}> Raça: {animalRaca}</Text>
                <Text style={css.text}> Tipo: {animalTipo}</Text>
                <Text style={css.text}> Cor: {animalCor}</Text>
                <Text style={css.text}> Sexo: {animalSexo}</Text>
                <Text style={css.text}> Observação: {animalObs}</Text>
                <Text style={css.text}> Dono(a): {animalDono}</Text>
                {animalStatus != 0?
                <Text style={css.text}> Desaparecido </Text>
                :
                <Text style={css.text}> Encontrado</Text>
                }
              </View>
              <Text style={css.viu}>Você me viu?</Text>
              <TouchableOpacity onPress={() => setObservacao(true)} style={css.btn}>
                <Text style={css.textbtn}>Adicionar Observação</Text>
              </TouchableOpacity>
              <TouchableOpacity style={css.btn} onPress={onPress}>
                <Text style={css.textbtn}>Voltar</Text>
              </TouchableOpacity>
            </>
            :
            <CriarObservacao
              setObservacao={setObservacao}
              animalId={animalId}
              animalNome={animalNome}
            />
          }
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
  fotoAnimal: {
    width: "90%",
    height: 400,
    borderRadius: 10,
  },
  bordaFoto: {
    width: "95%",
    height: 430,
    backgroundColor: "#ABDBFE",
    margin: 8,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    padding: 4
  },
  textNome: {
    fontSize: 20
  },
  descricao:{
    width:"97%"
  },
  scroll:{
    paddingBottom: 70
  },
  viu:{
    fontSize:17
  },
  btn:{
    backgroundColor:"#346AA5",
    padding:10,
    borderRadius: 10,
    margin:5
  },
  textbtn:{
    color:"#fff"
  },

})