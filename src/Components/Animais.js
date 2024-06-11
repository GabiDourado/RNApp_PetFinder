import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import Detalhes from './Detalhes';

export default function Animais({ nome, image, id, setDetalhe, getAnimalId }) {


    return (
        <View style={css.container}>
            <View style={css.boxTitle}>
                <View style={css.circleAvatar}></View>
                <Text style={css.title}>{nome}</Text>
            </View>
            <View style={css.boxImage}>
                <Image source={{ uri: image }} style={css.imagem} />
            </View>
            <TouchableOpacity style={css.btn} onPress={() => { setDetalhe(true); getAnimalId(id); }}>
                <Text style={css.Txtbtn}>Detalhes</Text>
            </TouchableOpacity>
        </View >
    )
}
const css = StyleSheet.create({
    container: {
        width: "100%",
        height: 600,

    },
    boxTitle: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 10,
        paddingLeft: 5,
        marginTop: 30
    },
    circleAvatar: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: "white",
        marginRight: 10
    },
    title: {
        fontSize: 20,
        textAlign: "center"
    },
    boxImage: {
        width: "100%",
        height: 390
    },
    imagem: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    btn: {
        backgroundColor: "#09488F",
        width: "40%",
        padding: 10,
        marginTop: 10
    },
    Txtbtn: {
        color: "white",
        textAlign: 'center'
    },
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