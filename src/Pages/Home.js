import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Produto from '../Components/Produto';
import Stories from '../Components/Stories';


export default function Home() {

  const [animais, setAnimais] = useState([]);

  async function getProdutos() {
    await fetch('http://10.139.75.52:5251/api/Animais/GetAllAnimais', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setAnimais(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getProdutos();
  }, [])

  return (
    <View style={css.container}>
      {animais ?
        <>
          <Stories produtos={animais} />
          <FlatList
            data={animais}
            renderItem={({ item }) => <Produto title={item.animalNome} image={item.animalFoto} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ height: (animais.length * 600) + 110 }}
          />
        </>
        :
        <Text style={css.text}>Carregando produtos...</Text>
      }
    </View>
  )
}
const css = StyleSheet.create({
  container: {
    backgroundColor: "#191919",
    flexGrow: 1,
    color: "white",
    justifyContent: "center",
   
  },
  text: {
    color: "white"
  },
  stories: {
    width: "100%",
    height: 100
  }
})