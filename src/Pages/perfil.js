import { Salir } from '../Firebase/firebaseAuth.js';

export function perfil() {
  const user = firebase.auth().currentUser;
  const html = `
    <div class="container">
    <header>
      <div class="menu">
      <div id="logo"> FoodFans </div>
      	<div id="configuracion">
      <img src="./imagenes/Setting.svg">
      <div class="enlaces" id="enlaces">
      <span class= "setting"> <i class="fas fa-user-edit"></i><a href="#/editarPerfil">  Editar Perfil</a></span>
      <span class= "setting" id="cerrar-sesion"> <i class="fas fa-sign-in-alt"></i>Cerrar sesion</span>
      	</div>
      </div> 
    </header>
    <nav>
    <ul>
    <li><a href="#/release"><img src="./imagenes/Home.svg"></a>Inicio </li>
    <li><a href="#/profile"><img src="./imagenes/Profile.svg"></a>Perfil</li>
    <li><a href="#/search"><img src="./imagenes/Search.svg"></a>Buscar </li>
	</ul>
   </nav>
      <section id="section-perfil">
     <div id='perfil' class="perfil">
     <img class="myimg" id="foto-perfil" src="${user.photoURL}" >
     <h1 id="Nombre-de-usuario"> ${user.displayName}</h1>
     
     <p class="descripcion"> Descripcion del usuario</p>
     </div>
     <div id="publicaciones"></div>
     </section>
	

	</div>`;
  return html;
}

export function name() {
  const Nombre_usuario = document.getElementById('Nombre-de-usuario');
  const descripcion = document.getElementsByClassName('descripcion');
}

export function CerrarSesion() {
  const BotonCerrar = document.getElementById('cerrar-sesion');
  BotonCerrar.addEventListener('click', Salir);
}
