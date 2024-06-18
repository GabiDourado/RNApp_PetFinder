import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react'


export default function Animais({ nome, image, id, setDetalhe, getAnimalId }) {
    return (
        <View style={css.container}>
            <View style={css.boxImage}>
                <Image source={{ uri: image }} style={css.imagem} />
                <View style={css.nomeBtn}>
                    <Text style={css.title}>{nome}</Text>
                    <TouchableOpacity style={css.btn} onPress={() => { setDetalhe(true); getAnimalId(id); }}>
                        <Text style={css.Txtbtn}>Detalhes</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
const css = StyleSheet.create({
    container: {
        width: "80%",
        height: 600,
        backgroundColor: "",
        padding: 10

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
        fontSize: 18,
        width:"70%",
        padding: 5,
        marginTop: 10,
    },
    boxImage: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width: "90%",
        height: 400,
        backgroundColor: "#ABDBFE",
        borderRadius: 10,
        margin: 10,
        overflow:'hidden'
    },
    imagem: {
        width: "85%",
        height: 330,
        resizeMode: "cover",
        borderRadius: 10
    },
    btn: {
        backgroundColor: "#09488F",
        width: "25%",
        padding: 5,
        marginTop: 10,
        borderRadius: 20,
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
    nomeBtn:{
        display:'flex',
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'center',
        width:'87%'
    }
})