import {PrintCollection} from '../Pages/post.js'
import {modalEditar} from "../Pages/Update.js";

// *********************** Guardando publicaciones a la coleccion ***********************
export const SavePublicaciones = (publicaciones) => {

    db.collection("publicaciones").add(publicaciones).then((docRef) => {
        console.log("enviado")
    }).catch((error) => {
        console.error("Error adding document: ", error);
    });
}
// *********************** AGREGAR USUARIOS A LA COLECCION ***********************
export const SaveUser = (user) => {
    db.collection("usuarios").add({user}).then((docRef) => {
        console.log("Enviado a la consola firestore ", docRef.id);
        window.location.hash = '#/profile';
    }).catch((error) => {
        console.error("Error adding document: ", error);
    });
}
// *********************** Accediendo a todos los documentos de la coleccion ******************

export function MostrarPublicaciones() {

    const Publicar = document.getElementById("publicaciones");
    db.collection('publicaciones').orderBy("fecha", "desc").onSnapshot((querySnapshot) => {

        Publicar.innerHTML = ``;
        querySnapshot.forEach((doc) => {

            let ID = doc.id;
            let NombreUser = doc.data().nombre;
            let Descripcion = doc.data().descripcion;
            let Fecha = doc.data().fecha;
            let Lugar = doc.data().lugar;

            PrintCollection(Publicar, ID, NombreUser, Descripcion, Fecha, Lugar);
            
        });
        eliminar();
        editar();
    });
}
// *********************** Eliminando  los documentos de la coleccion por id ******************


const eliminarPost = id => db.collection("publicaciones").doc(id).delete()

function eliminar(id) {

    let btnsBorrar = document.querySelectorAll("button.basura");

    btnsBorrar.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            await eliminarPost(e.target.dataset.id);
        })
      
    })
}

// *********************** editar los documentos de la coleccion por id ******************

const editarPost = (id) => db.collection("publicaciones").doc(id).get();
const update = (id, update) => db.collection("publicaciones").doc(id).update(update);

export function editar(id) {
    const post= document.getElementById("formPost");
    const boton = document.getElementById("actualizar");
    const descripcion = document.getElementById("editContenido");
    const lugar = document.getElementById("editLugar");
    
    
    let btnsEditar = document.querySelectorAll("button.editar");

    btnsEditar.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            modalEditar();

            const doc = await editarPost(e.target.dataset.id);
            const data = doc.data();
           
            // Data del post traida de firebase
            id = data.doc;
            descripcion.value = data.descripcion,
            lugar.value       = data.lugar,
            // campo al que se le asignara la data para editar

            // guardando cambios
            boton.addEventListener("click", update(id, {
                
                    descripcion: descripcion.value,
                    lugar: lugar.value 
                  }))
 
    })
})
}   





























// }).then(() => { // console.log("documento editado!");
//      location.reload();
// }).catch((error) => {
//      console.error("Ocurrió algún error al editar el post: ", error);
// });
