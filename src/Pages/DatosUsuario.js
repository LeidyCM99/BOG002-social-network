export function FormularioPerfilDeUsuario() {
    const html = `
    <section id= "editar-perfil">
      <div class="subirFoto">
	   <img src= " ">
	   <input type='file' id='my-file'> </input>
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
    InfoPerfil.addEventListener('submit', async (event) => {

        event.preventDefault();
        let fileImage = document.getElementById('my-file').src;
        let nombre = document.getElementById('name').value;
        let descripcion = document.getElementById('descripcion').value;

        // Actualizar perfil del usuario.
        await firebase.auth().currentUser.updateProfile({displayName: nombre, photoURL: fileImage}).then(() => {
			window.location.hash = '#/profile'
        }).catch((error) => {
            console.log("error")
        });

        const user = {
            fileImage,
            nombre,
            descripcion
        }

    });
}

export function cargarImagen() {
    const file = document.getElementById('my-file')[0];
    console.log(file);
}
