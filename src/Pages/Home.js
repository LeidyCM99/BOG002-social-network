export function home() {
  const html = `
   
       <div class="fondo">
        <h1 class="Titulo">FoodFans <span class= "subtitulo">Social Network </span> </h1>
        
        <p>Postea tus mejores platos, comparte tu experiencia y enseñala a tus amigos.</p>

            <!-- Botones para el ingreso y registro -->
         <section id="Botones" class="Bienvenida">
      
            <button type="button" id="signUpGoogle" class="btnHome" > <img src="imagenes/google.png">Iniciar sesion con Google</button>
            <button type="button" id="signUp" class="btnHome" > <a href="#/signUp"> Registrarme </a></button>
            <button type="button" id="loginPpal" class="btnHome" > <a href="#/login"> Iniciar sesion</a></button>
        
         </section>
         </div>
        `;
  return html;
}

// capturamos el click sobre el boton crear cuenta con Google
export function BotondeCrearCuentaconGoogle() {
	const Google = document.getElementById("signUpGoogle");
	const provider = new firebase.auth.GoogleAuthProvider();
	Google.addEventListener('click', () => {
	  
	   
	   firebase.auth().signInWithPopup(provider)
	  .then(result => {
		  console.log(result + "sign");
	    window.location.hash = '#/release';
	  })
	  .catch((error) => { 
		console.log(error)
	  });
  });
  }
  