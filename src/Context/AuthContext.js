import { createContext, useState } from "react";

export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [logado, setLogado] = useState(false);
    const [error, setError] = useState(false);
    const [user, setUser] = useState(false);

    async function Login(email, senha) {      
        if (email != "" || senha != "") {
            fetch('http://10.139.75.52:5251/api/Usuarios/Login', {
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
            .then((json) => {
                if( json.usuarioId) {
                    setUser( json );
                    setLogado( true );
                }
            })                
            .catch(err => setError( true ) )           
        } else {           
            setError( true )
        }
    }

    return (
        <AuthContext.Provider value={{ logado: logado, Login, error: error, user: user, setLogado: setLogado }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;