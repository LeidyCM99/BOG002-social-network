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

// *********************** Accediendo a todos los documentos de la coleccion ******************


export function MostrarPublicaciones() {

    const Publicar = document.getElementById("publicaciones");
    db.collection('publicaciones').orderBy("fecha", "desc").onSnapshot((querySnapshot) => {

        Publicar.innerHTML = ``;
        querySnapshot.forEach((doc) => {

            let ID = doc.id;
            let Nombre = doc.data().nombre;
            let UID = doc.data().uid;
            let Descripcion = doc.data().descripcion;
            let Fecha = doc.data().fecha;
            let foto = doc.data().foto;
            let Lugar = doc.data().lugar;

            PrintCollection(Publicar, ID, Nombre, UID, Descripcion, Fecha, foto, Lugar);

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
const update = (id, update, e) => {
    e.preventDefault();
    console.log(id, update)
    return firebase.firestore().collection("publicaciones").doc(id).update(update).then(() => {
        console.log("documento editado!");

        const modal = document.getElementById('editar_modal');
        modal.classList.remove('show');
    })
}
export function editar(id) {
    const post = document.getElementById("formPost");


    let btnsEditar = document.querySelectorAll("button.editar");

    btnsEditar.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            modalEditar();
            const boton = document.getElementById("actualizar");
            const descripcion = document.getElementById("editContenido");
            const lugar = document.getElementById("editLugar");

            const doc = await editarPost(e.target.dataset.id);
            const data = doc.data();
            const id = doc.id;
            console.log("id", id)
            // Data del post traida de firebase
            let dataDescripcion = data.descripcion;
            let dataLugar = data.lugar;
            // asignacion de la data para editar
            descripcion.value = dataDescripcion;
            lugar.value = dataLugar;

            // guardando cambios
            boton.addEventListener("click", () => {
                update(id, {
                    descripcion: dataDescripcion,
                    lugar: dataLugar
                }, e)
            })
        })
    })
}
