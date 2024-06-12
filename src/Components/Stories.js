import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Stories({produtos, foto}) {

  return (
      <View style={css.container}>
        <View style={css.story}>
          <Image source={require("../../assets/variavelLogo.png")} style={css.image}/>
        </View>
        </View>
     
  )
}
const css = StyleSheet.create({
    container: {
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: 10,
        backgroundColor: "#09488F"
    },
    story: {
        width: 60,
        height: 60,
        backgroundColor: "white",
        borderRadius: 30,
        overflow: "hidden",
        marginTop: 20
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "cover"
    }
})