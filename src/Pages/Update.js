export function modalEditar() {


    const modal = document.getElementById('editar_modal');
    const texto = document.getElementById('textoModal')

    texto.innerHTML = ` 
        <form id="form-modal">
        <span class="nombre-usuario">  <i class="fas fa-user-circle"> Nombre de usuarios o display </i> </span>
        <span class="contenido" id="editContenido">algun contenido </span>

        <div id="fecha-lugar">
           <span class="fecha" >27-05-2021 </span>
           <span class="lugar" id= "editLugar"> bogota <img src="./imagenes/Location-1.svg"></span>
        </div>
        </form>
        
           <button type="button" class="btn" id="actualizar"> Actualizar</button>
           <button type="button"  class="btn" id= "close-post" > <a href="#/release"> Cerrar</a> </button>
           `

    modal.classList.add('show');
    const cerrar = document.getElementById('close-post');
    cerrar.addEventListener('click', () => {
        modal.classList.remove('show');
    });
}
