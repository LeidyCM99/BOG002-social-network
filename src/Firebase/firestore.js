import {PrintCollection} from '../Pages/post.js'
import { InputEditar } from "../Pages/Update.js";
// *********************** AGREGAR PUBLICACIONES A LA COLECCION ***********************
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
// *********************** accediendo a todos los documentos de la coleccion ******************

export function MostrarPublicaciones() {

    const Publicar = document.getElementById("publicaciones");
    db.collection('publicaciones').orderBy("fecha", "desc").onSnapshot((querySnapshot) => {

        Publicar.innerHTML = ``;
        querySnapshot.forEach((doc) => {

            let ID          = doc.id;
            let NombreUser  = doc.data().nombre;
            let Descripcion = doc.data().descripcion;
            let Fecha       = doc.data().fecha;
            let Lugar       = doc.data().lugar;

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
            await eliminarPost(e.target.dataset.id)
        })
    })
}

// *********************** editar los documentos de la coleccion por id ******************

const editarPost = id => db.collection("publicaciones").doc(id).update({ 
// descripcion: "Editandoooo",
//  lugar: "Lugar nuevo"
 }
)


export function editar(id) {

    let btnsEditar = document.querySelectorAll("button.editar");

    btnsEditar.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            
             await editarPost(e.target.dataset.id)
                console.log(editarPost(e.target.dataset.id))
        })
    })
}
// }).then(() => { // console.log("documento editado!");
//      location.reload();
// }).catch((error) => {
//      console.error("Ocurrió algún error al editar el post: ", error);
// });
