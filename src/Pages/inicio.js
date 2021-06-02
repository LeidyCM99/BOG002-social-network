import {Salir} from '../Firebase/firebaseAuth.js';
import {SavePublicaciones} from '../Firebase/firestore.js'

export function inicio() {

    let html = `
    <section id="pagina">
	<div id="encabezado">
		<div id="logo"> FoodFans </div>
		<div id="configuracion"><img src="./imagenes/Setting.svg">

		</div> 
	</div>

	<nav>
		<ul>
			<li><a id="inicio" href="#/release"><img src="./imagenes/Home.svg"></a>Inicio </li>
			<li><a id="perfil" href="#/profile"><img src="./imagenes/Profile.svg"></a>Perfil</li>
			<li><a id="buscar" href="#/search"><img src="./imagenes/Search.svg"></a>Buscar</li>
		</ul>
	</nav>

	<div id="menu">
		<span class= "setting">Cambiar nombre</span>
		<span class= "setting" id="cerrar-sesion">Cerra sesion</span>
	</div>
	<form class="area-publicar">
	<img src="./imagenes/usuario.png" id="foto-usuario">
		<div class ="insertar-publicacion">
			<input type="text" maxlength="250" minlength="2"  required class="publicar" placeholder=" ¿Que tienes para contar?">  
			<span class="area-lugar">
					<img src="./imagenes/Location-1.svg">
					<input id="input-lugar" type="text" maxlength="250" minlength="2"  required placeholder="¡Estoy aqui!">
				</span>
				<input type='file' id='file'> </input>
		</div>
	</form>
	<div id="submit-publicar">
		<button type="submit" class="btn" id="publicar-btn" > Publicar </button> 
	</div>
	<div id="publicaciones">	
	</div>
	</section>
`
    return html;
}


// obtener valores para publicar


export async function ParaPublicar() {


    const BtnPublicar = document.getElementById("publicar-btn")
    await BtnPublicar.addEventListener("click", (e) => {
        e.preventDefault();

        const fileP = document.getElementById("file").files[0];
        const nameFileP = fileP.name;
		
        let rstorage = storage.child(nameFileP).put(fileP);
            rstorage.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
            console.log("cambio de estado")
        })
		const descripcion   = document.querySelector(".publicar").value;
		const lugar  = document.querySelector("#input-lugar").value;
        rstorage.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            
			const user   = firebase.auth().currentUser; // esta variable se usara en el documento firebaseauth
			const nombre = user.displayName;
			const uid    = user.uid;
			const foto   = downloadURL;
			const objectoAccion = new Date();
			const fecha  = objectoAccion.getDate() + "-" + 0 + (objectoAccion.getMonth() + 1) + "-" + objectoAccion.getFullYear() + "  " + objectoAccion.getHours() + ":" + objectoAccion.getMinutes();
			
			const publicaciones = {
				nombre,
				uid,
				descripcion,
				foto,
				fecha,
				lugar
			}
			
			SavePublicaciones(publicaciones);  
        })
        document.querySelector(".area-publicar").reset();
    })

}
export function CerrarSesion() {
    let BotonCerrar = document.getElementById('cerrar-sesion');
    BotonCerrar.addEventListener('click', Salir);
}
