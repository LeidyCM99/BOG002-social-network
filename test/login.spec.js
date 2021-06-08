// importamos el mock manual que creamos
import firebaseMock from '../_mock_/firebase-mock';
import { autenticacionUsuario } from '../src/Firebase/firebaseAuth.js';
const auth = autenticacionUsuario();
global.firebase = firebaseMock();



describe('AutenticacionUsuario', () => {

  it('debería ser una función', () => {
    expect(typeof autenticacionUsuario).toBe('function');
  });

  it('debería crear una cuenta con un correo y una contraseña', () => {

	expect(autenticacionUsuario("ejemplo@gmail.com", "123456", "nameuser")).toBe( 
		"ejemplo@gmail.com" ,"123456", "nameuser");
	
});

//   it('debería crear una cuenta con un correo y una contraseña', () => {
// 	auth.createUserWithEmailAndPassword(email, password).then((data) => {
// 	 expect(data).toBe("ejemplo@gmail.com", "123456");
//    })
//  });
});
