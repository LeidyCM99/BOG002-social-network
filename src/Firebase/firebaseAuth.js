import { modalError, modalErrorLogin } from '../Pages/error.js';

// *****************crear cuenta de usuario*****************

export const autenticacionUsuario = (email, password, Name) => {
  auth.createUserWithEmailAndPassword(email, password).then((result) => { // Signed in
    window.location.hash = '#/release';
    return result.user.updateProfile({ displayName: Name });
  }).catch((error) => {
    modalError(error);
  });
};

// *****************  ingresando usuario  ******************

export const LoginUsuario = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
    window.location.hash = '#/release';
  }).catch((error) => {
    modalErrorLogin(error);
  });
};
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
