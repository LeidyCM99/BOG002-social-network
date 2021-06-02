// export const SubirStorage = (nameFile, file, img) => {storage.child(nameFile).put(file) .catch((error) => {
//   console.log(error)
// }).then(snapshot => {
//   return snapshot.ref.getDownloadURL()
// }).then(url => {
//   img.src = url;
// }) .catch((error) => {
//   console.log(error)
// })}

  // export let rstorage = (nameFileP, fileP, foto)=> {storage.child(nameFileP).put(fileP);
  //           rstorage.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
  //           console.log("cambio de estado")
  //       })
  //       rstorage.snapshot.ref.getDownloadURL().then(function (downloadURL) {
  //           console.log('File available at', downloadURL);
	// 			      foto= downloadURL
  //       })}

export function actualizarUser() {

  const user = firebase.auth().currentUser;
  console.log( user,user.displayName, "foto "+ user.photoURL, user.uid )
  }	

