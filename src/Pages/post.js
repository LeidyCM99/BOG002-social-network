export function PrintCollection(Publicar, ID, NombreUser, Descripcion, Fecha, Lugar) {

    Publicar.innerHTML += `	
        <div class="post" >
        <form id="FormPost">
          <span class="nombre-usuario"> <i class="fas fa-user-circle"> </i> ${NombreUser} </span>
          <span class="contenido" id= "contenido">${Descripcion} </span>
          <div id="fecha-lugar">
             <span class="fecha" > ${Fecha}</span>
             <span class="lugar" id= "lugar"> <img src="./imagenes/Location-1.svg">${Lugar}</span>
          </form>  
          </div>
          <div class="interaciones">

              <button type="button"><i class="fas fa-star"> </i class="contador"> <span> 1 </span></button> 
              <button class="editar" type="button" data-id = "${ID}" > <i class="far fa-edit" > </i> Editar </button> 
              <button class="basura" type="button" data-id = "${ID}" > <i class="fas fa-trash-alt" > </i> Eliminar </button> 
            
          </div>
        <div>`
}
