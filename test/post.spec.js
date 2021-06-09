// importamos el mock manual que creamos
// import MockFirebase from '../_mock_/firebase-mock.js';
// global.firebase = MockFirebase();
import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
	__collection__: {
	  publicaciones: {
		__doc__: {
		  a987z: {
			nombre: "Pepito",
			descripcion: "Comida de mar",
			Lugar: "Santa Marta",
			Fecha: "02-09-2021 10:40"
		  },
		  ab879: {
			nombre: "Luna",
			descripcion: "Deliciosa comida",
			Lugar: "Foto",
			Fecha: "07-09-2021 12:40"
		  }
		 }
	   }
	}
  };
  global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
  global.db = firebase.firestore();
  import { SavePublicaciones } from '../src/Firebase/firestore.js';

describe('Firestore añadir post', () => {
  it('debería ser una función', () => {
    expect(typeof SavePublicaciones).toBe('function');
  });

  it('Agregar publicacion', () => {
	  return  SavePublicaciones( "Tortilla con queso")
	  .then((data) =>{
		expect(data.descripcion).toBe("Tortilla con queso");
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
