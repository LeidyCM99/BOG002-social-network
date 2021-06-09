// importamos el mock manual que creamos
import firebaseMock from '../_mock_/firebase-mock';
import { autenticacion,  InicioSesion } from '../src/Firebase/firebaseAuth.js';
// const auth = autenticacionUsuario();

global.firebase = firebaseMock();
global.auth = firebase.auth();



describe('Creacion de cuenta', () => {

  it('debería ser una función', () => {
    expect(typeof autenticacion).toBe('function');
  });

  it('debería crear una cuenta con un correo y una contraseña', () => {
	return autenticacion("usuario@gmail.com", "123456")
	.then((result)=>{
		expect(result.user.email).toBe("usuario@gmail.com");
		})
});

  it('debería dar respuesta a un error de autenticacion', () => {
	return autenticacion("usuarioError@gmail.com", "123456")
	.catch((result)=>{
		expect(result.code).toBe("correo registrado");
		})	
});
});

describe('Inicio de sesion', () => {

	it('debería ser una función', () => {
	  expect(typeof InicioSesion).toBe('function');
	});

	it('El correo deberia ser el mismo registrada para ingresar', () => {
		return InicioSesion("usuarioRegistrado@gmail.com", "123456")
		.then((result)=>{
			expect(result.user.email).toBe("usuarioRegistrado@gmail.com");
		})
	});
	it('debería mostrar error usuario no registrado ', () => {
		return InicioSesion("usuario@gmail.com", "123456")
		.catch((result)=>{
			expect(result.code).toBe("correo no registrado ");
		})
	});
});
