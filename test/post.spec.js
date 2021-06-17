
import MockFirebase from 'mock-cloud-firestore';
import { SavePublicaciones } from '../src/Firebase/firestore.js';

const fixtureData = {
	__collection__: {
	  publicaciones: {
		__doc__: {
             uBMxkRBKLZCPQgcq1fT: {
			 uid:"tY3v9aghwmdHIrLM3W17rxpN6A12",
			 nombre: "Pepito",
			 descripcion: "Comida de mar",
			 Lugar: "Santa Marta",
			 Fecha: "02-09-2021 10:40",
			 Foto: "https://firebasestorage.googleapis.com/v0/b/social-network-19982.appspot.com/o/restaurante.jpg?alt=media&token=8064e634-924a-4db3-826e-19201abef0b9"
		},
	 },
    },
 },
};
  
  global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
  global.db = firebase.firestore();
  
   describe('Firestore añadir post', () => {

  it('debería ser una función', () => {
    expect(typeof SavePublicaciones).toBe('function');
  });

  it('Agregar publicacion', (done) => {
	  const DataPublicaciones = {
		  uid: "1213swq", 
		  nombre:"Juanita",
		  descripcion:"Tortilla con queso",
		  lugar:"Bogota",
		  fecha:"09-09-2021 12:40",
		  foto:"https://firebasestorage.googleapis.com/v0/b/social-network-19982.appspot.com/o/restaurante.jpg"}

	return SavePublicaciones(DataPublicaciones)
	 	.then((data) =>{
		expect(data._data.descripcion).toBe("Tortilla con queso");
		done()
	  })
 		
});
});


// usar --watch para ver el teste en vivo.
// jest.fn() funcion tipo mock, MockResolveValue
