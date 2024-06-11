import { View, Text, StyleSheet, Image, TouchableOpacity , Button} from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Detalhes({onPress, animalImagem,
                                  animalNome, animalDtDes, animalRaca, animalTipo, 
                                  animalCor, animalSexo, animalObs, animalDono}) {
  return (
    <View style={css.container}>

      <View><Image style={css.fotoAnimal} source={{ uri: animalImagem }} /></View>
      <Text style={css.text}>{animalNome}</Text>
      <View>
        <Text style={css.text}>{animalDtDes}</Text>
        <Text style={css.text}>{animalRaca}</Text>
        <Text style={css.text}>{animalTipo}</Text>
        <Text style={css.text}>{animalCor}</Text>
        <Text style={css.text}>{animalSexo}</Text>
        <Text style={css.text}>{animalObs}</Text>
        <Text style={css.text}>{animalDono}</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={css.text}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={css.text}>Não</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={css.text}>Adicionar Observação</Text>
      </TouchableOpacity>
      <Button title='Voltar' onPress={onPress} />

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
  fotoAnimal: {
    width: 100,
    height: 100
  }

})