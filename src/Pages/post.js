export function PrintCollection(Publicar, ID, Nombre, UID, Descripcion, Fecha, Foto, Lugar) {
  Publicar.innerHTML += `
        <div class="post"  >
        <form id="FormPost" data-uid= "${UID}">
          <span class="nombre-usuario"> <i class="fas fa-user-circle"> </i> ${Nombre} </span>
          <span class="contenido" id= "contenido">${Descripcion} </span>
          <div class="adjunto"> <img id="ImagePost" src="${Foto}">  </div> 
          <div id="fecha-lugar">
             <span class="fecha" >${Fecha}</span>
             <span class="lugar" id= "lugar"> <img src="./imagenes/Location-1.svg">${Lugar}</span>
          </form>  
          </div>
          <div class="interaciones">

              <button type="button" id="likes"> <i class="fas fa-star"> </i > <input id="contador" value="0" readonly> 1 </button> 
              <button class="editar" type="button" data-id = "${ID}" > <i class="far fa-edit" > </i> Editar </button> 
              <button class="basura" type="button" data-id = "${ID}" > <i class="fas fa-trash-alt" > </i> Eliminar </button> 
            
          </div>
        <div>`;
}
