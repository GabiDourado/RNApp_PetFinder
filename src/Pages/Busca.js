import { View, Text, TextInput, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Busca() {
    const [usuarios, setUsuarios ] = useState( [] );
    const [error, setError ] = useState(false);
    const [busca, setBusca] = useState(false);
    const [filtro, setFiltro ] = useState(false);

    async function getUsuarios()
    {
        await fetch('http://10.139.75.52:5251/api/Animais/GetAllAnimais', {
            method: 'GET',
            headers: {
              'content-type': 'application/json'
            }
          })
            .then( res => res.json())
            .then( json => setUsuarios( json ) )
            .catch( err => setError( true ) )
    }

    useEffect( () => {
        getUsuarios();
    }, [] );

    useEffect( () => {
        setFiltro( usuarios.filter( (item) => item.animalNome == busca )[0] );
    }, [busca] );

    return (
        <View style={css.container}>
            <View style={css.searchBox}>
                <TextInput
                    style={css.search}
                    placeholder="Buscar usuarios"
                    placeholderTextColor="white"
                    TextInput={busca}
                    onChangeText={(digitado) => setBusca( digitado ) }
                />
            </View>
            { filtro && <Text style={css.text}>{filtro.animalNome} </Text> }
            { ( !filtro && busca ) && <ActivityIndicator size="large" color="white" /> }
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        alignItems: "center",
        backgroundColor: "#191919",
    },
    text: {
        color: "white"
    },
    searchBox: {
        width: "100%",
        height: 100,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    search: {
        width: "96%",
        height: 60,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 8,
        padding: 10,
        color: "white"
    }
})