import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import Cadastro from './Cadastro';

export default function Login() {
    const [cadastro, setCadastro] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const { Login, error } = useContext(AuthContext);

    function RealizaLogin() {
        Login(email, senha);
    }

    function Voltar() {
        setCadastro(false);
    }
    return (
        <ScrollView contentContainerStyle={css.container}>
            {!cadastro ? <>
                <Image source={require("../../assets/logo.png")} style={css.logo} />
                <Text style={css.titulo}>Entrar em sua conta</Text>
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
                <Text style={css.ou}>Ou</Text>
                <TextInput
                    inputMode="email"
                    placeholder="Email"
                    style={css.input}
                    value={email}
                    onChangeText={(digitado) => setEmail(digitado)}
                    placeholderTextColor="gray"
                />
                <TextInput
                    inputMode="text"
                    placeholder="Senha"
                    secureTextEntry={true}
                    style={css.input}
                    value={senha}
                    onChangeText={(digitado) => setSenha(digitado)}
                    placeholderTextColor="gray"
                />
                <TouchableOpacity style={css.btnLogin} onPress={RealizaLogin}>
                    <Text style={css.btnLoginText}>Entrar</Text>
                </TouchableOpacity>
                <View style={css.forgot}>
                    <TouchableOpacity>
                        <Text style={css.forgotText}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                </View>
                <View style={css.forgot}>
                    <TouchableOpacity onPress={() => setCadastro(true)}>
                        <Text style={css.forgotText}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
                {error &&
                    <View style={css.error}>
                        <Text style={css.errorText}>Revise os campos. Tente novamente!</Text>
                    </View>
                }
            </>
                :
                <Cadastro setCadastro={setCadastro} onPress={() => setCadastro(false)} />}
        </ScrollView>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#E3F2FD"
    },
    logo: {
        height: 150,
        width: "40%",
        resizeMode: "contain"
    },
    input: {
        fontSize: 20,
        backgroundColor: '#fff',
        borderColor: "#000",
        borderWidth: 1,
        padding: 13,
        width: "85%",
        height: 50,
        borderRadius: 10,
        marginBottom: 30,
    },
    forgot: {
        width: "90%",
        marginTop: 10,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    forgotText: {
        color: "#0195fd",
        fontWeight: "bold"
    },
    btnLogin: {
        width: "85%",
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#09488F",
    },
    btnLoginText: {
        color: "white",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold"
    },
    error: {
        width: "100%",
        height: 50,
        marginTop: 30,
    },
    errorText: {
        color: "black",
        textAlign: "center"
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
    ou: {
        fontSize: 18,
        fontWeight: "bold",
        padding: 20,
        textAlign: 'center',
    },
    titulo: {
        fontSize: 23,
        fontWeight: "bold",
        padding: 20,
        textAlign: 'center',
    },
});