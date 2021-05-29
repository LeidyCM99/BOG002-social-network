
// Actualizacion de Usuario
export function actualizarUser() {

  const user = firebase.auth().currentUser;
  

  console.log( user,user.displayName, "foto "+user.photoURL, user.uid )
  }	

