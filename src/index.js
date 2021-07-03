import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/* importar librerias de react */
import firebaseConfig from './Firebase-config'
import { FirebaseAppProvider } from 'reactfire';

/* FirebaseAppProvider debe envolver a App, se le pasa un prop con la configuracion de firebase */
/* suspense se usa en dos etapas, la primera hacer que el componenete espere la carga de codigo antes de hacer render
primero se ejecuta firebase y luego App */

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={'Conectando a la app...'}>
        <App />
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);