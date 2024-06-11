import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animal from '../Components/Animais';
import Stories from '../Components/Stories';
import Detalhes from '../Components/Detalhes';


export default function Home({ navigation }) {

  const [animais, setAnimais] = useState([]);
  const [detalhe, setDetalhe] = useState(false);

  const [animalId, setAnimalId] = useState();
  const [animalImagem, setAnimalImagem] = useState();
  const [animalNome, setAnimalNome] = useState();
  const [animalDtDes, setAnimalDtDes] = useState();
  const [animalRaca, setAnimalRaca] = useState();
  const [animalTipo, setAnimalTipo] = useState();
  const [animalCor, setAnimalCor] = useState();
  const [animalSexo, setAnimalSexo] = useState();
  const [animalObs, setAnimalObs] = useState();
  const [animalDono, setAnimalDono] = useState();

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

  async function getAnimailId(id) {
    await fetch('http://10.139.75.52:5251/api/Animais/GetAnimalId/' + id, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => {
        setAnimalId(json.animaisId);
        setAnimalNome(json.animalNome);
        setAnimalImagem(json.animalFoto);
        setAnimalDtDes(json.animalDtDesaparecimento);
        setAnimalRaca(json.animalRaca);
        setAnimalTipo(json.animalTipo);
        setAnimalCor(json.animalCor);
        setAnimalSexo(json.animalSexo);
        setAnimalObs(json.animalObservacao);
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

  function Voltar (){
    setDetalhe(false);
    setAnimalId("");
    setAnimalNome("");
    setAnimalImagem("");
    setAnimalDtDes("");
    setAnimalRaca("");
    setAnimalTipo("");
    setAnimalCor("");
    setAnimalSexo("");
    setAnimalObs("");
    setAnimalDono("");
  }

  useEffect(() => {
    getProdutos();
  }, [])

  
  return (
    <View style={css.container}>
      {animais && !detalhe &&
        <>
          <FlatList
            data={animais}
            renderItem={({ item }) => <Animal nome={item.animalNome} image={item.animalFoto} id={item.animaisId} setDetalhe={setDetalhe} getAnimalId={getAnimailId} />}
            keyExtractor={(item) => item.animalId}
            contentContainerStyle={{ height: (animais.length * 600) + 110 }}
          />
        </>
      }
      {!animais && !detalhe &&
        <Text style={css.text}>Carregando Animais...</Text>
      }
      {
        detalhe &&
        <Detalhes onPress={Voltar}
          animalImagem={animalImagem}
          animalNome={animalNome}
          animalDtDes={animalDtDes}
          animalRaca={animalRaca}
          animalTipo={animalTipo}
          animalCor={animalCor}
          animalSexo={animalSexo}
          animalObs={animalObs}
          animalDono={animalDono}
        />
      }
    </View>
  )
}
const css = StyleSheet.create({
  container: {
    backgroundColor: "#E3F2FD",
    flexGrow: 1,
    color: "white",
    justifyContent: "center",

  },

  stories: {
    width: "100%",
    height: 100
  }
})