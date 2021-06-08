import { PrintCollection } from '../Pages/post.js';
import { modalEditar } from '../Pages/Update.js';

// *********************** Guardando publicaciones a la coleccion ***********************
export const SavePublicaciones = (publicaciones) => {
	 db.collection('publicaciones').add(publicaciones)  
	 .then(() => {
		data.message = 'Enviado'
	  })
	  .catch((error) => {
		data.message = error;
	  });
};

// *********************** Accediendo a todos los documentos de la coleccion ******************

export function MostrarPublicaciones() {
  const Publicar = document.getElementById('publicaciones');
  db.collection('publicaciones').orderBy('fecha', 'desc').onSnapshot((querySnapshot) => {
    Publicar.innerHTML = '';
    querySnapshot.forEach(async (doc) => {
      const ID = doc.id;
      const Nombre = doc.data().nombre;
      const UID = doc.data().uid;
      const Descripcion = doc.data().descripcion;
      const Fecha = doc.data().fecha;
      const foto = doc.data().foto;
      const Lugar = doc.data().lugar;

      await PrintCollection(Publicar, ID, Nombre, UID, Descripcion, Fecha, foto, Lugar);
    });
    eliminar();
    editar();
  });
}
// *********************** Eliminando  los documentos de la coleccion por id ******************

const eliminarPost = (id) => db.collection('publicaciones').doc(id).delete();

function eliminar() {
  const btnsBorrar = document.querySelectorAll('button.basura');

  btnsBorrar.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      await eliminarPost(e.target.dataset.id);
    });
  });
}

//  *********************** editar los documentos de la coleccion por id ******************
// funcion editPost() me trae la los datos de la coleccion la cual uso para editar y actualizar con la
// otra funcion editar()

const editarPost = (id) => db.collection('publicaciones').doc(id).get();
const update = (id, updatePost) => firebase.firestore().collection('publicaciones').doc(id).update(updatePost)
  .then(() => {
    const modal = document.getElementById('editar_modal');
    modal.classList.remove('show');
  });
export function editar(id) {
  const btnsEditar = document.querySelectorAll('button.editar');

  btnsEditar.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      modalEditar();
      const boton = document.getElementById('actualizar');
      const descripcion = document.getElementById('editContenido');
      const lugar = document.getElementById('editLugar');

      const doc = await editarPost(e.target.dataset.id);
      const data = doc.data();
      const id = doc.id;

      // Data del post traida de firebase
      const dataDescripcion = data.descripcion;
      const dataLugar = data.lugar;
      // asignacion de la data para editar
      descripcion.value = dataDescripcion;
      lugar.value = dataLugar;

      // guardando cambios
      boton.addEventListener('click', () => {
        update(id, {
          descripcion: descripcion.value,
          lugar: lugar.value,
        });
      });
    });
  });
}
