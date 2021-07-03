/* useFirebaseApp permiten obtener el objeto de firebase
useUser se usa para guardar una sesion local del usuario */
import 'firebase/auth';
import { useState } from 'react';
import { useFirebaseApp, useUser } from 'reactfire';

export default (props) => {

    /* Sincronicar los datos de entrada (email y password) usando Hooks */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp(); //Hook que permite acceder a toda la API de firebase
    const user = useUser(); //obtiene el usuario

    /* Async porque retorna una promesa */
    const submit = async () => {
        /* Aqui se crea el usuario con firebase */
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    const logout = async () => {
        /* Aqui se crea el usuario con firebase */
        await firebase.auth().signOut();
    }

    /* Para ingresar con cuentas registradas */
    const login = async () => {
        /* Aqui se crea el usuario con firebase */
        await firebase.auth().signInWithEmailAndPassword(email, password);
    }

    return (
        /* Construccion de la interfaz */
        <div>
            {
                !user.data && 
                <div>
                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" id="email" onChange={(evento) => setEmail(evento.target.value)} />
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" onChange={(evento) => setPassword(evento.target.value)} />
                    <button onClick={submit}>Crear Cuenta</button>
                    <button onClick={login}>Iniciar Sesión</button>
                </div>
            }
            {
                user.data && <button onClick={() => firebase.auth().signOut()}>Cerrar Sesión</button>            
            }
        </div>
    )
}
