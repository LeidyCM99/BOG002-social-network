import { home, BotondeCrearCuentaconGoogle } from './Pages/Home.js';
import { FormularioDeRegistro, DatosDeRegistro } from './Pages/SingUp.js';
import { FormularioDeIngreso, DatosDeLogin } from './Pages/Login.js';
import { SoloUsuarios } from './Firebase/firebaseAuth.js';
import { inicio, ParaPublicar } from './Pages/inicio.js';
import { perfil, name, CerrarSesion } from './Pages/perfil.js';
import { FormularioPerfilDeUsuario, EditarPerfil } from './Pages/DatosUsuario.js';
import { Error404 } from './Pages/Error 404.js';
import { search } from './Pages/search.js';
import { MostrarPublicaciones } from './Firebase/firestore.js';

const content = document.getElementById('root');

export const router = (route) => {
  // para el registro
  const containerModal = document.getElementById('container_modal');
  containerModal.classList.remove('show');
  // para el login
  const loginModal = document.getElementById('login_modal');
  loginModal.classList.remove('show');

  content.innerHTML = '';
  const user = SoloUsuarios();

  switch (route) {
    case '':
      content.innerHTML = home();
      BotondeCrearCuentaconGoogle();

      break;
    case '#/signUp':
      content.innerHTML = FormularioDeRegistro();
      DatosDeRegistro();

      break;
    case '#/login':
      content.innerHTML = FormularioDeIngreso();
      DatosDeLogin();

      break;
    case '#/release':

      if (user) {
        content.innerHTML = inicio();
        ParaPublicar();
        MostrarPublicaciones();
      } else {
        window.location.hash = '#/login';
      }

      break;
    case '#/profile':

      if (user) {
        content.innerHTML = perfil(); name();
        CerrarSesion();
        MostrarPublicaciones();
      } else {
        window.location.hash = '#/login';
      }

      break;
    case '#/search':

      if (user) {
        content.innerHTML = search();
        CerrarSesion();
      } else {
        window.location.hash = '#/login';
      }

      break;
    case '#/editarPerfil':

      if (user) {
        content.innerHTML = FormularioPerfilDeUsuario();
        EditarPerfil();
      } else {
        window.location.hash = '#/login';
      }

      break;
    default:
      content.innerHTML = Error404();
  }
};
