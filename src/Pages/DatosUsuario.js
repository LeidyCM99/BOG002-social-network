export function FormularioPerfilDeUsuario() {
const html = `
    <section id= "editar-perfil">
    <div class="subirFoto">
    <progress value="0" max="100" id="carga"> 0% </progress>
    <img  class="myimg" id="foto-perfil">
<input type="file" id="my-file"> 
    </div>
      
<form id="formulario">
<label for="name">Nombre de usuario</label>
<input type="text" class="input" id="name" placeholder="Nombre" name="name"></input>
<label for="descripcion">Descripcion </label>
<input type="text" class="input" id="descripcion" placeholder="Describete para que te conozcan tus amigos" name="descripcion"></input>
<button type="submit" id="guardar" class="btn"> Guardar</button>
</form>
</section>`;
return html;
}
export function EditarPerfil() {
const file = document.getElementById('my-file');
file.addEventListener('change', function (e) {
        let file = e.target.files[0];
        let StorageRef = firebase.storage().ref('foto_perfil/' + file.name)
        const subir = StorageRef.put(file);

        subir.on('state_change', (snapshot) => {
            carga.style = 'display:block'
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            carga.value = progress;
        }, function (error) {
            switch (error.code) {
                case 'storage/unauthorized':
                    alert('No autorizado');
                    break;
                case 'storage/canceled':
                    alert(' Carga cancelada');
                    break;
                case 'storage/unknown':
                    alert('Imagen desconocida');
                    break;
            }
        }, () => {

            const guardar = document.getElementById("guardar")
            guardar.addEventListener('click', (e) => {
                e.preventDefault();
                const nombre = document.getElementById('name').value;
                subir.snapshot.ref.getDownloadURL().then(function (downloadURL) {

                    auth.currentUser.updateProfile({displayName: nombre, photoURL: downloadURL}).then(function () {
                        window.location.hash = '#/profile'
                    }, function (error) {
                        console.log("error", error);
                    });
                })
            });
        })
    })
}

// const descripcion = document.getElementById('descripcion').value  user.displayName = document.getElementById('name').value;
