import { createContext, useState } from "react";

export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [logado, setLogado] = useState(true);
    const [error, setError] = useState(false);

    async function Login(email, senha) {

        if (email != "" && senha != "") {
            await fetch('http://10.139.75.52:5251/Usuarios/Login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    usuarioId: 1,
                    usuarioNome: "Csss",
                    usuarioTelefone: "usuarioTelefone",
                    usuarioEmail: "email",
                    usuarioSenha: 12
                })
            })
                .then(res => res.json())
                .then(json => console.log(json))

                .catch(err => setError(true))
        } else {
            setError(true)
        }
    }

    return (
        <AuthContext.Provider value={{ logado: logado, Login, error: error }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;