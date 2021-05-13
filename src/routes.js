
import {home, BotondeCrearCuentaconGoogle} from './Pages/Home.js';
import {FormularioDeRegistro,  Datos_de_registro} from './Pages/SingUp.js';
import {FormularioDeIngreso,DatosDeLogin} from './Pages/Login.js';
import {SoloUsuarios} from './Firebase/firebaseAuth.js';
import { inicio, CerrarSesion} from './Pages/inicio.js';
import { perfil } from './Pages/perfil.js';
import { Error404} from './Pages/Error 404.js';

 
let content = document.getElementById('root');
 
export const router = (route) => {
    // para el registro
    const container_modal = document.getElementById('container_modal')
    container_modal.classList.remove('show');
    // para el login
    const login_modal = document.getElementById('login_modal');
    login_modal.classList.remove('show');
    content.innerHTML = "";
    let user = SoloUsuarios();
    switch(route) {
        case '':
            content.innerHTML= 
            home();
            BotondeCrearCuentaconGoogle();
            break;
        case '#/signUp':
            content.innerHTML = 
            FormularioDeRegistro();
            Datos_de_registro(); 
            
            
            break;
        case '#/login':
             content.innerHTML = 
             FormularioDeIngreso();
             DatosDeLogin();
             
             break;
        case '#/release':
<<<<<<< HEAD
            SoloUsuarios(inicio());
            CerrarSesion();
            
=======
          
            if (user) {
                 content.innerHTML =  inicio();
                    CerrarSesion();
            }else {
              window.location.hash ='#/login'
            }
           
>>>>>>> 471494661a41f885b43a5bd6409ef80a13d29953
            break;
        case '#/profile':
           
            if (user) {
                 content.innerHTML =  perfil();
                    CerrarSesion();
            }else {
              window.location.hash ='#/login'
            }
                
                break;
        default:
             content.innerHTML = Error404();
    }
} 


