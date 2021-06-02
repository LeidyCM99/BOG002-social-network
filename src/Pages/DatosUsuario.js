
// import { SubirStorage } from "../Firebase/Storage.js";

 export function FormularioPerfilDeUsuario() {
    const html = `
    <section id= "editar-perfil">
      <div class="subirFoto">
       <img  class="myimg" id="foto-perfil">
	   <input type="file" id="my-file"> 
       </div>
      
    <form id="formulario">
	  
	  <label for="name">Nombre de usuario</label>
      <input type="text" class="input" id="name" placeholder="Nombre" name="name"></input>
	  <label for="descripcion">Descripcion </label>
	  <input type="text" class="input" id="descripcion" placeholder="Describete para que te conozcan tus amigos" name="descripcion"></input>
	  <button type="submit" class="btn">Guardar</button>
      </form>
	  </section>`;
    return html;
}


export function EditarPerfil() {
    const InfoPerfil = document.getElementById('formulario');
    InfoPerfil.addEventListener('submit',  (event) => {

        event.preventDefault();
        const file = document.getElementById("my-file").files[0];
        const nameFile = file.name;
      
        //  SubirStorage(nameFile ,file, img );
        
       let refstorage = storage.child(nameFile).put(file);
        refstorage.on(firebase.storage.TaskEvent.STATE_CHANGED,(snapshot)=>{
          console.log("cambio")
        })
        refstorage.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('File available at', downloadURL)
          const img = document.querySelector(".myimg");
                img.src = downloadURL;
        })
        let nombre = document.getElementById('name').value;
        let descripcion = document.getElementById('descripcion').value;

        // Actualizar perfil del usuario.
        firebase.auth().currentUser.updateProfile({displayName: nombre})
        .then(() => {window.location.hash = '#/profile'
        })
        .catch((error) => {
            console.log(error)
        });
    });
}
