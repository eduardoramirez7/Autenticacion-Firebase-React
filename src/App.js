/* instalar para hacer uso de react-redux
 npm i -S react react-dom react-router react-router-redux react-redux redux */
 /* importaciones para firebase */
import {useFirebaseApp} from 'reactfire';
import Auth from './Auth';
import {useUser} from 'reactfire';

function App() {
  const user = useUser();
  /* Para hacer uso de firebase se crea el Hook useFirebaseApp */
  const firebase = useFirebaseApp();
  console.log(firebase);
  return (
    /* Informacion para el usuario autenticado */
    <div className="App">
      {user.data && <p>Usuario: {user.data.email}</p>}
      <Auth />
    </div>
  );
}

export default App;
