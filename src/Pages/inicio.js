import { SavePublicaciones } from '../Firebase/firestore.js';

export function inicio() {
  const html = `
    <section id="pagina">
      <div id="encabezado">
      <div id="logo"> FoodFans </div>
      </div>

    <nav>
    <ul>
    <li><a id="inicio" href="#/release"><img src="./imagenes/Home.svg"></a>Inicio </li>
    <li><a id="perfil" href="#/profile"><img src="./imagenes/Profile.svg"></a>Perfil</li>
    <li><a id="buscar" href="#/search"><img src="./imagenes/Search.svg"></a>Buscar</li>
    </ul>
    </nav>

    <form class="area-publicar">
    <img src="./imagenes/usuario.png" id="foto-usuario">
   <div class ="insertar-publicacion">
   <textarea type="text" maxlength="250" minlength="2"  required class="publicar" placeholder= "¿Que tienes para contar?"></textarea>
   <progress value="0" max="100" id="carga"> 0% </progress>
    <label from="file" id="file-label"> 
    + <i class="fas fa-image"></i>
    <input type='file' name="file" id='file'>  </file>
    </label>
    <span class="area-lugar">
    <img src="./imagenes/Location-1.svg">
    <input id="input-lugar" type="text" maxlength="250" minlength="2"  required placeholder="¡Estoy aqui!">
    </span>
    </div>
   </form>
   <div id="submit-publicar">
	<button type="button" class="btn" id="publicar-btn" > Publicar </button> 
	</div>
	<div id="publicaciones">	
	</div>
</section>
`;
  return html;
}

// obtener valores para publicar
export async function ParaPublicar() {
    const fileP = document.getElementById('file');
    const carga = document.getElementById('carga');

    fileP.addEventListener('change', (e) => { 
      
    const file       = e.target.files[0];
    const StorageRef = firebase.storage().ref(`album/${file.name}`);
    const subir      = StorageRef.put(file);
    subir.on('state_change', (snapshot) => {
        carga.style    = 'display:block';
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        carga.value    = progress;
    }, (error) => {
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
      const BtnPublicar = document.getElementById('publicar-btn');
             BtnPublicar.addEventListener('click', () => {
        
        subir.snapshot.ref.getDownloadURL().then((downloadURL) => {
          const user = auth.currentUser, // esta variable se usara en el documento firebaseauth
           objectoAccion = new Date();
          

          const DataPublicaciones = {
            nombre: user.displayName,
            uid:user.uid,
            descripcion:document.querySelector('.publicar').value,
            foto:downloadURL,
            fecha: `${objectoAccion.getDate()}-${0}${objectoAccion.getMonth() + 1}-${objectoAccion.getFullYear()}  ${objectoAccion.getHours()}:${objectoAccion.getMinutes()}`,
            lugar:document.querySelector('#input-lugar').value,
          };

          SavePublicaciones(DataPublicaciones)
		
        });
        document.querySelector('.area-publicar').reset();
        carga.style = 'display:none';
      });
    });
  });
}
