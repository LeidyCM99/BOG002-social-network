import { modalError, modalErrorLogin } from '../Pages/error.js';

// *****************crear cuenta de usuario*****************

export const autenticacionUsuario = (email, password, Name) => {
 autenticacion(email, password).then((result) => { 
    window.location.hash = '#/release';
    return result.user.updateProfile({ displayName: Name });
  }).catch((error) => {
    modalError(error);
  });
};

export function autenticacion (email, password){
return  auth.createUserWithEmailAndPassword(email, password)
}
// *****************  ingresando usuario  ******************

export const LoginUsuario = (email, password) => {
  return InicioSesion(email, password)
  .then((userCredential) => {
    window.location.hash = '#/release';
	return userCredential
  }).catch((error) => {
    modalErrorLogin(error);
  });
};

export function InicioSesion(email, password){
	return firebase.auth().signInWithEmailAndPassword(email, password)
}
// *********************** solo usuarios logeados ******************

export function SoloUsuarios() {
  const user = firebase.auth().currentUser;
  return user;
}

// ************************ cerrar sesion ******************************
export function Salir() {
  firebase.auth().signOut().then(() => {
    window.location.hash = '';
  });
}

// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
//   .then(() => firebase.auth().signInWithEmailAndPassword(email, password))
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
