// importamos el mock manual que creamos
import firebaseMock from '../_mock_/firebase-mock';
import { autenticacionUsuario, autenticacion } from '../src/Firebase/firebaseAuth.js';
// const auth = autenticacionUsuario();

global.firebase = firebaseMock();
global.auth = firebase.auth();



describe('AutenticacionUsuario', () => {

  it('debería ser una función', () => {
    expect(typeof autenticacionUsuario).toBe('function');
  });

  it('debería crear una cuenta con un correo y una contraseña', () => {
	return autenticacion("usuario@gmail.com", "123456")
	.then((result)=>{
		expect(result.user.email).toBe("usuarioNuevo@gmail.com" );
		})
});

//   it('debería crear una cuenta con un correo y una contraseña', () => {
// 	auth.createUserWithEmailAndPassword(email, password).then((data) => {
// 	 expect(data).toBe("usuario@gmail.com", "123456");
//    })
//  });
});
