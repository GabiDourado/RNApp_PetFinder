import { createContext, useState } from "react";

export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [logado, setLogado] = useState(false);
    const [error, setError] = useState(false);

    async function Login(email, senha) {      
        if (email != "" && senha != "") {
            fetch('http://10.139.75.52:5251/api/Usuarios/Login?usuarioEmail='+email+'&usuarioSenha='+senha, {
                method: 'POST',               
                body: JSON.stringify({
                    usuarioEmail: email,
                    usuarioSenha: senha
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then((res) => res.json())   
            .then((json) => json==true ? logado=json : logado=false)                
            .catch(err => console.log(err))           
        } else {           
           setError(true);
        }
    }

    return (
        <AuthContext.Provider value={{ logado: logado, Login, error: error }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;