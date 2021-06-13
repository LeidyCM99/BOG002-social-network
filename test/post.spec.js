// importamos el mock manual que creamos
// import MockFirebase from '../_mock_/firebase-mock.js';

import MockFirebase from 'mock-cloud-firestore';
import { SavePublicaciones, MostrarPublicaciones } from '../src/Firebase/firestore.js';

const fixtureData = {
	__collection__: {
	  publicaciones: {
		__doc__: {
		  a987z: {
			nombre: "Pepito",
			descripcion: "Comida de mar",
			Lugar: "Santa Marta",
			Fecha: "02-09-2021 10:40"
		  }
		 }
	   }
	}
  };
  
  global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
  global.db = firebase.firestore();
  
   describe('Firestore añadir post', () => {

  it('debería ser una función', () => {
    expect(typeof SavePublicaciones).toBe('function');
  });

  it('Agregar publicacion', (done) => {
	  return  SavePublicaciones( "Juanita","Tortilla con queso","Bogota","09-09-2021 12:40").then((data) =>{
		const datos = ( ID, Nombre, UID, Descripcion, Fecha, foto, Lugar);
		console.log(datos)
		 done()
		// expect(doc).toBe("Tortilla con queso");
	  })
 		
});
});

// describe(' expresion regular', () => {
//   test('debería retornar el email', () => {
//     expect('ejemplo@gmail.com').toBe('function');
//   });
// });

// usar --watch para ver el teste en vivo.
// jest.fn() funcion tipo mock, MockResolveValue
