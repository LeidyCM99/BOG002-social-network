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
		  }
		 }
	   }
	}
  };
  global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
  import { SavePublicaciones } from '../src/Firebase/firestore.js';
console.log(MockFirebase
	)
describe('Firestore añadir post', () => {

  it('debería ser una función', () => {
    expect(typeof SavePublicaciones).toBe('function');
  });

//   it('Agregar publicacion', () => {
// 	  return  SavePublicaciones( "Tortilla con queso").then((data) =>{
// 		expect(data.descripcion).toBe('Publicado');
// 	  })
    		
//   });
});

// describe(' expresion regular', () => {
//   test('debería retornar el email', () => {
//     expect('ejemplo@gmail.com').toBe('function');
//   });
// });

// usar --watch para ver el teste en vivo.
// jest.fn() funcion tipo mock, MockResolveValue
